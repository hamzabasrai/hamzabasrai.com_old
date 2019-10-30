import React, { Component } from "react";
import axios from "axios";
import Heading from "../../styles/Heading";
import Section from "../../styles/Section";
import Book from "./Book";
import Suggestion from "./Suggestion";
import styled from "styled-components";
import Card from "../../styles/Card";

const BookList = styled.div`
  padding: 5% 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }
`;

export class ReadingList extends Component {
  state = {
    Books: {
      CurrentBook: {},
      Read: []
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get("https://us-central1-hamzabasrai-site.cloudfunctions.net/getBooks")
      .then(val => {
        this.setState({ Books: val.data });
      });
  }

  render() {
    return (
      <Section>
        <Heading>What I'm Reading</Heading>
        <p>
          Here’s a look at what I’m reading right now and what I've read in the
          past. I’m always looking for recommendations so feel free to drop one
          below
        </p>
        <BookList>
          <Card>
            <h3>Losing the Signal</h3>
            <h4>by Jacquie McNish</h4>
          </Card>
          <Card>
            <h3>The Devotion of Suspect X</h3>
            <h4>by Keigo Higashino</h4>
          </Card>
          <Card>
            <h3>Prisoner's Dilemma</h3>
            <h4>by William Poundstone</h4>
          </Card>
          <Card>
            <h3>Circe</h3>
            <h4>by Madeline Miller</h4>
          </Card>
        </BookList>
        <Suggestion></Suggestion>
      </Section>
    );
  }
}

export default ReadingList;
