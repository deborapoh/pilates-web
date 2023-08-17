import { ReactNode, useState } from "react";
import AppContext, { ErrorType } from ".";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [error, saveError] = useState<ErrorType | null>(null);

  const value = {
    error,
    saveError,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
