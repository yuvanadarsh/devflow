import { useState } from "react";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);

  function handleChange() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }
  return (
    <div className="flex justify-between px-10 border-b">
      <h1 className="text-2xl font-bold py-4">DevFlow</h1>
      <div className="flex flex-row items-center">
        <button onClick={handleChange} className="text-2xl">
          {isDark ? <IoSunnyOutline className="text-yellow-300" /> : <IoMoonOutline className="text-sky-800" />}
        </button>
      </div>
    </div>
  );
}
