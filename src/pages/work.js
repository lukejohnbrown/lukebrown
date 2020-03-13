
import React from 'react'
import styled from "styled-components";

import { Layout, Seo, Container, Title } from "../components/shared";
import { PortfolioItem } from "../components/work";

import SweetSpotStudioImage from "../images/sweet-spot-studio.jpg";

const IntroText = styled.p``;


const WorkPage = () => {
  return (
    <Layout>
      <Seo title="Work" />
      <Container>
        <Title>Let’s take a look at some previous projects...</Title>
        <IntroText>I have had the pleasure of working with some great businesses, here is a collection of some of those collaborations.</IntroText>

        <PortfolioItem image={SweetSpotStudioImage} url="https://sweetspotstudio.co.uk" title="Sweet Spot Studio" subtitle="Cardiff based Recording Studio" features={["DESIGN", "WORDPRESS"]} description="Sweet Spot Studio is an up and coming recording studio based in Llandaff, Cardiff. Andie and Steffan needed a modern website that would showcase their services aimed at local talent. Working closely with the guys at Sweet Spot Studio was a real treat, and I am proud to say that their new website is helping to provide local musicians with affordable studio space." />
        <PortfolioItem image={SweetSpotStudioImage} url="https://sweetspotstudio.co.uk" title="Sweet Spot Studio" subtitle="Cardiff based Recording Studio" features={["DESIGN", "WORDPRESS"]} description="Sweet Spot Studio is an up and coming recording studio based in Llandaff, Cardiff. Andie and Steffan needed a modern website that would showcase their services aimed at local talent. Working closely with the guys at Sweet Spot Studio was a real treat, and I am proud to say that their new website is helping to provide local musicians with affordable studio space." />
        <PortfolioItem image={SweetSpotStudioImage} url="https://sweetspotstudio.co.uk" title="Sweet Spot Studio" subtitle="Cardiff based Recording Studio" features={["DESIGN", "WORDPRESS"]} description="Sweet Spot Studio is an up and coming recording studio based in Llandaff, Cardiff. Andie and Steffan needed a modern website that would showcase their services aimed at local talent. Working closely with the guys at Sweet Spot Studio was a real treat, and I am proud to say that their new website is helping to provide local musicians with affordable studio space." />
      </Container>
    </Layout>
  )
}

export default WorkPage;