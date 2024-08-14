import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { FetchProvider } from "./contexts/FetchContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FetchProvider>
        <RouterProvider router={router} />
      </FetchProvider>
    </ThemeProvider>

  )
}