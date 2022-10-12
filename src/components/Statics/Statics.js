import React, { useEffect, useState } from "react";
import "./Statics.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statics = () => {
  const [value, setValue] = useState([]);
  console.log(value);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setValue(data.data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
      <div>
        <h2 className="text-center text-2xl font-bold">SimpleLineChart</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={450}
            height={400}
            data={value}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            className="chart"
            width={450}
            height={400}
            data={value}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <h2 className="text-center text-2xl font-bold">SimpleLineChart</h2>
      </div>
    </div>
  );
};

export default Statics;
