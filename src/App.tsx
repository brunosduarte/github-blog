import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { Repos } from "./components/Repos";

export function App() {
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Profile />
      <Search />
      <Repos />

    </ThemeProvider>

  )
}
