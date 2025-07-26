import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer.jsx";


// import more pages as needed

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutMe />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}