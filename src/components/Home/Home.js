import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";

const Home = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <Header></Header>
      <Courses courses={courses}></Courses>
    </div>
  );
};

export default Home;
