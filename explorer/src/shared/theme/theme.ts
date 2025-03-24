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

// Complete color palette from slides
const colorsBase = {
  // Iris Blue palette
  irisLight: "#9B8BFF",
  irisCore: "#4141FC",  
  irisDark: "#0000FF",
  
  // Other brand colors
  magentaCore: "#DF60FF",
  greenCore: "#00C600",
  
  // Neutrals palette
  white: "#FFFFFF",
  frostGray: "#EAEAEA", 
  stoneBeige: "#BBAD97",
  carbon: "#161616"    
};

const variables: ThemeOptions["variables"] = { navDrawerWidth: 200 };

export const theme = createTheme({
  palette: createPalette({
    primary: {
      light: colorsBase.irisLight,
      main: colorsBase.irisCore,
      dark: colorsBase.irisDark,
      contrastText: colorsBase.white,
    },
    secondary: {
      light: colorsBase.white,
      main: colorsBase.magentaCore,
      dark: colorsBase.stoneBeige,
      contrastText: colorsBase.carbon,
    },
    success: {
      main: colorsBase.greenCore,
    },
    background: { 
      default: colorsBase.frostGray,
      paper: colorsBase.white,
    },
    text: { 
      primary: colorsBase.carbon,
      secondary: colorsBase.irisCore,
    },
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
  components: { 
    MuiDialog: { 
      styleOverrides: { 
        root: { width: "100%" } 
      } 
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 4,
        },
        containedPrimary: {
          backgroundColor: colorsBase.irisCore,
          '&:hover': {
            backgroundColor: colorsBase.irisDark,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontWeight: 500,
        },
      },
    },
  },
});