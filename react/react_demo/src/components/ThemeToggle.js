import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? "white" : "black";
  };
  return (
    <div>
      <button onClick={() => toggleTheme()}>{isDark ? "Light" : "DARK"}</button>
    </div>
  );
};
export default ThemeToggle;
