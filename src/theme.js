
const palette = {
  black: "#2F2F2F",
  grey: "#F5F5F5",
  yellow: "#F5DE19",
  blue: "#3D348B",
}

const sizes = ["400px", "500px", "920px"];

const breakpoints = {
  up: {
    xs: `(min-width: ${sizes[0]})`,
    sm: `(min-width: ${sizes[1]})`,
    md: `(min-width: ${sizes[2]})`,
  },
  down: {
    xs: `(max-width: ${sizes[0]})`,
    sm: `(max-width: ${sizes[1]})`,
    md: `(max-width: ${sizes[2]})`,
  }
}

const space = ["0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "3rem", "4rem", "6rem", "8rem", "12rem", "16rem", "24rem"];

const fontSize = {
  [-400]: '0.6rem',
  [-300]: '0.7rem',
  [-200]: '0.8rem',
  [-100]: '0.9rem',
  [100]: '1rem',
  [200]: '1.1rem',
  [300]: '1.2rem',
  [400]: '1.5rem',
  [500]: '1.8rem',
  [600]: '2rem',
  [700]: '2.4rem',
  [800]: '3rem',
  [900]: '3.6rem',
}

const fontWeight = ["400", "500", "600", "800"];

const theme = {
  palette,
  breakpoints,
  space,
  fontWeight,
  fontSize
}

export default theme;