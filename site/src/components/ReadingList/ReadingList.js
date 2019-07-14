import React, { Component } from "react";

import Heading from "../../styles/Heading";
import Body from "../../styles/Body";
import Section from "../../styles/Section";
import Books from "./Books";
import Suggestion from "./Suggestion";



export class ReadingList extends Component {

  render() {
    return (
      <Section>
        <Heading>Reading List</Heading>
        <Body>
          Here’s a look at what I’m reading and what I've read in the past. I’m
          always looking for recommendations so feel free to drop one below
        </Body>
        <Books></Books>
        <Suggestion></Suggestion>
      </Section>
    );
  }
}

export default ReadingList;
