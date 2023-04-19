import React, { useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { NavBar } from "../Components/NavBar";


export const LoginPage = (props) => {
  const {mss} = props;
  const log = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    log?.isLogged(true);
    setIsLoggedIn(true);
    console.log(log)
    

  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    log?.isLogged(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <NavBar/>
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h1>
        {isLoggedIn ? (
          <div>
            <p className="text-lg font-semibold mb-4">Bienvenido, {username}!</p>
            <button
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div>
          <div className="w-full text-center my-5 text-red-500 font-bold">{mss}</div>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre de usuario"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Iniciar sesión
            </button>
          </form>
          </div>
        )}
      </div>
    </div>
  );
};

