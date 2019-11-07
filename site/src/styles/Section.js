import styled from "styled-components";
import media from "../styles/media";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 45%; 
  padding-left: 10%; 
  padding-right: 10%;

  @media screen and (min-width: 768px) {
    padding-top: 35%;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 25%;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 15%;
  }
`;

export default Section;
