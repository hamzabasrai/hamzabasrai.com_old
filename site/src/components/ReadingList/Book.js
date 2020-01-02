import React, { Component } from "react";
import styled from "styled-components";
import Card from "../../styles/Card";
import theme from "../../styles/theme";
import gr from "../../images/goodreads.png";
const { fontSizes } = theme;

const BookContainer = styled(Card)`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;

  .label {
    display: block;
    font-weight: 300;
    font-size: ${fontSizes.bodySmall};
    text-transform: uppercase;
  }

  .title {
    grid-area: 1 / 1 / 2 / 4;
    align-self: center;

    h3 {
      font-size: ${fontSizes.bodyMedium};
    }
  }

  .author {
    grid-area: 2 / 1 / 3 / 4;
    align-self: center;
    font-size: ${fontSizes.bodySmall};
  }

  .status {
    grid-area: 3 / 1 / 4 / 4;
    align-self: center;
    font-size: ${fontSizes.bodySmall};
  }

  .goodreads {
    grid-area: 3 / 3 / 4 / 4;
    justify-self: end;
    align-self: center;
    max-height: 48px;
    max-width: 48px;
  }
`;

export class Book extends Component {
  render() {
    return (
      <BookContainer>
        <div className="title">
          <p className="label">Title</p>
          <h3>{this.props.book.title}</h3>
        </div>
        <div className="author">
          <p className="label">Author</p>
          <h4>{this.props.book.author}</h4>
        </div>
        <div className="status">
          <p className="label">Date Completed</p>
          <h4>{this.props.book.status}</h4>
        </div>
        <div className="goodreads">
          <a
            href={this.props.book.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={gr} alt="GoodReads Logo"></img>
          </a>
        </div>
      </BookContainer>
    );
  }
}

export default Book;
