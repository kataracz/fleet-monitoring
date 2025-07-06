import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

// Fonts
import "@fontsource-variable/open-sans";

// Colors
import { lightBlue } from "@mui/material/colors";

// Design Tokens exported from Figma
import tokens from "./design-tokens.tokens.json";

const palette = tokens.palette;

let theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: ["Open Sans Variable"],
  },
  palette: {
    primary: {
      main: palette.primary.main.value,
      light: palette.primary.light.value,
      dark: palette.primary.dark.value,
      contrastText: palette.primary.contrasttext.value,
    },
    charging: {
      main: palette.charging.main.value,
      light: palette.charging.light.value,
      dark: palette.charging.dark.value,
      contrastText: palette.charging.contrasttext.value,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          variants: [
            {
              // Overwrite Info Chip Color for better contrast ratio
              props: { color: "info" },
              style: {
                backgroundColor: lightBlue[900],
              },
            },
            {
              // Chip Variant for Charging status
              props: { color: "charging" },
              style: {
                backgroundColor: palette.charging.main.value,
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

export default theme = responsiveFontSizes(theme);
