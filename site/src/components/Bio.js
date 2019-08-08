import React, { Component } from "react";
import Heading from "../styles/Heading";
import Section from "../styles/Section";


export class Bio extends Component {
  render() {
    return (
      <Section>
        <Heading>Hi, I'm Hamza</Heading>
        <p>
          I am an enthusiastic software engineering student that loves to solve
          interesting problems. I'm a big fan of product design and creating
          software that impacts the lives of others. Outside of school, I co-lead
          the organizing team of an MLH Hackathon called <a href="https://2019.uottahack.ca" target="_blank" rel="noopener noreferrer">uOttaHack</a> at the
          University of Ottawa. I'm an avid <a href="#readingList">reader</a> and like to discover new
          music.
        </p>
      </Section>
    );
  }
}

export default Bio;
