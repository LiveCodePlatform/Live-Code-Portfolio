"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { startTransition } from "react"

// Create a context for the router
const RouterContext = createContext(null)

// Router provider component
export function RouterProvider({ children }) {
  const [url, setUrl] = useState("/")

  const navigate = useCallback((newUrl) => {
    startTransition(() => {
      setUrl(newUrl)
    })
  }, [])

  return <RouterContext.Provider value={{ url, navigate }}>{children}</RouterContext.Provider>
}

// Hook to use the router
export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider")
  }
  return context
}
