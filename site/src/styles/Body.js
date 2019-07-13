import styled from 'styled-components';
import theme from './theme';
// import media from './media';
// const { colors, fontSizes, fonts } = theme;
const { colors, fonts } = theme;

const Body = styled.p`
  position: relative;
  font-size: 18px;
  margin: 10px 0 10px;
  /* width: 100%; */

  &:before {
    margin-right: 10px;
    font-family: ${fonts.RobotoMono};
    font-weight: normal;
    color: ${colors.lightGrey};
    position: relative;
    bottom: 4px;
  }
`;

export default Body;
