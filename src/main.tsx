import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/Home/App.tsx";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { theme } from "./config/theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    font-family: "Munish", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
