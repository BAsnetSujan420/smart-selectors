import React from 'react';
import styled from 'styled-components';

const BarList = styled.ul`
  display: flex;
  gap: 6px;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.li`
  width: 40px;
  height: 80px;
  background: #ff9800;
  border-radius: 10px;
  list-style: none;
  opacity: 0.5;
  cursor: pointer;

  transform-origin: center;
  transition:
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.2s linear;

  &:hover {
    transform: scaleY(1.3);
    opacity: 1;
  }
`;

function BarsRow() {
  const bars = Array.from({ length: 15 });

  return (
    <BarList>
      {bars.map((_, i) => (
        <Bar key={i} />
      ))}
    </BarList>
  );
}

export default BarsRow;
