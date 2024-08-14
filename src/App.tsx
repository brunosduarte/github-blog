import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { Issues } from "./components/Issues";
import { FetchProvider } from "./contexts/FetchContext";
import { Post } from "./components/Post";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FetchProvider>
      
          {/* <Profile />
          <Search />
          <Issues /> */}

          <Post />

      </FetchProvider>
    </ThemeProvider>

  )
}
