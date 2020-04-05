import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';

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

  p + h3, p + h2, img + h3, img + h2 {
    margin-top: ${({ theme }) => theme.space[4]};
  }


  ul, ol {
    padding-left: 15px;
    margin-bottom: ${({ theme }) => theme.space[2]};

    li {
      &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.space[1]};
      }
    }

    ul, ol {
      padding-left: 20px;
      margin-top: ${({ theme }) => theme.space[1]};

      ul, ol {
        padding-left: 25px;
      }
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  .gatsby-resp-image-wrapper {
    margin: ${({ theme }) => theme.space[4]} auto;
    max-width: 100% !important;
  }

  .prism-code {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

const PostBody = ({ content }) => (
  <SPostBody>
    <MDXProvider components={{ code: CodeBlock }}>
      <MDXRenderer>{content}</MDXRenderer>
    </MDXProvider>
  </SPostBody>
);

export default PostBody;
