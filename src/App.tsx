import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { Repositories } from "./components/Repositories";
import { FetchProvider } from "./contexts/FetchContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FetchProvider>
        <Profile />
        <Search />
        <Repositories />
      </FetchProvider>
    </ThemeProvider>

  )
}
