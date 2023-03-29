import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg";
import faceb from "../../img/Face Icon-01.png";
import twite from "../../img/inta-icon.png";
import youtube from "../../img/Tube Icon.png"

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-4 p-1">
            <Link to='/'>
            <img className="img-fluid logo" src={logo} alt="Yachay" />
            </Link>
          </div>
          <div className="col-4 p-5 text-center">
            <font color="#ffc87a"><h4>&copy;DERECHOS RESERVADOS</h4></font>
          </div>
          <div className="col-4 d-flex p-3 redes">
            <div className="d-flex">
              <a href="https://www.facebook.com/people/BitateComics/100089772007208/" className="p-2">
                <img src={faceb} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/bitatecomics/?igshid=ZDdkNTZiNTM%3D" className="p-2">
                <img src={twite} alt="Twitter" />
              </a>
              <a href="https://www.youtube.com/@bitatecomics" className="p-2">
                <img src={youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}