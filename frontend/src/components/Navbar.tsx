import { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  // 1. Initialize state from storage or system preference (This is perfect!)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. Use an effect to sync the state changes to the HTML tag and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]); // 👈 This array means: "Run this every time isDark changes"

  return (
    <div className="flex justify-between px-10 border-b sticky top-0 backdrop-blur-2xl">
      <h1 className="text-2xl font-bold py-4">
        <a href="/">DevFlow</a>
      </h1>
      <div className="flex flex-row items-center">
        <button onClick={() => setIsDark(!isDark)} className="text-2xl cursor-pointer">
          {isDark ? <IoSunnyOutline className="text-yellow-300" /> : <IoMoonOutline className="text-sky-800" />}
        </button>
      </div>
    </div>
  );
}
