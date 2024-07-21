import TodoItems from "./TodoItems";
import tick from "../assets/tick.png";
import delete_icon from "../assets/delete.png";
import { useRef, useState } from "react";

const Todo = () => {
  //Adding a state var where I will store the the todo list and I have initialized it with an empty array to store multiple todos!!!
  const [todoList, setTodoList] = useState([]);
  const [id, setid] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");

  //The useRef is going to be connected to the to the input field that we created
  //The inputRef is going to give us the value that will be entered in the input field
  const inputRef = useRef();

  //We need the text that is written in the input field by the user
  const add = () => {
    const inputText = inputRef.current.value;

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
      priority: selectedPriority,
    };

    //To update the todo list we using the setTodoList
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  //Creating a delete function
  //The filter will return all the todo item except where the id is same
  //The id that i created will check for each todo item if their id is same as the id
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  return (
    <div className="flex justify-evenly">
      {/* -------------------------------First Column---------------------------------- */}
      <div className="bg-white w-11/12 max-w-md flex-col p-7 min-h-[500px] rounded-xl">
        <input
          className="flex items-center my-7 bg-gray-200 outline-none h-16 w-full pl-6 pr-2 placeholder:text-slate-600 rounded-full"
          type="text"
          placeholder="Add your task"
        />
        <label htmlFor="priority task">
          <h1 className="text-lg font-medium">Priority</h1>
        </label>
        <select
          className="flex items-center my-7 bg-gray-200 outline-none h-16 w-full pl-6 pr-2 placeholder:text-slate-600 rounded-full"
          id="priority-task"
          onChange={handlePriorityChange}
        >
          <option></option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={add}
          className="border-none rounded-full bg-rose-600 h-16 w-full pl-6 pr-2 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* --------------------------Second Column----------------------------- */}
      <div className="bg-white w-11/12 max-w-md flex-col p-7 min-h-[500px] rounded-xl">
        {/* ----------------------Title------------------------ */}
        <div className="flex items-center mt-7 gap-2">
          <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>
        <div>
          {todoList.map((item, index) => {
            return (
              <div className="flex items-center my-3 gap-2" key={item.id}>
                <div className="flex flex-1 items-center cursor-pointer">
                  <img className="w-7" src={tick} onClick={() => {}} />
                  <p className="text-slate-700 ml-4 text-[17px]">{item.text}</p>
                </div>

                <img
                  onClick={() => {
                    deleteTodo(item.id);
                  }}
                  src={delete_icon}
                  className="w-3.5 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
