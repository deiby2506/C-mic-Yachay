import instruccion from "../../img/instrucciones.jpg";
import { Link } from "react-router-dom"
import "./index.css";

function Instruccion() {
    return (
        <div className="container_instru">
            <img src={instruccion} alt="" />
            <div>
            <Link to='/comic'>
                <button className="buttonm">Empezar</button>
            </Link>
            </div>
        </div>
    )
};
export default Instruccion;
