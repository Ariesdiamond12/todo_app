import React from "react";

const Todo = () => {
  return (
    <div className="flex justify-evenly">
      <div className="bg-white w-11/12 max-w-md flex-col p-7 min-h-[500px] rounded-xl">
        <input
          className="flex items-center my-7 bg-gray-200 outline-none h-16 w-full pl-6 pr-2 placeholder:text-slate-600 rounded-full"
          type="text"
          placeholder="Add your task"
        />
      </div>
      <div className="bg-white w-11/12 max-w-md flex-col p-7 min-h-[500px] rounded-xl"></div>
    </div>
  );
};

export default Todo;
