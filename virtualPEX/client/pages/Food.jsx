import React from 'react';
import TopRow from '../components/TopRow';
import ItemsGrid from '../components/ItemsGrid';

const foodItems = [
  { id: 1, imageUrl: '/assets/images/hungry.png', altText: 'Hungry',    audio: '/assets/audio/hungry.mp3' },
  { id: 2, imageUrl: '/assets/images/drink.png',  altText: 'Drink',     audio: '/assets/audio/drink.mp3'  },
  // …add more food items here
];

const Food = () => {
  const handleItemClick = item => new Audio(item.audio).play();

  return (
    <div>
      <TopRow onItemClick={handleItemClick} />
      <h1>Food and Beverage</h1>
      <ItemsGrid items={foodItems} onItemClick={handleItemClick} />
    </div>
  );
};

export default Food;
