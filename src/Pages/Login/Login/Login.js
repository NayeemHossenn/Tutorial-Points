import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
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

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
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
