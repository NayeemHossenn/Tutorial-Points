import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5> what is cors?</h5>
        </Accordion.Header>
        <Accordion.Body>
          CORS stands for Cross-Origin Resource Sharing. It allows us to relax
          the security applied to an API. This is done by bypassing the
          Access-Control-Allow-Origin headers, which specify which origins can
          access the API.In other words, CORS is a browser security feature that
          restricts cross-origin HTTP requests with other servers and specifies
          which domains access your resources.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>
            {" "}
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
        </Accordion.Header>
        <Accordion.Body>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Auth0 is the go-to user authentication platform and a Firebase
          alternative for good reasons. It features a universal login for all
          your applications to add user convenience. This is like having SSO
          between multiple apps
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5> How does the private route work?</h5>
        </Accordion.Header>
        <Accordion.Body>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated Logged
          in.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5> What is Node? How does Node work?</h5>
        </Accordion.Header>
        <Accordion.Body>
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
