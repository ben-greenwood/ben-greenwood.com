import React, { createContext, useContext, useState, useEffect } from "react"

export const AppearanceContext = createContext({
  darkModeEnabled: true,
  setdarkModeEnabled: () => {},
})

export const useAppearance = () => useContext(AppearanceContext)

export const AppearanceProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true)

  useEffect(() => {
    document.body.classList.toggle("bg-black", darkModeEnabled)
    document.body.classList.toggle("bg-white", !darkModeEnabled)
  }, [darkModeEnabled])

  return (
    <AppearanceContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children({ darkModeEnabled })}
    </AppearanceContext.Provider>
  )
}
