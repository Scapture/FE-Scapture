import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Mainpage from "./pages/Mainpage";
import Recordingpage from "./pages/Recordingpage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ScrollToTop 컴포넌트를 Router 밖으로 빼기 */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Recording" element={<Recordingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
