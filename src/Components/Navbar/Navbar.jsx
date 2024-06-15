import logo from "../../Images/Logo/lgo.png"
import burger from "../../Images/Logo/Burger.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="list">
        <ul>
            <li>Homepage</li>
            <li>Menu</li>
            <li>Sale off</li>
            <li>News</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="AuthButtons">
        <button className="sign-in">Sign in</button>
        <button className="log-in">Log in</button>
      </div>
      <div className="humburger">
        <img src={burger} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
