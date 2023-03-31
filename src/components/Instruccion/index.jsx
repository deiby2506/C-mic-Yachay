import instruccion from "../../img/instrucciones.jpg";
import { Link } from "react-router-dom"
import moduleStyles from "./Style.module.css";

function Instruccion() {
    return (
        <div>
            <div className={moduleStyles.instruccion}>;
                <div>
                    <img src={instruccion} alt="instrucciones"/>
                </div>
                <div>
                    <Link to='/comic'>
                        <button className="buttonm">Empezar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default Instruccion;
