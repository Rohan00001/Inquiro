import { Route, Routes } from "react-router-dom"
import Main from "./Pages/Main"
import Answers from "./Pages/Answers"
import Signup from "./Pages/Signup"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </>
  )
}

export default App