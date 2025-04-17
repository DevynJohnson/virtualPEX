import React from 'react';
import TopRow from '../components/TopRow';
import ItemsGrid from '../components/ItemsGrid';

const clothingItems = [
  { id: 1, imageUrl: '/assets/images/shirt.png', altText: 'Shirt',    audio: '/assets/audio/shirt.mp3'   },
  { id: 2, imageUrl: '/assets/images/pants.png', altText: 'Pants',    audio: '/assets/audio/pants.mp3'   },
  // …add more clothing items here
];

const Clothing = () => {
  const handleItemClick = item => new Audio(item.audio).play();

  return (
    <div>
      <TopRow onItemClick={handleItemClick} />
      <h1>Clothing</h1>
      <ItemsGrid items={clothingItems} onItemClick={handleItemClick} />
    </div>
  );
};

export default Clothing;
