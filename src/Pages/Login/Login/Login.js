import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <ButtonGroup vertical>
      <Button variant="outline-primary" className="mb-2">
        {" "}
        <FaGoogle></FaGoogle> Login with Google
      </Button>
      <Button variant="outline-info">
        <FaGithub></FaGithub> Login with Github
      </Button>
    </ButtonGroup>
  );
};

export default Login;
