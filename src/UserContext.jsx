import { createContext, useState } from "react";

export const Context = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pwd: "",
  });
  return (
    <Context.Provider value={(user, setUser)}>{children}</Context.Provider>
  );
};
export default UserContext;
