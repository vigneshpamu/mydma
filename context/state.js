'use client'
import React, { createContext, useContext, useState } from 'react'

// Create a context for the language state
const LangContext = createContext()

// Create a provider component for the language state
export function LangProvider({ children }) {
  const [lang, setLang] = useState('en') // Default language is 'en'

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

// Create a custom hook for using the language state
export function useLang() {
  return useContext(LangContext)
}
