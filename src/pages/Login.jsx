import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("Grocery Shop User");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      console.log("User from localStorage:", parsedUser);
    } else {
      console.log("No user found in localStorage");
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    console.log("Typed:", email, password);
    console.log("Stored user:", user);

    try {
      if (
        user &&
        user.email === email.trim() &&
        user.password === password
      ) {
        alert("Success");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container w-50 mx-auto border shadow mt-5 rounded-2 p-3">
      <form onSubmit={handleLogin}>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          Login
        </button>
        <br />
        <Link to="/register">If not register </Link>
      </form>
    </div>
  );
};

export default Login;
