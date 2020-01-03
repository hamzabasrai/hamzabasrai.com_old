import React, { Component } from "react";
import Section from "../styles/Section";
import styled from "styled-components";
import theme from "../styles/theme";
import resume from "../Resume.pdf";
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
          I’m a senior software engineering student interested in system design,
          product design, and making a meaningful impact with my work. I'm also
          a lead organizer for{" "}
          <a
            href="https://2020.uottahack.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            uOttaHack
          </a>
          , an annual hackathon at the University of Ottawa.
        </p>
        <br></br>
        <p>
          Interested in knowing more? Feel free to check out my{" "}
          <a
            href="https://linkedin.com/in/hamzabasrai"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://github.com/hamzabasrai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , or{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
        </p>
      </Section>
    );
  }
}

export default Bio;
