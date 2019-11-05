import React, { Component } from "react";
import Section from "../styles/Section";
import Heading from "../styles/Heading";
import styled from "styled-components";
import Card from "../styles/Card";
import theme from "../styles/theme";
const { colors, fontSizes, fonts } = theme;

const ProjectGrid = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 25px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
  }
`;

const Project = styled(Card)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;

  .heading {
    grid-area: 1 / 1 / 2 / 3;
    justify-self: self-start;
    align-self: center;
  }

  .description {
    grid-area: 2 / 1 / 4 / 4;
    padding: 0;
    font-size: ${fontSizes.bodySmall};
  }

  .date {
    justify-self: self-end;
    align-self: center;
    grid-area: 1 / 3 / 2 / 4;
    font-weight: 300;
  }

  .action {
    align-self: center;
    grid-area: 4 / 1 / 5 / 4;
    margin: 0 15px;
  }
`;

export class Projects extends Component {
  render() {
    return (
      <Section>
        <Heading>Things I've Built</Heading>
        <ProjectGrid>
          <Project className="">
            <h1 className="heading">hamzabasrai.com</h1>
            <p className="description">
              My personal website/workspace on the interwebs, where you're
              reading this right now
            </p>
            <p className="date">2019</p>
            <div className="action">
              <button type="button">View Code</button>
            </div>
          </Project>
          <Project>
            <h1 className="heading">TalentBoard</h1>
            <p className="description">
              A web application for companies to track new job applicants
              throughout their interview process.
            </p>
            <p className="date">2018</p>
            <div className="action">
              <button type="button">View Demo</button>
            </div>
          </Project>
          <Project>
            <h1 className="heading">Duty Helper</h1>
            <p className="description">
              An Android application to gameify household chores for families.
              Parents can assign chores to their kids and reward points on
              completion.
            </p>
            <p className="date">2017</p>
            <div className="action">
              <button type="button">View Code</button>
            </div>
          </Project>
        </ProjectGrid>
      </Section>
    );
  }
}

export default Projects;
