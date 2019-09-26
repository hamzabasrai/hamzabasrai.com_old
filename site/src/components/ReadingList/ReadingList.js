import React, { Component } from "react";
import axios from "axios";
import Heading from "../../styles/Heading";
import Section from "../../styles/Section";
import Book from "./Book";
import Suggestion from "./Suggestion";
import styled from "styled-components";

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  margin: 20px 0;
  border: 1px solid red;
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
      <Section name="readingList">
        <Heading>Reading List</Heading>
        <p>
          Here’s a look at what I’m reading right now and what I've read in the
          past. I’m always looking for recommendations so feel free to drop one
          below
        </p>

        <BookGrid>
          <Book book={this.state.Books.CurrentBook}></Book>
        </BookGrid>

        <BookGrid>
          {this.state.Books.Read.map(book => (
            <Book key={book.title} book={book}></Book>
          ))}
        </BookGrid>
        <Suggestion></Suggestion>
      </Section>
    );
  }
}

export default ReadingList;
