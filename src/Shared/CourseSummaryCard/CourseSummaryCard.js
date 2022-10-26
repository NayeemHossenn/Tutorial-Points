import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ courses }) => {
  return (
    <Card>
      <Card.Img variant="top" src={courses.image_url} />
      <Card.Body>
        <Card.Title>{courses.title}</Card.Title>
        <Card.Text>
          {courses.details.length > 100 ? (
            <p>
              {courses.details.slice(0, 100) + "..."}
              <Link to={`/courses/${courses._id}`}>
                {" "}
                <Button variant="primary">See Details</Button>
              </Link>
            </p>
          ) : (
            <p>{courses.details}</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseSummaryCard;
