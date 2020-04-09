import React from "react"
import styled from "styled-components";

import {
  Layout,
  Container,
  Seo,
  Title,
  DesignIcon,
  DevelopIcon,
  Footer
} from "../components/shared"
import {
  HandIcon,
  ServiceInfo
} from "../components/home";

const Subtitle = styled.h2`
  margin-top: -${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSize[200]};
  font-weight: ${({ theme }) => theme.fontWeight[1]};
`;

const IntroText = styled.p`
  margin-top: ${({ theme }) => theme.space[2]};
`;

const Services = styled.div`
  margin-top: ${({ theme }) => theme.space[6]};
  h4 {
    font-size: ${({ theme }) => theme.fontSize[200]};
    font-weight: ${({ theme }) => theme.fontWeight[2]};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }
`;

const ServiceWrapper = styled.div `
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Freelance Web Designer and Developer" />
    <Container>
      <Title>
        Hi there, I'm Luke
        <HandIcon />
      </Title>
      <Subtitle>
        I am a website designer and developer from sunny Cardiff, Wales.
      </Subtitle>
      <IntroText>
        These days, browsing the internet can feel like a bit of a chore. It seems as though every website you visit immediately hounds you with cookie notices and newsletter sign ups, resulting in a horrible user experience.
        <br/><br/>
        <strong>However, it doesn't have to be this way!</strong> I specialise in building online experiences that are a joy for your customers to use without compromising on style.
        <br/><br/>
        I am sorry for the <strike>slightly</strike> very cheesy sales pitch, but there is no simpler way of putting it.
      </IntroText>

      <Services>
        <h4>What do I do?</h4>

        <ServiceWrapper>
          <ServiceInfo title="Bespoke Website Design" icon={<DesignIcon />}>
            I love to work with business owners and individuals to create bespoke designs that suit their brand perfectly. I believe that there is more to a professional looking website than it simply “looking pretty”. Designing for the web requires consideration for every user that visits your site, which is why we always approach design by prioritising user experience and accessibility.
          </ServiceInfo>
        </ServiceWrapper>

        <ServiceInfo title="Website Development" icon={<DevelopIcon />}>
          I take a huge amount of pride in building high quality online experiences that yout customers enjoy using and you enjoy managing.There is a lot of potential to succeed online, but if you start off on the wrong foot it can quickly become an uphill battle.This is exactly why I work closely with businesses and individuals to ensure that we take the right techincal approach from day one.
        </ServiceInfo>

        <Footer buttonText="Want to see some of my work?" buttonLink="/work" />
      </Services>
    </Container>
  </Layout>
)

export default IndexPage
