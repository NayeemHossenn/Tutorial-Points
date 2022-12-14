import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <>
      <h3 className="text-center mb-3">{courses?.title}</h3>
      <Card className="p-3">
        <Card.Img
          variant="top"
          style={{ height: "400px", width: "" }}
          src={courses.image_url}
        />
        <Card.Body>
          <Card.Title>{courses?.title}</Card.Title>

          <p>
            {" "}
            <small>Badge: {courses?.rating?.badge}</small>
          </p>

          <Card.Text>{courses.details}</Card.Text>
        </Card.Body>

        <div className="d-flex justify-content-between">
          <Link to="/premium">
            {" "}
            <Button variant="primary">Get premium access</Button>
          </Link>
          <p>
            {" "}
            <small>Ratings: {courses?.rating?.number}/5</small>
          </p>
        </div>
      </Card>
    </>
  );
};

export default Courses;
