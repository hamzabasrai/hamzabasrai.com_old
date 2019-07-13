import React, { Component } from "react";
import Heading from "../styles/Heading";
import Body from "../styles/Body";
import styled from "styled-components";
import axios from "axios";
import Section from "../styles/Section";
import Tippy from "@tippy.js/react";

const Book = props => {
  return (
    <Tippy
      content={props.book.title + ' by ' + props.book.author}
      placement="bottom"
      animation="scale"
      duration={[250, 175]}
      delay={[0, 100]}
      distance={5}
    >
      <Image src={props.book.imageURL} alt={props.book.title}></Image>
    </Tippy>
  );
};

const Image = styled.img`
  max-width: 150px;
  justify-self: center;
`;

const Books = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-row-gap: 10px;
  padding-top: 10px;

  p {
    justify-self: center;
  }
`;

const BookList = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
        console.log(val);
        this.setState({ Books: val.data });
      });
  }

  render() {
    return (
      <Section>
        <Heading>Reading List</Heading>
        <Body>
          Here’s a look at what I’m reading and what I've read in the past. I’m
          always looking for recommendations so feel free to drop one below
        </Body>
        <BookList>
          <BookWrapper>
            {/* <Book
              src={this.state.Books.CurrentBook.imageURL}
              alt={this.state.Books.CurrentBook.title}
            /> */}
            <Book book={this.state.Books.CurrentBook}></Book>
            <Body>Currently Reading</Body>
          </BookWrapper>
          <BookWrapper>
            <Books>
              {this.state.Books.Read.map(book => (
                <Book key={book.title} book={book}></Book>
                // <Tippy
                //   content={book.title + " by " + book.author}
                //   placement="top"
                //   animation="scale"
                //   duration={[250, 175]}
                //   delay={[100, 0]}
                //   distance={5}
                //   key={book.title}
                // >
                //   <Book src={book.imageURL} alt={book.title} />
                // </Tippy>
              ))}
            </Books>
            <Body>Books I've Read</Body>
          </BookWrapper>
        </BookList>
      </Section>
    );
  }
}

export default ReadingList;
