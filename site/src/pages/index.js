import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO"
import Bio from "../components/Bio";
import ReadingList from "../components/ReadingList/ReadingList";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-row-gap: 10px;
  padding: 15px;

  section {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const IndexPage = () => (
  <Layout>
  <SEO title="Home"/>
    <Grid>
      <Bio></Bio>
      <ReadingList></ReadingList>
    </Grid>
  </Layout>
);

export default IndexPage;
