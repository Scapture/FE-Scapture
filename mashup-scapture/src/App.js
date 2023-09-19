import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./pages/Mainpage";
import Recordingpage from "./pages/Recordingpage";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/pages/Mainpage" exact component={Mainpage} />
    //     <Route path="./pages/Recordingpage.js" component={Recordingpage} />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/Recording" element={<Recordingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
