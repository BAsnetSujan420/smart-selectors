import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParentElement = styled.div`
  border: 5px dashed grey;
  margin-bottom: 1rem;
  border-radius: 100vmax;
  padding: 4px;
  display: flex;
  gap: 1rem;
  width: fit-content;

  &:has(+ * .pink) {
    border-color: white;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  &.blue {
    background-color: royalblue;
  }

  &.ghost {
    border: 2px dashed white;
  }

  &.pink {
    background-color: hotpink;
  }

  &.green {
    background-color: teal;
  }
`;

function ParentSelector() {
  return (
    <Container>
      <ParentElement>
        <Circle className="blue"></Circle>
        <Circle className="ghost"></Circle>
        <Circle className="blue"></Circle>
      </ParentElement>
      <ParentElement>
        <Circle className="blue"></Circle>
        <Circle className="blue"></Circle>
        <Circle className="pink"></Circle>
        <Circle className="blue"></Circle>
        <Circle className="blue"></Circle>
      </ParentElement>
      <ParentElement>
        <Circle className="blue"></Circle>
        <Circle className="green"></Circle>
        <Circle className="green"></Circle>
        <Circle className="blue"></Circle>
      </ParentElement>
    </Container>
  );
}

export default ParentSelector;
