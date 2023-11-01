import React from "react";
import EditModal from "../PrEmp/EditModal";

const Employee = (props) => {
  return (
    <div>
      <div className="max-w-[300px] min-w-[300px] m-5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="block mx-auto max-w-[50%] sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
            src="https://source.unsplash.com/random"
            alt="Woman's Face"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">{props.name}</p>
            <p className="text-sm leading-tight text-gray-600">
              {props.role ? props.role : "No Role"}
            </p>
            <div className="mt-4">
              <EditModal
                name={props.name}
                role={props.role}
                id={props.id}
                key={props.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
