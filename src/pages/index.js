import React from "react"
import styled from "styled-components"

import { Layout, Container, Seo, Title, Footer } from "../components/shared"
import { ServiceInfo } from "../components/home"
import devIcon from "../icons/developmentIcon.json"
import designIcon from "../icons/designIcon.json"

const Subtitle = styled.h2`
  margin-top: -${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSize[200]};
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  line-height: 1.8;
  max-width: 550px;
`

const IntroText = styled.p`
  line-height: 2;
`

const Services = styled.div`
  background: #f6f6f6;
  padding: ${({ theme }) => theme.space[6]} 0;
  margin-top: ${({ theme }) => theme.space[6]};

  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-top: ${({ theme }) => theme.space[7]};
    padding: ${({ theme }) => theme.space[7]} 0;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize[200]};
    font-weight: ${({ theme }) => theme.fontWeight[2]};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }
`

const ServiceWrapper = styled.div`
  margin: ${({ theme }) => theme.space[6]} 0;
`

const ServicesTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space[4]};
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  line-height: 1.8;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Freelance Web Designer and Developer" />
    <Container>
      <Title>Hi there, I&apos;m Luke.</Title>
      <Subtitle>
        Over the past 4 years I have been dedicated to serving clients and
        agencies of all shapes and sizes to provide online experiences that are
        a joy to use.
      </Subtitle>
    </Container>

    <Services>
      <Container>
        <ServicesTitle>
          I am a creative freelance web designer and developer serving clients
          and agencies in and around Wales.
        </ServicesTitle>
        <IntroText>
          I am passionate about making the internet a better place by building
          online experiences that are fast, performant, scalable and accessible
          to all. I take pride in collaborating closely with people like you to
          produce online experiences that are completely bespoke to suit your
          business needs.
        </IntroText>

        <ServiceWrapper>
          <ServiceInfo title="Bespoke Website Design" icon={devIcon}>
            I specialise in building modern, high performance, scalable websites
            and web applications. In order to maximise your potential to succeed
            online, I offer a wide range of development options to suit your
            business needs. Including a variety of content management systems
            such as Wordrpess, CraftCMS and Sanity.
          </ServiceInfo>
        </ServiceWrapper>
        <ServiceInfo title="Website Development" icon={designIcon}>
          Designing for the web is not only about ensuring your website looks
          good (although that is very important), it requires a detailed
          consideration for every user that visits your site. We take a
          collaborative approach to design, and always prioritise your users by
          focusing on user experience and accessibility from day one.
        </ServiceInfo>
      </Container>
    </Services>

    <Container>
      <Footer buttonText="Want to see some of my work?" buttonLink="/work" />
    </Container>
  </Layout>
)

export default IndexPage
