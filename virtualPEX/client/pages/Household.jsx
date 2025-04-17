import React from 'react';
import TopRow from '../components/TopRow';
import ItemsGrid from '../components/ItemsGrid';

const householdItems = [
  { id: 1, imageUrl: '/assets/images/cup.png',    altText: 'Cup',    audio: '/assets/audio/cup.mp3'     },
  { id: 2, imageUrl: '/assets/images/soap.png',   altText: 'Soap',   audio: '/assets/audio/soap.mp3'    },
  // …add more household items here
];

const Household = () => {
  const handleItemClick = item => new Audio(item.audio).play();

  return (
    <div>
      <TopRow onItemClick={handleItemClick} />
      <h1>Household Items</h1>
      <ItemsGrid items={householdItems} onItemClick={handleItemClick} />
    </div>
  );
};

export default Household;
