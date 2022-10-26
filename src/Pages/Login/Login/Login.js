import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { SignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>

      <ButtonGroup vertical className="mt-3">
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-primary"
          className="mb-2"
        >
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-info">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Login;
