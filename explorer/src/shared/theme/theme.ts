import { createTheme, darken, lighten, ThemeOptions } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Theme {
    variables: {
      navDrawerWidth: number;
    };
  }
  interface ThemeOptions {
    variables?: {
      navDrawerWidth?: number;
    };
  }
}

const colorsBase = {
  aquaDeep: "#0c564c",
  neonCarrot: "#F99e48",
  bostonBlue: "#2d84a5",
  soltitude: "#Dfe9f3",
};

const variables: ThemeOptions["variables"] = { navDrawerWidth: 200 };

export const theme = createTheme({
  palette: createPalette({
    primary: {
      main: colorsBase.neonCarrot,
      dark: darken(colorsBase.neonCarrot, 0.1),
    },
    secondary: {
      main: colorsBase.bostonBlue,
      light: lighten(colorsBase.bostonBlue, 0.2),
    },
    background: { default: "#dbdee0" },
    text: { primary: "#1e293b" },
  }),
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1200,
      lg: 1800,
      xl: 2100,
    },
  },
  variables,
  spacing: 4,
  components: { MuiDialog: { styleOverrides: { root: { width: "100%" } } } },
});
