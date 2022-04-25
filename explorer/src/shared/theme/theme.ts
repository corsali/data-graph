import { createTheme, ThemeOptions } from "@mui/material";

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

const variables: ThemeOptions["variables"] = { navDrawerWidth: 200 };

export const theme = createTheme({
  components: {
    MuiAppBar: { styleOverrides: { root: { border: 0, zIndex: 900 } } },
    MuiDrawer: {
      styleOverrides: {
        paper: { width: variables.navDrawerWidth, zIndex: 900, border: 0 },
      },
    },
  },
  variables,
  spacing: 4,
});
