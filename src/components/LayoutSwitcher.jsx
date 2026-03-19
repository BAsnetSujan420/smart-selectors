import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Section = styled.section`
  padding: 16px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const Switcher = styled.div`
  display: flex;
  margin: 1rem;
`;

const HiddenInput = styled.input`
  width: 0;
  opacity: 0;
  position: absolute;
`;

const SwitchLabel = styled.label`
  background: #fff;
  padding: 0.4rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
  }

  ${HiddenInput}:checked + & {
    background: #333;
    color: #fff;
  }
`;

const CardList = styled.ul.attrs({ className: 'card-list' })`
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;

  grid-template-columns: 1fr;
`;

const Card = styled.li`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  background: #fff;

  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    color: black;
  }
`;

function LayoutSwitcher() {
  return (
    <Container>
      <Switcher>
        <HiddenInput
          type="radio"
          name="switcher"
          id="list"
          value="list"
          defaultChecked
        />
        <SwitchLabel htmlFor="list">
          <svg width="24" height="24" stroke="currentColor" fill="none">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
          </svg>
        </SwitchLabel>

        <HiddenInput type="radio" name="switcher" id="grid" value="grid" />
        <SwitchLabel htmlFor="grid">
          <svg width="24" height="24" stroke="currentColor" fill="none">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </SwitchLabel>
      </Switcher>

      <Section>
        <Title>From our blog</Title>

        <CardList>
          <Card>
            <a href="#">
              <h2>How to center an element in CSS</h2>
            </a>
          </Card>

          <Card>
            <a href="#">
              <h2>Modern CSS properties your site must have</h2>
            </a>
          </Card>

          <Card>
            <a href="#">
              <h2>Animated gradient borders in CSS</h2>
            </a>
          </Card>
        </CardList>
      </Section>
    </Container>
  );
}

export default LayoutSwitcher;
