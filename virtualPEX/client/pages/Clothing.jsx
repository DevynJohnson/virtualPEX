import React from 'react';
import ClothingGrid from '../components/ClothingGrid';
import TopRow from '../components/TopRow.jsx';

const Clothing = () => {
  return (
    <div>
      <h1>Clothing</h1>
      <TopRow />
      <ClothingGrid />
    </div>
  );
};

export default Clothing;
