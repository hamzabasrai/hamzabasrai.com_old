import React from 'react'
import styled from "styled-components";

const SuggestionInput = styled.input`
  height: 3em;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: rgba(246, 246, 246, 0.2);
  padding: 0 20px;
  color: #f6f6f6;
  font-size: 18px;
  font-family: "Roboto Mono";

  ::placeholder {
    color: rgba(246, 246, 246, 0.5);
  }
`;

const Submit = styled.button`
  height: 3em;
  width: 75%;
  border-radius: 10px;
  background-color: #EE2B47;
  color: #F6F6F6;
  font-size: 18px;
  font-family: "Roboto Mono";
  text-transform: uppercase;
`;

const SuggestionWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Suggestion = () => {
    return (
        <SuggestionWrapper>
          <SuggestionInput placeholder="Suggest a book..."></SuggestionInput>
          <Submit>Submit</Submit>
        </SuggestionWrapper>
    )
}

export default Suggestion
