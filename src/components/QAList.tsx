import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .visibility-label {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  body:has(input.blur-answers:checked) .answer {
    filter: blur(3px);
  }

  body:has(input.blur-answers:checked) .visibility-label::before {
    content: "Hide ";
  }

  body:not(:has(input.blur-answers:checked)) .visibility-label::before {
    content: "Show ";
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  font-family: system-ui;
`;

const ToggleRow = styled.div`
  margin-bottom: 1rem;
`;

const QAItem = styled.div`
  margin-bottom: 1rem;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Question = styled.div`
  font-weight: bold;
`;

const Answer = styled.div.attrs({ className: 'answer' })`
  margin-top: 6px;
  transition: filter 0.2s ease;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-left: 6px;
`;

function QAList() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <ToggleRow>
          <label className="visibility-label">
            Answers
            <Checkbox className="blur-answers" />
          </label>
        </ToggleRow>

        <QAItem>
          <Question>What is :has() in CSS?</Question>
          <Answer>
            It allows you to style a parent based on its children or relatives.
          </Answer>
        </QAItem>

        <QAItem>
          <Question>What is container query?</Question>
          <Answer>
            It lets components adapt based on their container size instead of
            viewport.
          </Answer>
        </QAItem>

        <QAItem>
          <Question>What is clamp()?</Question>
          <Answer>
            A function to create fluid values with min and max limits.
          </Answer>
        </QAItem>

        <QAItem>
          <Question>What is :where()?</Question>
          <Answer>
            A zero-specificity selector helper for cleaner CSS architecture.
          </Answer>
        </QAItem>
      </Container>
    </>
  );
}

export default QAList;
