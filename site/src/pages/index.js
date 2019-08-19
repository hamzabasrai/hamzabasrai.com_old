import React from "react";
import styled from "styled-components";
import media from "../styles/media";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";
import ReadingList from "../components/ReadingList/ReadingList";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Grid = styled.div`
  /* width: 1440px; */
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 25px;
  
  /* ${media.desktop`width:1140px`}
  ${media.laptop`width:960px`}
  ${media.tablet`width:668px`}
  ${media.largePhone`width:375px`}
  ${media.mediumPhone`width:325px`}
  ${media.smallPhone`width:280px`} */
`;

const IndexPage = () => (
  <Layout>
    <Grid>
      <SEO title="Home" />
      <Bio></Bio>
      <Experience></Experience>
      <ReadingList></ReadingList>
    </Grid>
  </Layout>
);

export default IndexPage;
