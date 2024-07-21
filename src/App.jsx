import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages that we are importing
import Todo from "./Components/Todo";
import Registraion from "./Components/Registration";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="bg-slate-950 grig py-4 min-h-screen content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
