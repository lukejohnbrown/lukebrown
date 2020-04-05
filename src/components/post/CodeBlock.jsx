/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './syntax.css';

const CodeBlock = ({ children, className, result }) => {
  const language = className ? className.replace(/language-/, '') : 'html';

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={undefined}>
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={result ? `${className} result` : className} style={{ ...style }}>
          {tokens.map((line, i) => {
            if (line.every(token => token.empty) && (i + 1 === tokens.length)) {
              return (
                <span key={i} />
              );
            }
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )
      }
    </Highlight>
  );
};

export default CodeBlock;
