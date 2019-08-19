import React, { Component } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Heading from "../styles/Heading";
import Section from "../styles/Section";
import media from "../styles/media";
import Card from "../styles/Card";
import peopleinsight from "../images/peopleinsight.png";
import phreesia from "../images/phreesia.png";
import cision from "../images/cision.png";
import cision2 from "../images/cision2.png";

const { fontSizes } = theme;

const Title = styled.h3`
  font-family: "Rubik";
  font-weight: 300;
  color: #000000;`;

const JobTitle = styled(Title)`
  font-size: ${fontSizes.medium};
  grid-area: 1 / 2 / 2 / 3;
  align-self: end;
`;

const Company = styled(Title)`
  font-size: ${fontSizes.mediumish};
  grid-area: 2 / 2 / 2 / 3;
  align-self: start;
`;

const JobInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
`;

const Logo = styled.img`
  grid-area: 1 / 1 / 3 / 2;
  padding: 5px;
  max-width: 75%;
  justify-self: center;
  align-self: center;
`;

export class Experience extends Component {
  render() {
    return (
      <Section>
        <Heading>Experience</Heading>
        <Card>
          <JobInfo>
            <Logo src={peopleinsight}></Logo>
            <JobTitle>Data Analyst</JobTitle>
            <Company>PeopleInsight</Company>
          </JobInfo>
        </Card>
        <Card>
          <JobInfo>
            <Logo src={phreesia}></Logo>
            <JobTitle>Software Engineer</JobTitle>
            <Company>Phreesia</Company>
          </JobInfo>
        </Card>
        <Card>
          <JobInfo>
            <Logo src={cision2}></Logo>
            <JobTitle>Software Developer</JobTitle>
            <Company>Cision Canada</Company>
          </JobInfo>
        </Card>
      </Section>
    );
  }
}

export default Experience;
