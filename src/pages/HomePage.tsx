import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>

      {/*Temporary, we put the login form here*/}
      <Link to={"/menu-selection"}>Menu Selection</Link>
      <br />
      <Link to={"/menu/english-1"}>Menu English 1</Link>
      <br />
      <Link to={"/menu/english-2"}>Menu English 2</Link>
      <br />
      <Link to={"/menu/spanish-1"}>Menu Spanish 1</Link>
      <br />
      <Link to={"/menu/spanish-2"}>Menu Spanish 2</Link>
    </>
  );
}

export default HomePage;
