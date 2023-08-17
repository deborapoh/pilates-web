import { createContext } from 'react';

export type ErrorType = string

interface ContextProps {
  error: ErrorType | null
  saveError: (error: ErrorType) => void
};

const AppContext = createContext<ContextProps>({
  error: null,
  saveError: () => null,
})

export default AppContext;
