import { Issues } from "../components/Issues";
import { Profile } from "../components/Profile";
import { Search } from "../components/Search";

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <Issues />
    </>
  )
}