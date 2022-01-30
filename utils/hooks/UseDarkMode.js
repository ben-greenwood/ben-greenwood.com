import { useState, useEffect } from 'react'

export default function useDarkMode() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  useEffect(() => {
    setDarkModeEnabled(window.document.getElementById("root").classList.contains("dark"));
  }, [darkModeEnabled]);

  return darkModeEnabled;
};