import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from './ThemeContext';
import { SurveyContext } from './SurveyContext';

interface ProviderProps {
  children: ReactNode;
}

type SurveyAnswers = Record<string, string | number | boolean>;

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<string>('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyProvider = ({ children }: ProviderProps) => {
  const [answers, setAnswers] = useState<SurveyAnswers>({})
  const saveAnswers = (newAnswers: SurveyAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
