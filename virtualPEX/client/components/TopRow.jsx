import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const RowContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(100px, auto);
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar { height: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 3px; }
`;

const coreItems = [
  { id: 'i',     imageUrl: '/assets/images/i.png',    altText: 'I',    audio: '/assets/audio/i.mp3'    },
  { id: 'you',   imageUrl: '/assets/images/you.png',  altText: 'You',  audio: '/assets/audio/you.mp3'  },
  { id: 'see',   imageUrl: '/assets/images/see.png',  altText: 'See',  audio: '/assets/audio/see.mp3'  },
  { id: 'smell', imageUrl: '/assets/images/smell.png',altText: 'Smell',audio: '/assets/audio/smell.mp3'},
  { id: 'good',  imageUrl: '/assets/images/good.png', altText: 'Good', audio: '/assets/audio/good.mp3' },
  { id: 'yes',   imageUrl: '/assets/images/yes.png',  altText: 'Yes',  audio: '/assets/audio/yes.mp3'  },
  { id: 'no',    imageUrl: '/assets/images/no.png',   altText: 'No',   audio: '/assets/audio/no.mp3'   },
];

const TopRow = ({ onItemClick = () => {} }) => (
  <RowContainer>
    {coreItems.map(item => (
      <Card
        key={item.id}
        imageUrl={item.imageUrl}
        altText={item.altText}
        onClick={() => onItemClick(item)}
      />
    ))}
  </RowContainer>
);

export default TopRow;
