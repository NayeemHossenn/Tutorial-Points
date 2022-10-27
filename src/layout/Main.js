import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="bg-info p-5">
        <Row>
          <Col lg="4">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
