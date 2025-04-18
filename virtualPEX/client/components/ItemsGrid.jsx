// client/components/ItemsGrid.jsx
import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import { getTTSAudio, playAudio } from '../textToSpeech.js';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ItemsGrid = ({ items = [], onItemClick, voiceId = 'henry' }) => {
  const handleCardClick = async (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      try {
        const audio = await getTTSAudio(item.name, voiceId);
        await playAudio(audio);
      } catch (err) {
        console.error('Failed to play audio for item:', item.name, err);
      }
    }
  };

  return (
    <GridContainer>
      {items.map(item => (
        <Card
          key={item._id || item.id}
          item={item}
          voiceId={voiceId}
          onClick={() => handleCardClick(item)}
        />
      ))}
    </GridContainer>
  );
};

export default ItemsGrid;
