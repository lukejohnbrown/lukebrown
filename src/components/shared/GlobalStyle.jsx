import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'Noto Sans JP', 'Helvetica', sans-serif;
    vertical-align: baseline;
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight[2]};;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    font-size: 16px;
    color: ${({ theme }) => theme.palette.text};;
    background: ${({ theme }) => theme.palette.bodyBackground};
  }

  h1, h2, h3, h4, h5, h6, p, button {
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.text};;
    line-height: 1.7;
  }

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.text};;
  }

  button {
    font-size: 1rem;
    border: none;
    background: none;
    font-family: 'Noto Sans JP', 'Helvetica', sans-serif;
  }

  input,
  textarea {
    font-family: 'Noto Sans JP', 'Helvetica', sans-serif;
    font-size: 1rem;
  }

  @keyframes wave {
    0% { transform: rotate(0.0deg) }
    10% { transform: rotate(10.0deg) }
    20% { transform: rotate(-12.0deg) }
    30% { transform: rotate(10.0deg) }
    40% { transform: rotate(-9.0deg) }
    50% { transform: rotate(0.0deg) }
    100% { transform: rotate(0.0deg) }
  }
`

export default GlobalStyle
