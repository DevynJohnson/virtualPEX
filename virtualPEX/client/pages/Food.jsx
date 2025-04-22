import React from 'react';
import FoodGrid from '../components/FoodGrid.jsx';
import TopRow from '../components/TopRow.jsx';

const Food = () => {
  return (
    <div>
      <h1>Food and Beverage</h1>
      <TopRow />
      <FoodGrid />
    </div>
  );
};

export default Food;
