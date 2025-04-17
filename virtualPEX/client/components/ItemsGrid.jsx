import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ItemsGrid = ({ items = [], onItemClick = () => {} }) => (
  <GridContainer>
    {items.map(item => (
      <Card
        key={item.id}
        imageUrl={item.imageUrl}
        altText={item.altText}
        onClick={() => onItemClick(item)}
      />
    ))}
  </GridContainer>
);

export default ItemsGrid;
