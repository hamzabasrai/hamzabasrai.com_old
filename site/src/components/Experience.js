import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import theme from "../styles/theme";
import Heading from "../styles/Heading";
import Section from "../styles/Section";
import media from "../styles/media";

const { fontSizes } = theme;

const JobTitle = styled.h3`
  font-family: "Rubik";
  font-weight: 300;
  padding: 10px 0 15px 0;
  font-size: ${fontSizes.large};
  ${media.laptop`
    font-size: ${fontSizes.largish};
    padding: 5px 0;  
  `}
  ${media.tablet`
    font-size: ${fontSizes.medium};
    padding: 0;
  `}

  a {
    &:after {
      bottom: -0.14em;
    }
  }
`;

const Info = styled.p`
  margin: 10px 0;
`;

const ItemList = styled.ul`
  margin: 10px 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;
    margin: 20px 0;

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: #f15168;
      padding-left: 5px;
      font-size: ${fontSizes.medium};
      line-height: ${fontSizes.medium};
      ${media.laptop`font-size: ${fontSizes.small};`}
      ${media.tablet`font-size: ${fontSizes.smallish};`}
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
                Data Analyst -{" "}
                <a
                  href="https://www.peopleinsight.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PeopleInsight
                </a>
              </JobTitle>
              <Info>05/2019 - 08/2019 | Ottawa, ON</Info>
            </div>
            <ItemList>
              <li>
                Created and automated SQL data validation scripts helping to
                streamline the extract-transform-load (ETL) process
              </li>
              <li>
                Developed reusable Dynamic SQL to reduce redundant code across
                multiple data validation test suites
              </li>
              <li>
                Investigated and reported data anomalies such as invalid client
                data or incorrect data transformations to ensure data veracity
              </li>
            </ItemList>
          </div>
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
              <Info>01/2018 - 05/2018 | Ottawa, ON</Info>
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
              <Info>05/2017 - 09/2017 | Ottawa, ON</Info>
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
