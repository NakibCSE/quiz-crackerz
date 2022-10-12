import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { logo, name, total, id } = course;
  return (
    <div>
      <div className="rounded-xl shadow-xl p-6">
        <div className="bg-slate-300">
          <figure>
            <img className="w-full h-80" src={logo} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body d-flex">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>No of Questions: {total}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/quizes/${id}`}>
              <button className="btn btn-primary">Lets Go To Hunt</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
