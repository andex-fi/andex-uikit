import React from "react";
import { MatchBreakpointsProvider, ToastsProvider } from "./contexts";
import { ThemeProvider, DefaultTheme } from "styled-components";

export const UIKitProvider: React.FC<React.PropsWithChildren<{ theme: DefaultTheme; children: React.ReactNode }>> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MatchBreakpointsProvider>
        <ToastsProvider>{children}</ToastsProvider>
      </MatchBreakpointsProvider>
    </ThemeProvider>
  );
};
