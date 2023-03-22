import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/HOme/Home";
import Stock from "./Component/Stocks/Stock";
import News from "./Component/News/News";
import About from "./Component/About/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="route-container bg-gray-100 min-h-[100vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stocks" element={<Stock />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
