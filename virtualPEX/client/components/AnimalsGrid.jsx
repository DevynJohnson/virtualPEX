// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const AnimalsGrid = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await fetch('/api/items/category/animals');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setAnimals(data);
      } catch (err) {
        console.error('Failed to load animals:', err);
        setError('Could not fetch animal items.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) return <p>Loading animals...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={animals} />;
};

export default AnimalsGrid;
