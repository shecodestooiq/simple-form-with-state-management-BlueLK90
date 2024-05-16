import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Home = () => {
  const { onChange } = useContext(UserContext);
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => onChange(e, "username")}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => onChange(e, "email")}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => onChange(e, "pwd")}
        />
        <br />
        <Link to={"/welcome"}>
          <button type="submit">Log in</button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
