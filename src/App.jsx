
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import Home from "./pages/Home/Home"
import Atelier from "./pages/Atelier/Atelier"
import Footer from "./Components/Footer/Footer"

function App() {
 

  return (
    <>
    <Nav/>
    <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
     <Route path="/blog" exact element={<Atelier />} />

      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
