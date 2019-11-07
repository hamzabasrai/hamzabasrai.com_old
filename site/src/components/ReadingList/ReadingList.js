import React, { Component } from "react";
import axios from "axios";
import Heading from "../../styles/Heading";
import Section from "../../styles/Section";
import Book from "./Book";
import Suggestion from "./Suggestion";
import styled from "styled-components";

const BookList = styled.div`
  padding: 15px 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 25px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
  }
`;

const books = [
  {
    title: "Losing the Signal",
    author: "Jacqui McNish",
    status: "Currently Reading",
    url: "https://www.goodreads.com/book/show/25602451-losing-the-signal"
  },
  {
    title: "The Devotion of Suspect X",
    author: "Keigo Higashino",
    status: "03/10/2019",
    url: "https://www.goodreads.com/book/show/8686068-the-devotion-of-suspect-x"
  },
  {
    title: "Prisoner's Dilemma",
    author: "William Poundstone",
    status: "01/10/2019",
    url: "https://www.goodreads.com/book/show/29506.Prisoner_s_Dilemma"
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    status: "26/07/2019",
    url: "https://www.goodreads.com/book/show/35959740-circe"
  }
];

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
          {books.map(value => {
            return <Book book={value}></Book>
          })}
        </BookList>
        <Suggestion></Suggestion>
      </Section>
    );
  }
}

export default ReadingList;
