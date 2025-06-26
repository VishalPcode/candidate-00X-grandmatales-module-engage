import { BrowserRouter, Routes, Route } from "react-router-dom";
import Engage from "./pages/Engage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Engage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
