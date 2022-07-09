import React, { createContext, useContext, useState } from "react"

export const AppearanceContext = createContext({
  darkModeEnabled: true,
  setdarkModeEnabled: () => {},
})

export const useAppearance = () => useContext(AppearanceContext)

export const AppearanceProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true)

  return (
    <AppearanceContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children({ darkModeEnabled })}
    </AppearanceContext.Provider>
  )
}
