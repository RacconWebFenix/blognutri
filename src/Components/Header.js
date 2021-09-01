import "./header.css";
import LogoImg from "../img/logo-blue.gif";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      <nav className="nav-extended blue accent-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            <img src={LogoImg} alt="Logo Blue" width="200px" />
          </Link>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <Link className="logo" to="/">
                Blogs
              </Link>
            </li>
            <li className="tab">
              <Link className="favoritos" to="/favoritos">
                Favoritos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
