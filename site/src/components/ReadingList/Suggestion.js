import React from "react";
import styled from "styled-components";

const SuggestionWrapper = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-items: center;
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
