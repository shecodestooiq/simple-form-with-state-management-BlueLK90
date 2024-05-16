import { useContext } from "react";
import { UserContext } from "../UserContext";
const Welcome = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome " {user.username} "</h1>
      <h3>Your Email is: {user.email}</h3>
      <h3>Your Password is: {user.pwd}</h3>
    </div>
  );
};

export default Welcome;
