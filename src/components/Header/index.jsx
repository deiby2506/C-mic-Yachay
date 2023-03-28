import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg";
/* import lupabuscador from "../../img/lupa 3.png"; */

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>
          <img id="img" src={logo} alt="logo yachay" />
        </h1>
      </Link>
      <nav>
        <Link to='/'>
          <button>Inicio</button>
        </Link>
        <Link to='/quienes'>
          <button>Quiénes Somos</button>
        </Link>
        <Link to='/instruccion'>
          <button>Cómic</button>
        </Link>
        {/* <Link to='/contacto'>
          <button>Contacto</button>
        </Link> */}
        {/* <a href='/contacto#'>
          <input className="p-2" type="search" placeholder="Buscar" /> 
          <img src={lupabuscador} alt="" />
        </a> */}
      </nav>
    </header>

  );
}

