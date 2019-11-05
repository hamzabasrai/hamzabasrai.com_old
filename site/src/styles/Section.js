import styled from "styled-components";
import media from "../styles/media";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 65% 10% 15% 10%;

  @media screen and (min-width: 768px) {
    padding: 35% 10% 15% 10%;
  }

  @media screen and (min-width: 1024px) {
    padding: 25% 10% 15% 10%;
  }

  @media screen and (min-width: 1440px) {
    padding: 12% 10% 6% 10%;
  }
`;

export default Section;
