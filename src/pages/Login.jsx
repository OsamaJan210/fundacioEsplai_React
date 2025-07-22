import { useState } from "react";

function Login() {
  const correctPattern = [true, false, true, false, true];
  const [toggles, setToggles] = useState([false, false, false, false, false]);
  const [message, setMessage] = useState("");

  const toggleSquare = (index) => {
    const updated = toggles.map((val, i) => (i === index ? !val : val));
    setToggles(updated);
  };

  const handleLogin = () => {
    const isMatch = JSON.stringify(toggles) === JSON.stringify(correctPattern);
    setMessage(isMatch ? " Logged In!" : " Wrong Combination");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-10">
        <div className="flex gap-3">
          {toggles.map((isOn, index) => (
            <div
              key={index}
              onClick={() => toggleSquare(index)}
              className={`w-12 h-12 rounded cursor-pointer transition-colors duration-300 ${
                isOn ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Login
        </button>

        <p className="text-lg font-medium">{message}</p>
      </div>
    </>
  );
}

export default Login;
