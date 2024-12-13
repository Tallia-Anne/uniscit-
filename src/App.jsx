import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./pages/Home/Home";
import Atelier from "./pages/Atelier/Atelier";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/atelier" element={<Atelier />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
