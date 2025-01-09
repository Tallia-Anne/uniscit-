import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./pages/Home/Home";
import Atelier from "./pages/Atelier/Atelier";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import SinglePost from "./pages/SinglePost/SinglePost";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/about" element={<About />} />
        <Route path="/atelier/:id" element={<SinglePost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
