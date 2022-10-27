import React from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <h2>LEARN FROM PROFESSIONALS </h2>
      <h5 className="border border-primary rounded p-3 bg-danger">
        Online courses are planned by industry professionals to make sure that
        you have the knowledge to build professional software
      </h5>
      <h4>Upcoming Courses !!</h4>
      <h6 className="border border-primary rounded p-3 bg-warning">
        <li>Data Science</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Artificial Intelligence</li>
      </h6>
      <div className="border border-primary rounded p-3 bg-success bg-gradient">
        <h4>I just started, not sure about which course to take</h4>
        <Button variant="outline-dark">Help me to choose:)</Button>
      </div>
    </div>
  );
};

export default Home;
