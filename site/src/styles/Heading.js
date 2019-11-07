import styled from "styled-components";
import theme from "../styles/theme";
const { colors, fontSizes, fonts } = theme;

 const Heading = styled.h2`
  font-size: ${fontSizes.headerSmall};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: ${fontSizes.headerMedium};
  }
`;

export default Heading