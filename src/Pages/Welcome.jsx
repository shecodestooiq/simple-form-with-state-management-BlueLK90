import { useContext } from "react";
import { Context } from "../UserContext";
const Welcome = () => {
  const user = useContext(Context);
  return (
    <>
      <h1>Welcome {user.name}</h1>
      <h3>Your Email is: {user.email}</h3>
      <h3>Your Password is: {user.pwd}</h3>
    </>
  );
};

export default Welcome;
