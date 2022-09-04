import { createContext, useState } from "react";

export const DetailsContext = createContext({
  toggleDetails: false,
  handleDetailsToggle: () => {},
});

export const DetailsProvider = ({ children }) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  const handleDetailsToggle = () => {
    setToggleDetails((prev) => !prev);
  };
  const value = { toggleDetails, handleDetailsToggle };
  return (
    <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
  );
};
