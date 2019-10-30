import React, { Component } from "react";
import styled from "styled-components";
import Section from "../styles/Section";
import theme from "../styles/theme";
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h2`
  font-size: ${fontSizes.headerSmall};

  @media screen and (min-width: 768px) {
    font-size: ${fontSizes.headerMedium};
  }
`;

export class Projects extends Component {
  render() {
    return (
      <Section>
        <Heading>Things I've Built</Heading>
      </Section>
    );
  }
}

export default Projects;
