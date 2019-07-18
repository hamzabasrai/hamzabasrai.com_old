import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

import Heading from "../styles/Heading";
import Section from "../styles/Section";

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

const ItemList = styled.ul`
  margin: 10px 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: 18px;
    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: #F15168;
      padding-left: 5px;
      font-size: 24px;
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
          <div>
            <div>
              <JobTitle>
                Software Engineer Intern -{" "}
                <a
                  href="https://www.phreesia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phreesia
                </a>
              </JobTitle>
              <InfoWrapper>
                <Info>01/2018 - 05/2018</Info>
                <Info>Ottawa, ON</Info>
              </InfoWrapper>
            </div>
            <ItemList>
              <li>
                Worked in a team to design, develop, and maintain a checklist
                tracking tool for Phreesia Client Support staff
              </li>
              <li>
                Implemented user management features alongside enterprise
                authentication with Okta Single Sign On
              </li>
              <li>
                Extended core Phreesia web services to improve usability for
                multiple development teams
              </li>
            </ItemList>
          </div>
          <div>
            <div>
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
            </div>
            <ItemList>
              <li>
                Designed, developed, and maintained an internal web application
                used by QA analysts and project managers across multiple teams
                to test CNW's new RESTful API
              </li>
              <li>
                Worked closely with a fellow CO-OP student to develop, deploy,
                and document a new API support library which is now currently in
                production
              </li>
              <li>
                Created automated build plans and application deployments with
                Bamboo and Ansible
              </li>
            </ItemList>
          </div>
        </Carousel>
      </Section>
    );
  }
}

export default Experience;
