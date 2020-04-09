
import React from 'react'
import styled from "styled-components";

import { Layout, Seo, Container, Title, Footer } from "../components/shared";
import { PortfolioItem } from "../components/work";

const PortfolioItems = styled.section`
  margin-top: ${({ theme }) => theme.space[5]};
  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-top: ${({ theme }) => theme.space[6]};
  }

  #portfolio-item {
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.space[6]};
      @media ${({ theme }) => theme.breakpoints.up.md} {
        margin-bottom: ${({ theme }) => theme.space[7]};
      }
    }
  }
`;

const WorkPage = () => {
  return (
    <Layout>
      <Seo title="See my Work" description="I have had the pleasure of working with some great businesses, here is a collection of some of those collaborations." />
      <Container>
        <Title>Let’s take a look at some previous projects...</Title>
        <p>I have had the pleasure of working with some great businesses, here is a collection of some of those collaborations.</p>

        <PortfolioItems>
          <PortfolioItem image="https://res.cloudinary.com/dm0jn7d2r/image/upload/v1586416888/sweet-spot-studio.jpg" url="https://sweetspotstudio.co.uk" title="Sweet Spot Studio" subtitle="Cardiff based Recording Studio" features={["DESIGN", "WORDPRESS"]} description="Sweet Spot Studio is an up and coming recording studio based in Llandaff, Cardiff. Andie and Steffan needed a modern website that would showcase their services aimed at local talent. Working closely with the guys at Sweet Spot Studio was a real treat, and I am proud to say that their new website is helping to provide local musicians with affordable studio space." />
          <PortfolioItem image="https://res.cloudinary.com/dm0jn7d2r/image/upload/v1586416888/pukka-productions.jpg" url="https://pukkaproductions.co.uk" title="Pukka Productions" subtitle="Theatre School and Drama Group" features={["DESIGN", "WORDPRESS"]} description="Having grown up in the area, it was a joy to work with this Barry based theatre school and drama group. When Pukka Productions founders Duncan and Sarah approach me in 2019 their existing website was in desperate neeed of a refresh. We were able to work together to produce a modern Wordpress website that really does their fantastic shows justice." />
          <PortfolioItem image="https://res.cloudinary.com/dm0jn7d2r/image/upload/v1586416888/clare-treverrow.jpg" url="https://claretrevs.com/" title="Clare Treverrow" subtitle="Local Freelance Designer" features={["DESIGN", "SPA"]} description="Working with Clare on her portfolio website presented a unique opportunity for a truely creative collaboration. When Clare approached me to develop her new website with designs in hand, she already knew exactly what she had in mind. We were able to make her vision a reality by using a modern technology stack to produce an interactive, single page application." />
          <PortfolioItem image="https://res.cloudinary.com/dm0jn7d2r/image/upload/v1586416888/g-davies-electrical.jpg"title="G Davies Electrical" subtitle="Cardiff based Recording Studio" features={["DESIGN", "SPA"]} description="Gethin was in need of a new website to showcase his services as a local electrican. Gethin recieves many enquiries for his work, so it was important that we designed a website that he could share with all potential customers to accurately advertise his skillset. It is always a pleasure to work closely with a local business, the project is very close to completion and I look forward to releasing it." />
        </PortfolioItems>

        <Footer buttonText="Want to add to this list?" buttonLink="/contact" />
      </Container>
    </Layout>
  )
}

export default WorkPage;