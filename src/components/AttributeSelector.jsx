import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  span {
    display: block;
    color: steelblue;
    font-size: 3rem;
    line-height: 5rem;
  }
  a {
    margin-right: 1rem;
    color: skyblue;
  }

  a[class^='link'] {
    color: orangered;
    text-decoration-style: dotted;
    text-decoration-color: white;
  }
`;

const Button = styled.button`
  --bg: #2563eb;
  --bg-hover: #1d4ed8;
  --text: #ffffff;

  display: inline-flex;
  align-items: center;
  margin-right: 12px;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;

  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;

  cursor: pointer;
  background: var(--bg);
  color: var(--text);

  transition: all 0.2s ease;

  &:hover {
    background: var(--bg-hover);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &[class$='outline'] {
    background: transparent;
    color: var(--bg);
    border: 2px solid var(--bg);

    &:hover {
      background: var(--bg);
      color: white;
    }
  }

  &[class$='accent'] {
    background: transparent;
    color: var(--bg);

    &:hover {
      background: rgba(37, 99, 235, 0.1);
    }
  }
`;

function AttributeSelector() {
  return (
    <>
      <Section>
        <h2>
          <span>[ ]</span>Attribute
        </h2>
        <a class="link" href="https://www.google.com">
          Google
        </a>
        <a class="linkNew link" href="https://www.google.ca">
          Google Canada
        </a>
        <a class="linkTwo" href="about.html">
          About page
        </a>
        <a class="link-three" target="_blank" href="https://www.google.com">
          Socialize
        </a>
        <a href="ebook.pdf">PDF file</a>

        <a class="another-link" href="#">
          Yet another link
        </a>
      </Section>
      <Section>
        <Button className="button-primary">Subscribe</Button>
        <Button className="button-outline">Learn </Button>
        <Button className="button-accent">Show</Button>
      </Section>
    </>
  );
}

export const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v7h-7" />
    <path d="M3 10v11h11" />
  </svg>
);

export const PdfIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2h9l5 5v15H6z" />
    <path d="M14 2v6h6" />
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="6"
      fill="currentColor"
      stroke="none"
      fontWeight="bold"
    >
      PDF
    </text>
  </svg>
);

export default AttributeSelector;
