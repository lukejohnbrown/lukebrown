import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"

const SPostBody = styled.article`
  h1 {
    font-size: ${({ theme }) => theme.fontSize[500]};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-weight: ${({ theme }) => theme.fontWeight[1]};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize[400]};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-weight: ${({ theme }) => theme.fontWeight[2]};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize[300]};
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-weight: ${({ theme }) => theme.fontWeight[2]};
  }

  p + h3,
  p + h2,
  img + h3,
  img + h2 {
    margin-top: ${({ theme }) => theme.space[4]};
  }

  p {
    margin-bottom: ${({ theme }) => theme.space[4]};

    code {
      font-family: ${({ theme }) => theme.codeFontFamily};
      background: #eee;
      margin: 0 2px;
      padding: 1px 3px;
      letter-spacing: 0px;
    }

    em {
      font-style: italic;
    }
  }

  a {
    color: ${({ theme }) => theme.palette.blue};
  }

  ul,
  ol {
    margin-bottom: ${({ theme }) => theme.space[4]};
    list-style: none;

    li {
      &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.space[2]};
      }

      code {
        font-family: ${({ theme }) => theme.codeFontFamily};
        background: #eee;
        margin: 0 2px;
        padding: 1px 3px;
        letter-spacing: 0px;
      }
    }

    ul,
    ol {
      padding-left: 20px;
      margin-top: ${({ theme }) => theme.space[1]};

      ul,
      ol {
        padding-left: 25px;
      }
    }
  }

  ul li {
    position: relative;
    padding-left: ${({ theme }) => theme.space[4]};

    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: 2px;
      background: ${({ theme }) => theme.palette.blue};
      width: 6px;
      height: 6px;
      font-weight: 600;
      border-radius: 50%;
    }
  }

  ol li {
    position: relative;
    counter-increment: step-counter;
    padding-left: ${({ theme }) => theme.space[4]};

    &::before {
      content: counter(step-counter);
      position: absolute;
      top: 0;
      left: 0;
      color: ${({ theme }) => theme.palette.blue};
      font-weight: 600;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  .gatsby-resp-image-wrapper,
  figure {
    margin: ${({ theme }) => theme.space[4]} auto;
    max-width: 100% !important;
  }

  .prism-code {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`

const PostBody = ({ content }) => (
  <SPostBody>
    <MDXProvider components={{ code: CodeBlock }}>
      <MDXRenderer>{content}</MDXRenderer>
    </MDXProvider>
  </SPostBody>
)

export default PostBody
