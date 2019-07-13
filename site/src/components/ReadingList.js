import React, { Component } from "react";
import Container from "../styles/Container";
import Heading from "../styles/Heading";
import Body from "../styles/Body";
import styled from "styled-components";
import axios from "axios";

const CurrentBook = styled.img`
  max-width: 150px;
`

export class ReadingList extends Component {
  state = {
    book: {
      title: "",
      image: ""
      
    }
  };

  componentDidMount() {
   this.getBook();
  }

  getBook() {
    // .get("https://us-central1-hamzabasrai-site.cloudfunctions.net/helloWorld")
    axios
      .get("http://localhost:5000/hamzabasrai-site/us-central1/helloWorld")
      .then(val => {
        console.log(val);
        this.setState({book: val.data});
      });
  }

  render() {
    return (
      <Container>
        <Heading>Reading List</Heading>
        <Body>
          Here’s a look at what I’m reading and what I plan to read next. I’m
          always looking for recommendations so feel free to drop one below 
        </Body>
        <CurrentBook src={this.state.book.image} alt={this.state.book.title}/>
      </Container>
    );
  }
}

export default ReadingList;
