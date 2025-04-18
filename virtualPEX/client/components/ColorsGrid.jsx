// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const ColorsGrid = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const res = await fetch('/api/items/category/Colors');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setColors(data);
      } catch (err) {
        console.error('Failed to load colors:', err);
        setError('Could not fetch color items.');
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, []);

  console.log('Color items:', colors);

  if (loading) return <p>Loading colors...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={colors} />;
};

export default ColorsGrid;
