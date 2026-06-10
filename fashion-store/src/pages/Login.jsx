import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();
const handleLogin = (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(
    localStorage.getItem("user")
  );

  if (
    savedUser &&
    email === savedUser.email &&
    password === savedUser.password
  ) {
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  } else {
    alert("Invalid Email or Password");
  }
};
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
             type="password"
             placeholder="Enter Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
              Login
          </button>
          <form onSubmit={handleLogin}></form>

        </form>

        <p className="text-center mt-5">

          Don't have an account?

          <Link
            to="/register"
            className="text-pink-600 ml-2 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;