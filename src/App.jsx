import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import products from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [isRegistered, setIsRegistered]= useState(false);
  return(
  <>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Login/>}></Route>
    <Route path="/register" element={<Register setIsRegistered={setIsRegistered}/>}></Route>
    <Route path="/dashboard" element={<Dashboard products={products}/>}></Route>
 
  </Routes>
  </BrowserRouter>












  {/* {isRegistered ? (<Login/>):(<Register setIsRegistered={setIsRegistered}/>)} */}
    {/* <Register/>
    <Login/> */}

    {/* <Dashboard products={products}/> */}
  </>
  )
}

export default App;
