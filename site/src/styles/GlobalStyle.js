import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import bg from "../images/background.svg";
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${colors.text};
    line-height: 1.3;
    font-family: ${fonts.GothicA1};
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 1440px){
      background-position: 0 0;  
      background-size: 100%;
    }

    &.hidden {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${fonts.GothicA1};
    color: ${colors.text};
    margin: 0;
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    main {
      flex: 1;
    }
    footer {
      margin: 10px;
      font-size: ${fontSizes.bodySmall};
      text-align: center;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 10px 20px;
    width: 100%;
    border-radius: 10px;
    color: ${colors.text};
    font-size: ${fontSizes.bodySmall};
    font-family: ${fonts.GothicA1};
    text-transform: uppercase;
    outline: 0;
    
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input, textarea {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    color: ${colors.text};
    font-size: ${fontSizes.bodySmall};
    font-family: ${fonts.GothicA1};
    outline: 0;

    &:focus,
    &:active {
      outline: 0;
      &::placeholder {
        opacity: 0.5;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: ${fontSizes.bodyMedium};
    }
  }

  p {
    margin: 0;
    font-size: ${fontSizes.bodySmall};
    font-family: ${fonts.GothicA1};
    color: ${colors.text};

    @media screen and (min-width: 768px) {
      font-size: ${fontSizes.bodyMedium};
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    font-size: ${fontSizes.bodySmall};
    line-height: ${fontSizes.bodySmall};
  }
`;

export default GlobalStyle;
