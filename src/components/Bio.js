import React, { Component } from "react";
import Heading from "../styles/Heading";
import Body from "../styles/Body";
import Container from "../styles/Container";


export class Bio extends Component {
  render() {
    return (
      <Container>
        <Heading>Hi, I'm Hamza</Heading>
        <Body>
          I am an enthusiastic software engineering student that loves to solve
          interesting problems. I'm a big fan of product design and creating
          software that impacts the lives of others. Outside of school, I lead
          the organizing team of an MLH Hackathon called <a href="https://2019.uottahack.ca" target="_blank">uOttaHack</a> at the
          University of Ottawa. I'm an avid reader and like to discover new
          music.
        </Body>
      </Container>
    );
  }
}

export default Bio;
