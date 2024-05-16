import { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", email: "", pwd: "" });
  const onChange = (e, value) => {
    setUser({ ...user, [value]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <UserContext.Provider value={{ user, onChange }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
