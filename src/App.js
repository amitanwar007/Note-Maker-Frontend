import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeRoute } from "./Routes/HomeRoute";
import Register from "./Routes/Register";
import Signin from "./Routes/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addnotes" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
