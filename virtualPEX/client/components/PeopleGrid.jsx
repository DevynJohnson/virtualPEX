// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const PeopleGrid = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await fetch('/api/items/category/people');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setPeople(data);
      } catch (err) {
        console.error('Failed to load colors:', err);
        setError('Could not fetch color items.');
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (loading) return <p>Loading people...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={people} />;
};

export default PeopleGrid;
