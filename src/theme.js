const palette = darkMode => ({
  contrastColor: darkMode ? "#ffffff" : "#000000",
  bodyBackground: darkMode ? "#202020" : "#FCFCFC",
  text: darkMode ? "#E9E9E9" : "#2F2F2F",
  contrastText: darkMode ? "#2F2F2F" : "#E9E9E9",
  panelBackground: darkMode ? "#262626" : "#F5F5F5",
  panelBorder: darkMode ? "#2d2d2d" : "#ececec",
  inputBorder: darkMode ? "#666666" : "#E9E9E9",
  iconColor: darkMode ? "#CC3363" : "#CC3363",
  black: "#2F2F2F",
  grey: "#F5F5F5",
  mediumGrey: "#ececec",
  darkGrey: "#7C7C7C",
  yellow: "#666666",
  pink: "#CC3363",
  blue: "#3D348B",
  error: "#c62828",
  success: "#9ccc65",
})

const sizes = ["400px", "500px", "920px"]

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
  },
}

const space = [
  "0.25rem",
  "0.5rem",
  "0.75rem",
  "1rem",
  "1.5rem",
  "2rem",
  "3rem",
  "4rem",
  "6rem",
  "8rem",
  "12rem",
  "16rem",
  "24rem",
]

const fontSize = {
  [-400]: "0.6rem",
  [-300]: "0.7rem",
  [-200]: "0.8rem",
  [-100]: "0.9rem",
  100: "1rem",
  200: "1.1rem",
  300: "1.2rem",
  400: "1.5rem",
  500: "1.8rem",
  600: "2rem",
  700: "2.4rem",
  800: "3rem",
  900: "3.6rem",
}

const fontWeight = ["400", "500", "700", "900"]

const codeFontFamily = "Source Code Pro, monospace"

const theme = darkMode => ({
  palette: palette(darkMode),
  breakpoints,
  space,
  fontWeight,
  fontSize,
  codeFontFamily,
})

export default theme
