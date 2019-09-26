import styled from "styled-components";
import theme from "./theme";
import media from "./media";
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h1`
  font-size: ${fontSizes.xlarge};
  width: 100%;
  white-space: nowrap;
  font-family: ${fonts.Rubik};
  color: ${colors.lightGrey};

  @media screen and (min-width: 768px) {
    font-size: ${fontSizes.xxlarge};
  }
`;

export default Heading;
