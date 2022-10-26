import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h3>This is Category :{courses.length}</h3>
    </div>
  );
};

export default Category;
