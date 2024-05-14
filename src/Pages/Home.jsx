import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../UserContext";

const Home = () => {
  const [user, setUser] = useContext(Context);
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={user.pwd}
          onChange={(e) => setUser({ ...user, pwd: e.target.value })}
        />
        <br />
        <Link to={"/Welcome"}>
          <button type="submit">Login</button>
        </Link>
      </form>
    </>
  );
};

export default Home;
