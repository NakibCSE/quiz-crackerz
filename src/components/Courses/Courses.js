import React from "react";
import Course from "../Course/Course";

const Courses = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-4/5 mt-5 mx-auto">
      {courses.data.map((course) => (
        <Course course={course} key={course.id}></Course>
      ))}
    </div>
  );
};

export default Courses;
