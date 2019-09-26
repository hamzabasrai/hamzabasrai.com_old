import React, { Component } from "react";
import styled from "styled-components";

import theme from '../../styles/theme'
const { colors, fontSizes, fonts } = theme;

const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const Image = styled.img`
  max-width: 100%;
  justify-self: end;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: ${fontSizes.largish};
`;

const Author = styled.p``;

const CompletedDate = styled.p`
  color: ${colors.link};
  margin: 10px 0;
`;

export class Book extends Component {
  render() {
    return (
      <BookContainer>
        <Image
          src={this.props.book.imageURL}
          alt={this.props.book.title}
        ></Image>
        <InfoContainer>
          <Title>{this.props.book.title}</Title>
          <Author>by {this.props.book.author}</Author>
          <CompletedDate>
            {this.props.book.completedDate === ""
              ? "Currently Reading"
              : 'Finished on ' + this.props.book.completedDate}
          </CompletedDate>
        </InfoContainer>
      </BookContainer>
    );
  }
}

export default Book;
