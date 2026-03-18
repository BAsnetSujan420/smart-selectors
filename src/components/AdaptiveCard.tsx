import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem;

  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Text = styled.p`
  padding: 12px;
  margin: 0;
`;

function AdaptiveCard() {
  return (
    <>
      <Card>
        <Image src="https://picsum.photos/768?1" alt="Card example" />
      </Card>

      <Card>
        <Image src="https://picsum.photos/768?2" alt="Card example" />
        <Text>
          :has() allows us to create an adaptive layout for our cards based on
          their children
        </Text>
      </Card>
    </>
  );
}

export default AdaptiveCard;
