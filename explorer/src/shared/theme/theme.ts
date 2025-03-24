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
  irisCore: "#4343FC",    // Renamed from aquaDeep
  magentaCore: "#DF60FF", // Renamed from neonCarrot
  greenCore: "#00C600",   // Renamed from bostonBlue
  frostGray: "#F7F7FF",   // Renamed from soltitude
  carbon: "#2B2B2B"       // New neutral color
};

const variables: ThemeOptions["variables"] = { navDrawerWidth: 200 };

export const theme = createTheme({
  palette: createPalette({
    primary: {
      main: colorsBase.irisCore,
      dark: darken(colorsBase.irisCore, 0.1),
    },
    secondary: {
      main: colorsBase.magentaCore,
      light: lighten(colorsBase.magentaCore, 0.2),
    },
    success: {
      main: colorsBase.greenCore,
    },
    background: { default: colorsBase.frostGray },
    text: { primary: colorsBase.carbon },
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