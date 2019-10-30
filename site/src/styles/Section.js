import styled from "styled-components";
import media from "../styles/media";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50% 10%;

  @media screen and (min-width: 768px) {
    padding: 35% 10%;
  }

  @media screen and (min-width: 1024px) {
    padding: 25% 10%;
  }

  @media screen and (min-width: 1440px) {
    padding: 13% 10%;
  }
`;

export default Section;
