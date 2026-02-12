import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<Apply />} />
    </Routes>
  );
}

export default App;
