import React from "react"
import styled from "styled-components"

import {
  Layout,
  Container,
  Seo,
  Footer,
  TwitterIcon,
} from "../components/shared"

import { PostBody } from "../components/post"

const PostTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[600]};
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  margin: ${({ theme }) => theme.space[6]} 0 ${({ theme }) => theme.space[5]} 0;
  line-height: 1.3;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.up.md} {
    line-height: 1.2;
    font-size: ${({ theme }) => theme.fontSize[500]};
    margin: ${({ theme }) => theme.space[7]} 0 ${({ theme }) => theme.space[4]}
      0;
  }
`

const PostTemplate = ({
  location: { href },
  data: {
    mdx: { frontmatter, body },
  },
}) => (
  <Layout>
    <Container>
      <Seo
        description={frontmatter.subtitle}
        title={frontmatter.title}
        image={frontmatter.image}
      />
      <PostTitle>{frontmatter.title}</PostTitle>
      <PostBody content={body} />
      <Footer
        buttonIcon={<TwitterIcon />}
        isExternalLink
        buttonLink={`https://twitter.com/share?url=http://${href}`}
        buttonText="Share this post on Twitter"
      />
    </Container>
  </Layout>
)
export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        subtitle
        categories
        date
        image
      }
      body
    }
  }
`

export default PostTemplate
