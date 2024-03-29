import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
