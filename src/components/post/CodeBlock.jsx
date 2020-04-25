/* eslint-disable react/no-array-index-key */
import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import "./syntax.css"

const CodeWrapper = styled.div`
  position: relative;
`

const Language = styled.p`
  margin: 0;
  position: absolute;
  color: white;
  z-index: 1;
  right: 6px;
  top: 3px;
  font-size: ${({ theme }) => theme.fontSize[-100]};
  font-family: "Source Code Pro", monospace !important;
  color: #9c9c9c;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight[2]};
`

const CodeBlock = ({ children, className, result }) => {
  const language = className ? className.replace(/language-/, "") : "html"

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeWrapper>
          <Language>{language}</Language>
          <pre
            className={result ? `${className} result` : className}
            style={{ ...style }}
          >
            {tokens.map((line, i) => {
              if (line.every(token => token.empty) && i + 1 === tokens.length) {
                return <span key={i} />
              }
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </CodeWrapper>
      )}
    </Highlight>
  )
}

export default CodeBlock
