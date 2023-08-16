"use client";

import { createContext, useContext, useState } from "react";

interface CountProviderProps {
  children: React.ReactNode;
}

interface CountContextProps {
  count: number;
  setCount: (count: number) => void;
}

const CountContext = createContext<CountContextProps>({
  count: 0,
  setCount: () => {},
});

function CountProvider({ children }: CountProviderProps) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

const useCount = () => {
  const context = useContext(CountContext);

  return context;
};

export { CountProvider, useCount };
