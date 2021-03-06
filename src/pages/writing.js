import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Layout, Seo, Container, Title, Footer } from "../components/shared"

const PostLink = styled(Link)`
  text-decoration: none;
  display: block;

  &:hover,
  &:focus {
    p {
      color: ${({ theme }) => theme.palette.text};
    }
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight[2]};
    font-size: ${({ theme }) => theme.fontSize[200]};
  }

  p {
    margin-top: ${({ theme }) => theme.space[1]};
    color: ${({ theme }) => theme.palette.darkGrey};
    transition: all 200ms;
  }
`

const PostsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[6]};
`

const WritingPage = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout>
    <Seo
      title="Latest Blog Posts"
      description="When I learn something new, I like to “make it stick” by writing about it here, on this blog."
    />
    <Container>
      <Title>Latest blog posts</Title>

      <PostsWrapper>
        {edges
          .sort(
            (a, b) =>
              new Date(b.node.frontmatter.date) -
              new Date(a.node.frontmatter.date)
          )
          .map(({ node: { id, fields, frontmatter } }) => (
            <PostLink to={fields.slug} key={id}>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.subtitle}</p>
            </PostLink>
          ))}
      </PostsWrapper>

      <Footer buttonText="Fancy a chat?" buttonLink="/contact" />
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query getAllPostsForArchive {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date
          }
        }
      }
    }
  }
`

export default WritingPage
