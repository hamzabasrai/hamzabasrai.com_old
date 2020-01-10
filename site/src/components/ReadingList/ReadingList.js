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
    title: "Why We Sleep",
    author: "Matthew Walker",
    status: "Currently Reading",
    url: "https://www.goodreads.com/book/show/34466963-why-we-sleep"
  },
  {
    title: "Recursion",
    author: "Blake Crouch",
    status: "07/01/2020",
    url: "https://www.goodreads.com/book/show/42046112-recursion"
  },
  {
    title: "Talking to Strangers",
    author: "Malcolm Gladwell",
    status: "31/12/2019",
    url: "https://www.goodreads.com/book/show/43848929-talking-to-strangers"
  },
  {
    title: "Starsight",
    author: "Brandon Sanderson",
    status: "21/12/2019",
    url: "https://www.goodreads.com/book/show/42769202-starsight"
  },
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
            return <Book book={value} key={value.url}></Book>;
          })}
        </BookList>
        <Suggestion></Suggestion>
      </Section>
    );
  }
}

export default ReadingList;
