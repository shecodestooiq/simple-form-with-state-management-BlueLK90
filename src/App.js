import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import UserContext from "./UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
