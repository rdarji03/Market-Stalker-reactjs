import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/HOme/Home";
import Stock from "./Component/Stocks/Stock";
import News from "./Component/News/News";
import About from "./Component/About/About";
import Cryptos from "./Component/HOme/Cryptos";
import Indices from "./Component/HOme/Indices";
import IndiaStock from "./Component/HOme/IndiaStock";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="route-container">
          <Routes>
            <Route path="/" element={<Stock />} />
            <Route path="/market" element={<Home />}>
              <Route path="indices" element={<Indices />} />
              <Route path="cryptos" element={<Cryptos />} />
              <Route path="indianstock" element={<IndiaStock />} />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
