import React, { useEffect, useRef, useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[]);
  return (

    <div className="container w-50 mx-auto border shadow mt-5 rounded-2 p-3">
      <form>
        <h1>Login Page</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            ref={inputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
          />
          <label className="form-check-label" htmlFor="exampleCheck2">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default Login;
