import React, { createContext, useContext, useEffect, useState } from "react"

type AppearanceContextType = {
  darkModeEnabled: boolean
  setDarkModeEnabled: (enabled: boolean) => void
}

export const AppearanceContext = createContext<AppearanceContextType>({
  darkModeEnabled: true,
  setDarkModeEnabled: () => {},
})

export const useAppearance = () => useContext(AppearanceContext)

type Props = {
  children: ({
    darkModeEnabled,
  }: {
    darkModeEnabled: boolean
  }) => React.ReactNode
}

export const AppearanceProvider = ({ children }: Props) => {
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
