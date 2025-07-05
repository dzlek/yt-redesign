import React, { createContext, useState } from 'react'

interface ContextProps {
  lightTheme: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ContextProps>({
  lightTheme: true,
  toggleTheme: () => {},
})

interface Props {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(
    () =>
      localStorage.getItem('lightTheme') === 'true' ||
      (localStorage.getItem('lightTheme') === null &&
        window.matchMedia('(prefers-color-scheme: light)').matches)
  )

  const toggleThemeHandler = () => {
    setLightTheme((prev) => {
      const next = !prev
      if (next) {
        localStorage.setItem('lightTheme', 'true')
      } else {
        localStorage.removeItem('lightTheme')
      }
      return next
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        lightTheme: isLightTheme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
