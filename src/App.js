import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Content from "./components/Pages/Content"

function App() {

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Content">Content</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Content" element={<Content />}></Route>

      </Routes>
    </div>
  )



}
export default App