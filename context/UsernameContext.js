import { createContext, useContext, useState } from "react";
import React from "react";

const UsernameContext = createContext({
  username: "",
  changeUsername: () => {},
});

export const useUsername = () => {
  const { username, changeUsername } = useContext(UsernameContext);
  return { username, changeUsername };
};

export const UsernameContextProvider = ({ children }) => {
  const [username, changeUsername] = useState("default_username");
  const value = { username, changeUsername };
  return (
    <UsernameContext.Provider value={value}>
      {children}
    </UsernameContext.Provider>
  );
};
