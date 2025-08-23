import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import products from "./data";


function App() {
  const [isRegistered, setIsRegistered]= useState(false);
  return(
  <>
  {isRegistered ? (<Login/>):(<Register setIsRegistered={setIsRegistered}/>)}
    {/* <Register/>
    <Login/> */}

    <Dashboard products={products}/>
  </>
  )
}

export default App;
