// client/components/ColorsGrid.jsx
import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const FeelingsGrid = () => {
  const [feelings, setFeelings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeelings = async () => {
      try {
        const [feelingsRes, emotionsRes] = await Promise.all([
          fetch('/api/items/category/feelings'),
          fetch('/api/items/category/emotions')
        ]);

        if (!feelingsRes.ok) throw new Error(`Feelings Error: ${feelingsRes.status}`);
        if (!emotionsRes.ok) throw new Error(`Emotions Error: ${emotionsRes.status}`);

        const feelingsData = await feelingsRes.json();
        const emotionsData = await emotionsRes.json();

        setFeelings([...feelingsData, ...emotionsData]);
      } catch (err) {
        console.error('Failed to load feelings and emotions:', err);
        setError('Could not fetch feeling and emotion items.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeelings();
  }, []);

  if (loading) return <p>Loading feelings and emotions...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={feelings} />;
};

export default FeelingsGrid;
