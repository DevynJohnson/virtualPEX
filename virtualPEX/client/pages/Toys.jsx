import React from 'react';
import TopRow from '../components/TopRow';
import ItemsGrid from '../components/ItemsGrid';

const toyItems = [
  { id: 1, imageUrl: '/assets/images/ball.png',      altText: 'Ball',      audio: '/assets/audio/ball.mp3'     },
  { id: 2, imageUrl: '/assets/images/doll.png',      altText: 'Doll',      audio: '/assets/audio/doll.mp3'     },
  // …add more toy items here
];

const Toys = () => {
  const handleItemClick = item => new Audio(item.audio).play();

  return (
    <div>
      <TopRow onItemClick={handleItemClick} />
      <h1>Toys and Games</h1>
      <ItemsGrid items={toyItems} onItemClick={handleItemClick} />
    </div>
  );
};

export default Toys;
