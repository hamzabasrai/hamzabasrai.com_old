import React, { Component } from "react";
import Section from "../styles/Section";
import styled from "styled-components";
import theme from "../styles/theme";
const { fontSizes } = theme;

const Title = styled.h1`
  font-size: ${fontSizes.headerMedium};

  @media screen and (min-width: 768px) {
    font-size: ${fontSizes.headerLarge};
  }
`;

export class Bio extends Component {
  render() {
    return (
      <Section>
        <Title>
          Hi, <br />
          I'm Hamza
        </Title>
        <p>
          I’m a senior software engineering student interested in system
          design, product design, and making a meaningful impact with my work.
        </p>
      </Section>
    );
  }
}

export default Bio;
