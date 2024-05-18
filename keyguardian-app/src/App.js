import Home from "./pages/Home";
import Start from "./pages/Start";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
    </div>
  );
}

export default App;