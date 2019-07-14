import { createGlobalStyle } from "styled-components";
import theme from "./theme";
// import media from './media';
// const { colors, fontSizes, fonts } = theme;
const { colors, fonts } = theme;

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
    background-color: ${colors.background};
    color: ${colors.text};
    line-height: 1.3;
    font-family: ${fonts.RobotoMono};


    &.hidden {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${fonts.Rubik};
    color: ${colors.text};
    margin: 0;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    main {
      flex: 1 0 auto;
    }

    footer {
      margin: 10px;
      flex-shrink: 0;
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
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${colors.link};
    position: relative;
    transition: color 0.4s ease-out;
    cursor: pointer;

    &:hover,
    &:hover:after {
      color: ${colors.accent};
      right: 0;
      text-decoration: none;
    }

    &:after {
      border-radius: 1em;
      border-top: 0.1em solid ${colors.link};
      content: "";
      position: absolute;
      right: 100%;
      bottom: 0.14em;
      left: 0;
      transition: right 0.4s cubic-bezier(0, 0.5, 0, 1),
        border-color 0.4s ease-out;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {

    }
  }

  input, textarea {
    height: 3em;
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: ${colors.background_input};
    padding: 0 20px;
    color: ${colors.text};
    font-size: 18px;
    font-family: ${fonts.RobotoMono};
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
      color: ${colors.placeholder}
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0;
    font-size: 18px;
    font-family: ${fonts.RobotoMono};
    color: ${colors.text};
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .tippy-tooltip.accent-theme {
    background-color: ${colors.accent};
    color: ${colors.text};

    .tippy-backdrop {
      background-color: ${colors.accent};
    }
  }
`;

export default GlobalStyle;
