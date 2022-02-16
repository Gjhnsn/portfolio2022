import React, { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string>('dark');

  const setMode = (mode: string) => {
      window.localStorage.setItem('theme', mode)
      setTheme(mode)
  }

  const toggleTheme = () => {
      theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme ? setTheme(localTheme) : setMode('dark')
  }, [])

  return [theme, toggleTheme]
}
