import React from "react"
import styled from "styled-components";

import {
  Layout,
  Container,
  Seo,
  Title,
  Button,
  Footer,
} from "../components/shared"

const Cat = styled.img`
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize[200]};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const Disclaimer = styled.p`
  font-size: ${({ theme }) => theme.fontSize[-100]};
  margin-top: ${({ theme }) => theme.space[1]};
`;

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page not found" />
    <Container>
      <Title>Oh dear, that page can't be found!</Title>
      <Subtitle>Sorry about that, here is a random cat gif to make it up to you...</Subtitle>
      <Cat src={`https://cataas.com/cat/gif?size=50&cache=${Date.now()}`} />
      <Disclaimer>☝️ This gif truly is randomly generated, sorry if it is somehow inappropriate!</Disclaimer>
      <Footer buttonText="Take me home" buttonLink="/" />
    </Container>
  </Layout>
)

export default NotFoundPage
