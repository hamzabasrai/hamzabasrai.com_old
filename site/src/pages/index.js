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
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 25px;
`;

const IndexPage = () => (
  <Layout>
    <Grid>
      <SEO title="Home" />
      <Bio></Bio>
      <ReadingList></ReadingList>
    </Grid>
  </Layout>
);

export default IndexPage;
