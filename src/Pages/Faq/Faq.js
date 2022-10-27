import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>What skills do programmers need?</h5>
        </Accordion.Header>
        <Accordion.Body>
          The most important skills for a programmer are: Mathematical skills: A
          basic understanding of both arithmetic and algebra is essential for
          programming. Problem-solving: A significant amount of a programmer's
          time is spent on solving various issues with the software.
          Communication: Most software development jobs are team efforts, so
          programmers need to be able to successfully communicate with other
          team members. Computer skills: Most programmers have computer
          knowledge beyond the programming languages they routinely use.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5> Is there a difference between a coder and a programmer?</h5>
        </Accordion.Header>
        <Accordion.Body>
          Although the main activity for both coders and programmers is coding,
          programmers typically have a more complex set of tasks they need to
          perform. Coders usually solely write application code in the
          programming language they are instructed to, whereas programmers also
          need to create software functions, develop automation logic and solve
          various problems.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5> What is the job outlook for programmers?</h5>
        </Accordion.Header>
        <Accordion.Body>
          According to the Bureau of Labor Statistics, the job outlook for
          programmers is likely to decline by 7% from 2018 to 2028. Since
          computer programming can be performed from anywhere in the world, many
          companies hire programmers in places where compensation is lower,
          which may limit job growth for programmers in the United States
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5> What are the most popular programming sub-specialties?</h5>
        </Accordion.Header>
        <Accordion.Body>
          The most widely-used programming types are: Web developers: They write
          the code for a website's looks and functionality. Software
          programmers: They are responsible for creating and enhancing software.
          Data scientists: They typically work in academia and analyze large
          amounts of data. Mobile app developers: They are responsible for
          creating mobile software.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h5>Why do programmers charge by the hour?</h5>
        </Accordion.Header>
        <Accordion.Body>
          Programmers usually charge by the hour because a programming job
          implies many variables, and therefore it is very difficult to
          accurately estimate the time needed to write and review all the code.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    // <div>
    //   <h2> What skills do programmers need?</h2>
    //   <p>
    //     {" "}
    //     What skills do programmers need? The most important skills for a
    //     programmer are: Mathematical skills: A basic understanding of both
    //     arithmetic and algebra is essential for programming. Problem-solving: A
    //     significant amount of a programmer's time is spent on solving various
    //     issues with the software. Communication: Most software development jobs
    //     are team efforts, so programmers need to be able to successfully
    //     communicate with other team members. Computer skills: Most programmers
    //     have computer knowledge beyond the programming languages they routinely
    //     use.
    //   </p>
    // </div>
  );
};

export default Faq;
<h2> This is FAQ</h2>;
