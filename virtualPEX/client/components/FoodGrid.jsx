// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const FoodGrid = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch('/api/items/category/foodAndDrink');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setFood(data);
      } catch (err) {
        console.error('Failed to load food:', err);
        setError('Could not fetch color items.');
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  if (loading) return <p>Loading food...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={food} />;
};

export default FoodGrid;
