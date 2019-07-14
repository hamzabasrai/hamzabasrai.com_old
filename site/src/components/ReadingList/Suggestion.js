import React from "react";
import styled from "styled-components";

const Submit = styled.button`
  height: 3em;
  width: 75%;
  border-radius: 10px;
  background-color: #ee2b47;
  color: #f6f6f6;
  font-size: 18px;
  font-family: "Roboto Mono";
  text-transform: uppercase;
`;

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
      <Submit type="submit">Submit</Submit>
    </SuggestionWrapper>
  );
};

export default Suggestion;
