import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2>All Courses </h2>
      <div className="border border-secondary rounded p-3">
        {courses.map((course) => (
          <p key={course._id}>
            <Button variant="outline-danger">
              {" "}
              <Link
                to={`/courses/${course._id}`}
                className="text-decoration-none text-dark fw-bold"
              >
                {course.title}
              </Link>
            </Button>{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
