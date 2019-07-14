import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import Body from "../../styles/Body";
import Tippy from "@tippy.js/react";

const Book = props => {
  return (
    <Tippy
      content={props.book.title + " by " + props.book.author}
      placement="top"
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

const ReadBooks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-row-gap: 10px;
  padding-top: 10px;

  p {
    justify-self: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px 0;
`;

export class Books extends Component {
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
      <Grid>
        <Wrapper>
          <Book book={this.state.Books.CurrentBook}></Book>
          <Body>Currently Reading</Body>
        </Wrapper>
        <Wrapper>
          <ReadBooks>
            {this.state.Books.Read.map(book => (
              <Book key={book.title} book={book}></Book>
            ))}
          </ReadBooks>
          <Body>Books I've Read</Body>
        </Wrapper>
      </Grid>
    );
  }
}

export default Books;
