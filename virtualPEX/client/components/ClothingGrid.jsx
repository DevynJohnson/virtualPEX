// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const ClothingGrid = () => {
  const [clothing, setClothing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClothing = async () => {
      try {
        const res = await fetch('/api/items/category/clothing');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setClothing(data);
      } catch (err) {
        console.error('Failed to load colors:', err);
        setError('Could not fetch color items.');
      } finally {
        setLoading(false);
      }
    };

    fetchClothing();
  }, []);

  if (loading) return <p>Loading clothing...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={clothing} />;
};

export default ClothingGrid;
