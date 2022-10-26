import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Category = () => {
  const courses = useLoaderData();
  return (
    <Card>
      <Card.Img
        variant="top"
        style={{ height: "500px", width: "100%" }}
        src={courses?.image_url}
      />
      <Card.Body>
        <Card.Title>{courses?.title}</Card.Title>

        <p>
          {" "}
          <small>Badge: {courses?.rating?.badge}</small>
        </p>

        <Card.Text>{courses?.details}</Card.Text>
      </Card.Body>

      <div className="d-flex justify-content-between">
        <Link to="/premium">
          {" "}
          <Button variant="primary">Buy Premium</Button>
        </Link>
        <p>
          {" "}
          <small>Ratings: {courses?.rating?.number}/5</small>
        </p>
      </div>
    </Card>
  );
};

export default Category;
