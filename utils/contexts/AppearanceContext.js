import React, { createContext, useContext, useState, useEffect } from "react"

export const AppearanceContext = createContext({
  darkModeEnabled: true,
  setdarkModeEnabled: () => {},
})

export const useAppearance = () => useContext(AppearanceContext)

export const AppearanceProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true)

  useEffect(() => {
    if (darkModeEnabled) {
      document.body.classList.add("bg-black")
      document.body.classList.remove("bg-white")
    } else {
      document.body.classList.add("bg-white")
      document.body.classList.remove("bg-black")
    }
  }, [darkModeEnabled])

  return (
    <AppearanceContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children({ darkModeEnabled })}
    </AppearanceContext.Provider>
  )
}
