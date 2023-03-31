import "./index.css";
import moduleStyles from "./Estilos.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg";
import faceb from "../../img/Face Icon-01.png";
import instagram from "../../img/inta-icon.png";
import youtube from "../../img/Tube Icon.png"

function Footer() {
  return (
    <footer>
      <div className={moduleStyles.foter}>
        <div className={moduleStyles.confooter}>
          <Link to='/'><h1><img src={logo} alt="logo yachay"/></h1></Link>
          <h2  className={moduleStyles.text}>&copy;Derechos reservados</h2>
          <a href="https://www.facebook.com/profile.php?id=100089772007208" className="redes"><img src={faceb} alt="facebbok" /></a>
          <a href="https://instagram.com/bitatecomics?igshid=YmMyMTA2M2Y=" className="redes"><img src={instagram} alt="instagram" /></a>
          <a href="https://www.youtube.com/@bitatecomics" className="redes"><img src={youtube} alt="youtube" /></a>
        </div>
      </div>
    </footer>

  );
}
export default Footer;