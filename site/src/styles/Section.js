import styled from 'styled-components';
import media from '../styles/media';

// TODO: Add media queries

const Section = styled.section`
  /* max-width: 1140px; */
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  padding: 250px 0;
 
  ${media.desktop`padding:200px 0`}
  ${media.laptop`padding:175px 0`}
  ${media.tablet`padding:150px 0`}
  ${media.largePhone`padding:125px 0`}
  ${media.mediumPhone`padding:100px 0`}

  ${media.tablet`width:608px`}
  ${media.mediumPhone`width:300px`}
  ${media.smallPhone`width:300px`}

`;



export default Section;
