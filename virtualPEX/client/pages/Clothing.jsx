import React from 'react';
import ClothingGrid from '../components/ClothingGrid';
import TopRow from '../components/TopRow.jsx';

const Clothing = () => {
  return (
    <div>
      <h1>Common Words</h1>
      <TopRow />
      <h1>Clothing</h1>
      <ClothingGrid />
    </div>
  );
};

export default Clothing;
