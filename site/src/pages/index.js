import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";

const Grid = styled.div`
  max-width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

const IndexPage = () => (
  <Layout>
    <Grid>
      <SEO title="Home" />
      <Bio></Bio>
    </Grid>
  </Layout>
);

export default IndexPage;
