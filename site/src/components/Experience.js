import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

import Heading from "../styles/Heading";
import Section from "../styles/Section";

const JobWrapper = styled.div`
  /* padding: 0 50px; */
`;

const JobHeader = styled.div``;

const JobTitle = styled.h3`
  font-family: "Rubik";
  font-weight: 300;
  font-size: 36px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Info = styled.p`
  flex: 1 0 auto;

  &:first-of-type + & {
    flex: 0 1 auto;
  }
`;

const Item = styled.li``;

const ItemList = styled.ul`
  margin: 10px 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: #F15168;
      padding-left: 5px;
      font-size: 20px;
      line-height: 20px;
    }
  }
`;

export class Experience extends Component {
  render() {
    return (
      <Section>
        <Heading>Experience</Heading>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={false}
          emulateTouch={true}
          useKeyboardArrows={true}
        >
          <JobWrapper>
            <JobHeader>
              <JobTitle>
                Software Engineer Intern -{" "}
                <a
                  href="https://www.phreesia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phressia
                </a>
              </JobTitle>
              <InfoWrapper>
                <Info>01/2018 - 05/2018</Info>
                <Info>Ottawa, ON</Info>
              </InfoWrapper>
            </JobHeader>
            <ItemList>
              <Item>
                Worked in a team to design, develop, and maintain a checklist
                tracking tool for Phreesia Client Support staff
              </Item>
              <Item>
                Implemented user management features alongside enterprise
                authentication with Okta Single Sign On
              </Item>
              <Item>
                Extended core Phreesia web services to improve usability for
                multiple development teams
              </Item>
            </ItemList>
          </JobWrapper>
          <JobWrapper>
            <JobHeader>
              <JobTitle>
                Software Developer Intern -{" "}
                <a
                  href="https://www.newswire.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cision Canada (CNW)
                </a>
              </JobTitle>
              <InfoWrapper>
                <Info>05/2017 - 09/2017</Info>
                <Info>Ottawa, ON</Info>
              </InfoWrapper>
            </JobHeader>
            <ItemList>
              <Item>
                Designed, developed, and maintained an internal web application
                used by QA analysts and project managers across multiple teams
                to test CNW's new RESTful API
              </Item>
              <Item>
                Worked closely with a fellow CO-OP student to develop, deploy,
                and document a new API support library which is now currently in
                production
              </Item>
              <Item>
                Created automated build plans and application deployments with
                Bamboo and Ansible
              </Item>
            </ItemList>
          </JobWrapper>
        </Carousel>
      </Section>
    );
  }
}

export default Experience;
