import React from "react";
import Employee from "./Components/PrEmp/Employee";
import { useState } from "react";

const App = () => {
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Product Manager",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "Peter Smith",
      role: "Designer",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 4,
      name: "Mary Johnson",
      role: "Marketing Manager",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 5,
      name: "Michael Jones",
      role: "Sales Manager",
      image: "https://source.unsplash.com/random",
    },
  ]);

  function updateEmployee() {
    console.log("hello from app.js");
  }

  const empElement = employee.map((employee) => {
    return (
      <Employee
        key={employee.id}
        id={employee.id}
        name={employee.name}
        role={employee.role}
        updateEmployee={updateEmployee}
      />
    );
  });

  return <div className="flex justiify-between flex-wrap"> {empElement}</div>;
};

export default App;
