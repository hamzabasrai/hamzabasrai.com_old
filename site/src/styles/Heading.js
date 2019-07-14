import styled from "styled-components";
import theme from "./theme";
// import media from './media';
// const { colors, fontSizes, fonts } = theme;
const { colors, fonts } = theme;

const Heading = styled.h1`
  font-size: 72px;
  width: 100%;
  white-space: nowrap;
  font-family: ${fonts.Rubik};
  color: ${colors.lightGrey};
`;

export default Heading;
