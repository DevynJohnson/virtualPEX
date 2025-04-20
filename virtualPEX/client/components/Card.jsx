// client/components/Card.jsx
import React from 'react';
import styled from 'styled-components';
import { getTTSAudio, playAudio } from '../textToSpeech';

const CardContainer = styled.div`
  width: 200px;
  margin: 1rem;
  text-align: center;
`;

const CardButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
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
