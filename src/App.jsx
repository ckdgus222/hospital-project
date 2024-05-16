import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detailed from "./pages/Detailed";
import "./App.css";


//main 페이지
//Detailed 페이지

function App() {

 
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detailed" element={<Detailed />}></Route>
    </Routes>
  );
}

export default App;
