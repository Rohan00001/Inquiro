import { useState } from "react"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

const Main = () => {

  const [search, setSearch] = useState("")

  return (
    <>
      <div className="h-screen w-screen">
        <Navbar setSearch={setSearch} />
        <Home search={search} />
      </div>
    </>
  )
}

export default Main
