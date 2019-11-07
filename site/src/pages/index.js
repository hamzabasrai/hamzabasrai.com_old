import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import ReadingList from "../components/ReadingList/ReadingList";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const IndexPage = () => (
  <Layout>
    <Grid>
      <SEO title="Home" />
      <Bio></Bio>
      <Projects></Projects>
      <ReadingList></ReadingList>
    </Grid>
  </Layout>
);

export default IndexPage;
