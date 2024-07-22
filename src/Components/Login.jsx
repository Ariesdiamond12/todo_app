import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const log_user = () => {
    const storedUser = JSON.parse( localStorage.getItem("User") );

    if(email === storedUser.email && password === storedUser.password)
    {
      navigate("/Todo");
    }
    else
    {
      alert("Email and Password is incorrect!!")
    }   

   
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div>
        <form
          className="max-w-[400px] w-full mx-auto"
          onSubmit={
            log_user
          }
        >
          <h2 className="text-4xl font-bold text-center py-6">Login</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="border p-2 rounded-full"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2 rounded-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="border-none rounded-full bg-rose-600 h-16 w-full pl-6 pr-2 text-white text-lg font-medium cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
          <div>
            <p>
              Create an account?
              <Link to="/Registration">Registraion</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
