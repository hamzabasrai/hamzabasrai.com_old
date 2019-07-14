import React, { Component } from "react";

import Heading from "../../styles/Heading";
import Section from "../../styles/Section";
import Books from "./Books";
import Suggestion from "./Suggestion";



export class ReadingList extends Component {

  render() {
    return (
      <Section name="readingList">
        <Heading>Reading List</Heading>
        <p>
          Here’s a look at what I’m reading right now and what I've read in the past. I’m
          always looking for recommendations so feel free to drop one below
        </p>
        <Books></Books>
        <Suggestion></Suggestion>
      </Section>
    );
  }
}

export default ReadingList;
