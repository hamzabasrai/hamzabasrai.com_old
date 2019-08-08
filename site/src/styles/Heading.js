import styled from "styled-components";
import theme from "./theme";
import media from './media';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h1`
  font-size: ${fontSizes.xxlarge};
  width: 100%;
  white-space: nowrap;
  font-family: ${fonts.Rubik};
  color: ${colors.lightGrey};
  ${media.desktop`font-size: ${fontSizes.xxlarge};`}
  ${media.tablet`font-size: ${fontSizes.xlarge};`}
`;

export default Heading;
