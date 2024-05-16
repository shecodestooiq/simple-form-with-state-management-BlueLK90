import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import UserContextProvider from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
