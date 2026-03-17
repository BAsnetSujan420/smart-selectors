import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  gap: 6px;
  margin-block: 24px;
`;
const List = styled.li``;
const Link = styled.a`
  &.current {
    text-decoration: none;
    pointer-events: none;
    cursor: default;
  }
`;

function BreadCrumb() {
  return (
    <Wrapper>
      <List>
        <Link href="#">Documentation</Link>
      </List>
      <List>
        <Link href="#">CSS Selectors</Link>
      </List>
      <List>
        <Link href="#" className="current">
          has()
        </Link>
      </List>
    </Wrapper>
  );
}

export default BreadCrumb;
