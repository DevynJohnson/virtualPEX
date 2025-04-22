import React from 'react';
import AnimalsGrid from '../components/AnimalsGrid.jsx';
import TopRow from '../components/TopRow.jsx';

const Animals = () => {
  return (
    <div>
      <h1>Animals</h1>
      <TopRow />
      <AnimalsGrid />
    </div>
  );
};

export default Animals;
