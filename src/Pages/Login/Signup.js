import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }
  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="signup-form">
      <h2 className="text-primary">Please Sign Up</h2>
      <Form onSubmit={handleSignup}>
        <input type="text" name="name" id="" placeholder="your name" required />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />{" "}
        <br />
        <input type="submit" value=" signup" />
      </Form>
      <p>
        Already have account.
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
