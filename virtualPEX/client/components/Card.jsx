// client/components/Card.jsx
import React from 'react';
import styled from 'styled-components';

// Styled button to wrap the image (making it interactive)
const CardButton = styled.button`
  background: transparent;
  border: none;
  margin: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

// Styled image that fits within the card
const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// Card component accepts an image URL, alt text, and an onClick handler
const Card = ({ imageUrl, altText, onClick }) => {
  return (
    <CardButton onClick={onClick} aria-label={altText}>
      <CardImage src={imageUrl} alt={altText} />
    </CardButton>
  );
};

export default Card;
