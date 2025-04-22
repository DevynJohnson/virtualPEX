import React, { useEffect, useState } from 'react';
import ItemsGrid from './ItemsGrid';

const coreWordNames = ['I', 'You', 'See', 'Hear', 'Want', 'Yes', 'No'];

const CoreWordsGrid = () => {
  const [coreItems, setCoreItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoreItems = async () => {
      try {
        const fetchedItems = await Promise.all(
          coreWordNames.map(async (name) => {
            const res = await fetch(`/api/items/name/${name}`);
            if (!res.ok) throw new Error(`Failed to fetch ${name}`);
            return res.json();
          })
        );
        setCoreItems(fetchedItems);
      } catch (err) {
        console.error('Error fetching core items:', err);
        setError('Could not load core vocabulary.');
      } finally {
        setLoading(false);
      }
    };

    fetchCoreItems();
  }, []);

  if (loading) return <p>Loading core words...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <ItemsGrid items={coreItems} />;
};

export default CoreWordsGrid;
