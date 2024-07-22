import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages that we are importing
import Todo from "./Components/Todo";
import Registraion from "./Components/Registration";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="bg-stone-300 grid py-4 min-h-screen content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registraion />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
