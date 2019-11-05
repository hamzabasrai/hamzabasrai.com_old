import React from "react";
import styled from "styled-components";

const SuggestionWrapper = styled.form`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr;
  grid-row-gap: 10px;
  margin: 10px 0;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 10px;
  }
`;

const Suggestion = () => {
  return (
    <SuggestionWrapper
      name="book-suggestion"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="book-suggestion" />
      <input type="text" name="book" placeholder="Suggest a book..."></input>
      <button type="submit">Submit</button>
    </SuggestionWrapper>
  );
};

export default Suggestion;
