// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const HouseholdGrid = () => {
  const [household, setHousehold] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHousehold = async () => {
      try {
        const res = await fetch('/api/items/category/household');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setHousehold(data);
      } catch (err) {
        console.error('Failed to load household:', err);
        setError('Could not fetch household items.');
      } finally {
        setLoading(false);
      }
    };

    fetchHousehold();
  }, []);

  console.log('Color items:', household);

  if (loading) return <p>Loading household items...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={household} />;
};

export default HouseholdGrid;
