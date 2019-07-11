import React, { Component } from "react";
import Container from "../styles/Container";
import Heading from "../styles/Heading";
import Body from "../styles/Body";

export class ReadingList extends Component {
  render() {
    return (
      <Container>
        <Heading>Reading List</Heading>
        <Body>
          Here’s a look at what I’m reading and what I plan to read next. I’m
          always looking for recommendations so feel free to drop one below
        </Body>
      </Container>
    );
  }
}

export default ReadingList;
