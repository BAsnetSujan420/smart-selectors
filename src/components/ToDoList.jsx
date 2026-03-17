import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  margin-inline: 1rem;
  margin-top: 1.5rem;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const H1 = styled.h1`
  text-align: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
  margin-right: 0.4rem;
`;

function ToDoList() {
  return (
    <Container>
      <Form>
        <H1>Modern CSS checklist</H1>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            Responsive components: container queries
          </Label>
        </Row>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            Maintainability: cascade layers + :where()
          </Label>
        </Row>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            Cleaner structure: native nesting
          </Label>
        </Row>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            Smarter selectors: :has()
          </Label>
        </Row>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            Fluid scales: clamp()
          </Label>
        </Row>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            Internationalization: logical properties
          </Label>
        </Row>

        <Row>
          <Label>
            <Checkbox type="checkbox" />
            UI polish: View Transitions
          </Label>
        </Row>
      </Form>
    </Container>
  );
}

export default ToDoList;
