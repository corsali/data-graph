import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMobile = () => {
  const { breakpoints } = useTheme();
  return useMediaQuery(breakpoints.down("sm"));
};
