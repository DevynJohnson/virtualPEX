import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Item from '../models/Item.js';
import connectToDatabase from '../config/connection.js';

// Configure environment variables
dotenv.config();

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the Words.json file
const wordsFilePath = path.join(__dirname, 'Words.json');

// Seed the database
const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectToDatabase();
    
    console.log('Connected to the database. Beginning seed operation...');
    
    // Clear existing data
    await Item.deleteMany({});
    console.log('Cleared existing items from the database');
    
    // Read the Words.json file
    const wordsData = JSON.parse(fs.readFileSync(wordsFilePath, 'utf8'));
    
    const items = [];
    
    // Process each top-level category in the JSON file
    for (const [category, content] of Object.entries(wordsData)) {
      // Handle regular arrays
      if (Array.isArray(content)) {
        for (const item of content) {
          items.push({
            name: item.text,
            category,
            imageUrl: item.image
          });
        }
      } 
      // Handle nested structure (like Nouns)
      else if (typeof content === 'object') {
        for (const [subCategory, subItems] of Object.entries(content)) {
          // For categories like "Clothing" that have further nested categories
          if (typeof subItems === 'object' && !Array.isArray(subItems)) {
            for (const [subSubCategory, subSubItems] of Object.entries(subItems)) {
              for (const item of subSubItems) {
                items.push({
                  name: item.text,
                  category: `${category}/${subCategory}/${subSubCategory}`,
                  imageUrl: item.image
                });
              }
            }
          } 
          // For typical subcategories that have arrays of items
          else if (Array.isArray(subItems)) {
            for (const item of subItems) {
              items.push({
                name: item.text,
                category: `${category}/${subCategory}`,
                imageUrl: item.image
              });
            }
          }
        }
      }
    }
    
    // Insert items into the database
    const result = await Item.insertMany(items);
    console.log(`Successfully inserted ${result.length} items into the database`);
    
    console.log('Database seeding complete!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
    console.log('Database connection closed');
  }
};

// Run the seed function
seedDatabase();