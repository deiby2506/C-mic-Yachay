import "./contatc.css";

function Contacto() {
    return (
        <form action="#">
            <h2 className="text_contacto">Contacto</h2>
            <div>
                <div>
                    <label htmlFor="">Nombre</label>
                </div>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Correo</label>
            </div>
            <div>
                <input type="email" />
            </div>
            <div className="contenedor_enviar">
                <button className="botonenviar">Enviar</button>
            </div>
        </form>
    );
}
export default Contacto
