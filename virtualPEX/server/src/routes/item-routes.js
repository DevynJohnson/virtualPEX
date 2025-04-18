import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
});

// POST create a new item
router.post('/', async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json({ message: 'Item added successfully.', item });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Failed to add item.', error: error.message });
    }
});

// PUT update an item by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found.' });
        }
        res.json({ message: 'Item updated successfully.', updatedItem });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Failed to update item.', error: error.message });
    }
});

// PUT update a category of items
router.put('/category/:categoryName', async (req, res) => {
    try {
        const filter = { category: req.params.categoryName };
        const update = req.body;

        const result = await Item.updateMany(filter, update, {
            runValidators: true,
        });

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No items found with that category.' });
        }

        res.json({
            message: `Successfully updated ${result.modifiedCount} item(s).`,
            result,
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Failed to update items.',
            error: error.message,
        });
    }
});

// DELETE an item by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found.' });
        }
        res.json({ message: 'Item deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete item.', error: error.message });
    }
});

// GET a single item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found.' });
        }
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve item.', error: error.message });
    }
});

// GET a single item by name
router.get('/name/:name', async (req, res) => {
    try {
        const item = await Item.findOne({ name: new RegExp(`^${req.params.name}$`, 'i') });
        if (!item) {
            return res.status(404).json({ message: 'Item not found.'});
        }
        res.json(item);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve item.', error: error.message })
}
});

// GET items by category
router.get('/category/:categoryName', async (req, res) => {
    try {
        const categoryParam = req.params.categoryName;
        const items = await Item.find({ category: new RegExp(`^${categoryParam}$`, 'i') });

        if (!items.length) {
            return res.status(404).json({ message: `No items found in category: ${categoryParam}` });
        }

        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve items by category.', error: error.message });
    }
});

export default router;
