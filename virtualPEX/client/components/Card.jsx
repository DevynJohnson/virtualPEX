// client/components/Card.jsx
import React from 'react';
import styled from 'styled-components';
import { getTTSAudio, playAudio } from '../textToSpeech';

const CardContainer = styled.div`
  width: 200px;
  height: 250px; // Fixed height for all cards
  margin: 1.25rem; // Increased margin for more space between cards
  text-align: center;
  border: 5px solid black; // Added 5px black border
  border-radius: 12px; // Slightly larger radius to account for border
  display: flex;
  flex-direction: column;
  box-sizing: border-box; // Ensures padding and border are included in element's dimensions
  transition: transform 0.2s;
  background-color: white; // Solid background color to prevent transparency
  position: relative; // For proper z-index handling
  
  &:hover {
    transform: scale(1.50);
    z-index: 10; // Ensures the scaled card appears above other cards
  }
`;

const CardButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; // Ensures consistent sizing
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px; // Fixed height for image
  object-fit: cover; // Ensures image covers the space without distortion
  border-radius: 7px 7px 0 0; // Only round top corners
  display: block; // Removes extra space beneath image
`;

const CardTitle = styled.h3`
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-wrap: break-word; // Allows long words to wrap
  word-break: break-word; // Breaks long words if needed
`;

const Card = ({ item, voiceId = 'henry' }) => {
  const { name, imageUrl } = item;

  const handleClick = async () => {
    try {
      const audioBlob = await getTTSAudio(name, voiceId);
      await playAudio(audioBlob);
    } catch (error) {
      console.error('TTS playback error:', error);
    }
  };

  return (
    <CardContainer>
      <CardButton onClick={handleClick} aria-label={`Speak ${name}`}>
        <CardImage src={imageUrl} alt={name} />
        <CardTitle>{name}</CardTitle>
      </CardButton>
    </CardContainer>
  );
};

export default Card;
