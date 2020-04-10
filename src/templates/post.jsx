import React from 'react'

import {
  Layout,
  Container,
  Seo,
  Title,
  Footer,
  TwitterIcon
} from "../components/shared"

import {
  PostBody
} from "../components/post"

const PostTemplate = ({ location: { href }, data: { mdx: { frontmatter, body, subtitle, timeToRead } } }) => {

return (
  <Layout>
    <Container>
      <Seo description={frontmatter.subtitle} title={frontmatter.title} image={frontmatter.image} />
      <Title>{frontmatter.title}</Title>
      <PostBody content={body} />
      <Footer buttonIcon={<TwitterIcon />} isExternalLink buttonLink={`https://twitter.com/share?url=http://${href}`} buttonText="Share this post on Twitter" />
    </Container>
  </Layout>
)
}
export const pageQuery = graphql`
    query PostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                title,
                subtitle,
                categories,
                date,
                image
            }
            body
        }
    }
`;

export default PostTemplate
