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

  .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
  -webkit-transition: all 0.25s ease-in;
  -moz-transition: all 0.25s ease-in;
  -ms-transition: all 0.25s ease-in;
  -o-transition: all 0.25s ease-in;
  transition: all 0.25s ease-in;
  opacity: 0.4;
  filter: alpha(opacity=40);
  position: absolute;
  z-index: 2;
  top: 20px;
  background: none;
  border: 0;
  font-size: 32px;
  cursor: pointer; }
  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100); }
  .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
    margin: 0 5px;
    display: inline-block;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: ''; }
  .carousel .control-disabled.control-arrow {
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: inherit;
    display: none; }
  .carousel .control-prev.control-arrow {
    left: 0; }
    .carousel .control-prev.control-arrow:before {
      border-right: 8px solid #fff; }
  .carousel .control-next.control-arrow {
    right: 0; }
    .carousel .control-next.control-arrow:before {
      border-left: 8px solid #fff; }

.carousel {
  position: relative;
  width: 100%; }
  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; }
  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none; }
  .carousel .carousel {
    position: relative; }
  .carousel .control-arrow {
    outline: 0;
    border: 0;
    background: none;
    top: 50%;
    margin-top: -13px;
    font-size: 18px; }
  .carousel .thumbs-wrapper {
    margin: 20px;
    overflow: hidden; }
  .carousel .thumbs {
    -webkit-transition: all 0.15s ease-in;
    -moz-transition: all 0.15s ease-in;
    -ms-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    position: relative;
    list-style: none;
    white-space: nowrap; }
  .carousel .thumb {
    -webkit-transition: border 0.15s ease-in;
    -moz-transition: border 0.15s ease-in;
    -ms-transition: border 0.15s ease-in;
    -o-transition: border 0.15s ease-in;
    transition: border 0.15s ease-in;
    display: inline-block;
    width: 80px;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    border: 3px solid #fff;
    padding: 2px; }
    .carousel .thumb:focus {
      border: 3px solid #ccc;
      outline: none; }
    .carousel .thumb.selected, .carousel .thumb:hover {
      border: 3px solid #333; }
    .carousel .thumb img {
      vertical-align: top; }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden; }
    .carousel.carousel-slider .control-arrow {
      top: 0;
      color: #fff;
      font-size: 26px;
      bottom: 0;
      margin-top: 0;
      padding: 5px; }
      .carousel.carousel-slider .control-arrow:hover {
        background: rgba(0, 0, 0, 0.2); }
  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in; }
    .carousel .slider-wrapper.axis-horizontal .slider {
      -ms-box-orient: horizontal;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -moz-flex;
      display: -webkit-flex;
      display: flex; }
      .carousel .slider-wrapper.axis-horizontal .slider .slide {
        flex-direction: column;
        flex-flow: column; }
    .carousel .slider-wrapper.axis-vertical {
      -ms-box-orient: horizontal;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -moz-flex;
      display: -webkit-flex;
      display: flex; }
      .carousel .slider-wrapper.axis-vertical .slider {
        -webkit-flex-direction: column;
        flex-direction: column; }
  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%; }
    .carousel .slider.animated {
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out; }
  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    background: transparent; }
    .carousel .slide img {
      width: 100%;
      vertical-align: top;
      border: 0; }
    .carousel .slide iframe {
      display: inline-block;
      width: calc(100% - 80px);
      margin: 0 40px 40px;
      border: 0; }
    .carousel .slide .legend {
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -ms-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      position: absolute;
      bottom: 40px;
      left: 50%;
      margin-left: -45%;
      width: 90%;
      border-radius: 10px;
      background: #000;
      color: #fff;
      padding: 10px;
      font-size: 12px;
      text-align: center;
      opacity: 0.25;
      -webkit-transition: opacity 0.35s ease-in-out;
      -moz-transition: opacity 0.35s ease-in-out;
      -ms-transition: opacity 0.35s ease-in-out;
      -o-transition: opacity 0.35s ease-in-out;
      transition: opacity 0.35s ease-in-out; }
  .carousel .control-dots {
    text-align: center;
    width: 100%; }
    @media (min-width: 960px) {
      .carousel .control-dots {
        bottom: 0; } }
    .carousel .control-dots .dot {
      -webkit-transition: opacity 0.25s ease-in;
      -moz-transition: opacity 0.25s ease-in;
      -ms-transition: opacity 0.25s ease-in;
      -o-transition: opacity 0.25s ease-in;
      transition: opacity 0.25s ease-in;
      opacity: 0.3;
      filter: alpha(opacity=30);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
      background: #fff;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      cursor: pointer;
      display: inline-block;
      margin: 0 8px; }
      .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
        opacity: 1;
        filter: alpha(opacity=100); }
  .carousel .carousel-status {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    color: #fff; }
  .carousel:hover .slide .legend {
    opacity: 1; }

`;

export default GlobalStyle;
