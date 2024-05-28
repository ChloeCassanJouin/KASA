import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Lodging from './pages/Lodging.jsx';
import NoPage from './pages/NoPage.jsx';
import './SASS/Main.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
