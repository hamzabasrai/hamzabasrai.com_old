import styled from 'styled-components';
import theme from './theme';
// import media from './media';
// const { colors, fontSizes, fonts } = theme;
const { colors, fonts } = theme;

const Body = styled.p`
  font-size: 18px;

  &:before {
    font-family: ${fonts.RobotoMono};
    color: ${colors.lightGrey};
    bottom: 4px;
  }
`;

export default Body;
