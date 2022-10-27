import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../../Shared/CourseSummaryCard/CourseSummaryCard";

const CourseList = () => {
  const allcourses = useLoaderData();
  return (
    <div>
      <h2 className="text-center mb-3">This is the course section</h2>
      <div>
        {allcourses.map((courses) => (
          <CourseSummaryCard
            key={courses._id}
            courses={courses}
          ></CourseSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
