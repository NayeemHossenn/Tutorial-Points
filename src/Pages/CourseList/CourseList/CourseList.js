import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../../Shared/CourseSummaryCard/CourseSummaryCard";

const CourseList = () => {
  const allcourses = useLoaderData();
  return (
    <div>
      <h2>This is Home total :{allcourses.length}</h2>
      {allcourses.map((courses) => (
        <CourseSummaryCard
          key={courses._id}
          courses={courses}
        ></CourseSummaryCard>
      ))}
    </div>
  );
};

export default CourseList;
