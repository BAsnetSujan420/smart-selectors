import React from 'react';

function SimplifySector() {
  return (
    <>
      <style>
        {`
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          h2 {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            color: #777;
          }

          p {
            font-size: 1rem;
            color: #ccc;
          }

          :is(h1, h2, p) span {
            color: #ff9800;
            font-weight: 600;
          }

          :is(h1, h2, p) span:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}
      </style>
      <div>
        <h1>
          Simplify Your <span>CSS Selectors</span>
        </h1>
        <h2>
          Enhance <span>Readability</span> of Your Code
        </h2>
        <p>
          The <span>':is()' pseudo class selector</span> streamlines lengthy
          lists of selectors, making our code neat and easy to understood
        </p>
      </div>
    </>
  );
}

export default SimplifySector;
