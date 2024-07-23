import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Registraion() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reg_user = () => {
    //alert(name + " " + surname + " " + email + " " + password);
    localStorage.setItem(
      "User",
      JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      })
    );

    navigate("/");
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div>
        <form className="max-w-[400px] w-full mx-auto" onSubmit={reg_user}>
          <h2 className="text-4xl font-bold text-center py-6">Registration</h2>
          <div className="flex flex-col py-2">
            <label>Name</label>
            <input
              className="border p-2 rounded-full"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Surname</label>
            <input
              className="border p-2 rounded-full"
              type="text"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="border p-2 rounded-full"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2 rounded-full"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="border-none rounded-full bg-rose-600 h-16 w-full pl-6 pr-2 text-white text-lg font-medium cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
          <div>
            <p>
              Already have an account?<Link to="/"> Login </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registraion;
