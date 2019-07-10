import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Bio from "../components/Bio";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 15px;

  div {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const IndexPage = () => (
  <Layout>
    <Grid>
      <Bio></Bio>
    </Grid>
  </Layout>
);

export default IndexPage;
