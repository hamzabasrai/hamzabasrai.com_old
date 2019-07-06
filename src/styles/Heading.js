import styled from 'styled-components';
import theme from './theme';
// import media from './media';
// const { colors, fontSizes, fonts } = theme;
const { colors, fonts } = theme;

const Heading = styled.h1`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 72px;
  margin: 10px 0 10px;
  width: 100%;
  white-space: nowrap;

  &:before {
    margin-right: 10px;
    font-family: ${fonts.Rubik};
    font-weight: normal;
    color: ${colors.lightGrey};
    position: relative;
    bottom: 4px;
  }
`;

export default Heading;
