import { createContext, useState } from "react";

export const NavContext = createContext({
  toggleNav: false,
  handleNavToggle: () => {},
});

export const NavProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNavToggle = (e) => {
    setToggleNav((prev) => !prev);
  };
  const value = { toggleNav, handleNavToggle };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
