import React, { createContext, useContext, useState, useEffect } from 'react'

export type ThemeMode = 'dark' | 'light'
export type LangMode = 'bn' | 'en'

interface SiteContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
  lang: LangMode
  setLang: (lang: LangMode) => void
  toggleLang: () => void
  logoSrc: string
}

const SiteContext = createContext<SiteContextType | undefined>(undefined)

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dorpon_theme') as ThemeMode | null
      if (saved === 'dark' || saved === 'light') return saved
      // Default to dark luxury stage
      return 'dark'
    }
    return 'dark'
  })

  const [lang, setLangState] = useState<LangMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dorpon_lang') as LangMode | null
      if (saved === 'bn' || saved === 'en') return saved
      return 'bn'
    }
    return 'bn'
  })

  // Synchronize theme to document root & meta theme-color
  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    if (theme === 'light') {
      root.classList.remove('dark')
      root.classList.add('light')
    } else {
      root.classList.remove('light')
      root.classList.add('dark')
    }

    try {
      localStorage.setItem('dorpon_theme', theme)
    } catch {
      // Storage unavailable fallback
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#fcfbfa' : '#061817')
    }
  }, [theme])

  // Synchronize language attribute on html
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('lang', lang)
    try {
      localStorage.setItem('dorpon_lang', lang)
    } catch {
      // Storage unavailable fallback
    }
  }, [lang])

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const setLang = (newLang: LangMode) => {
    setLangState(newLang)
  }

  const toggleLang = () => {
    setLangState((prev) => (prev === 'bn' ? 'en' : 'bn'))
  }

  const logoSrc = theme === 'light' ? '/logo/logo-black.webp' : '/logo/logo-white.webp'

  return (
    <SiteContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
        logoSrc,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider')
  }
  return context
}
