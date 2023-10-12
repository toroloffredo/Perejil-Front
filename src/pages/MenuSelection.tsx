import { Link } from "react-router-dom"

function MenuSelection() {

  return (
    <>
      <h1>MenuSelection</h1>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/menu/english-1"}>Menu English Front</Link>
      <br />
      <Link to={"/menu/english-2"}>Menu English Back</Link>
      <br />
      <Link to={"/menu/spanish-1"}>Menu Spanish Front</Link>
      <br />
      <Link to={"/menu/spanish-2"}>Menu Spanish Back</Link>
    </>
  )


}

export default MenuSelection