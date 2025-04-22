import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; // Ensures it stays behind all content
  pointer-events: none; // Makes it non-interactive
  overflow: hidden;
`;

const Letter = styled.div`
  position: absolute;
  font-size: ${props => props.size}px;
  font-weight: bold;
  color: ${props => props.color};
  opacity: 0.2; // Semi-transparent
  font-family: 'Comic Sans MS', cursive, sans-serif; // Child-friendly font
  /* Apply the appropriate animation based on the letter's index */
  animation: ${props => props.spin ? 'spin' : 'reverse-spin'} ${props => props.duration}s linear infinite;
  z-index: -1;
`;

// Array of bright, child-friendly colors
const colors = [
  '#FF5252', // Red
  '#FF9800', // Orange
  '#FFEB3B', // Yellow
  '#4CAF50', // Green
  '#2196F3', // Blue
  '#673AB7', // Purple
  '#E91E63', // Pink
  '#00BCD4', // Cyan
];

const AlphabetBackground = () => {
  const [letters, setLetters] = useState([]);
  
  useEffect(() => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newLetters = [];
    
    // Create 50 random letters (can adjust this number)
    for (let i = 0; i < 50; i++) {
      const letterIndex = Math.floor(Math.random() * alphabet.length);
      newLetters.push({
        id: i,
        letter: alphabet[letterIndex],
        x: `${Math.random() * 95}%`, // Random x position
        y: `${Math.random() * 95}%`, // Random y position
        size: Math.floor(Math.random() * 60) + 40, // Random size between 40px and 100px
        color: colors[Math.floor(Math.random() * colors.length)], // Random color
        spin: Math.random() > 0.5, // Random direction: clockwise or counter-clockwise
        duration: Math.floor(Math.random() * 20) + 10, // Random duration between 10-30s
      });
    }
    
    setLetters(newLetters);
  }, []);
  
  return (
    <BackgroundContainer>
      {letters.map(item => (
        <Letter
          key={item.id}
          style={{
            left: item.x,
            top: item.y,
          }}
          size={item.size}
          color={item.color}
          spin={item.spin}
          duration={item.duration}
        >
          {item.letter}
        </Letter>
      ))}
    </BackgroundContainer>
  );
};

export default AlphabetBackground;