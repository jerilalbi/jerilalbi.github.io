import { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0);
  return (
    <ScrollContext.Provider value={{ scrollPos, setScrollPos }}>
      {children}
    </ScrollContext.Provider>
  );
};
