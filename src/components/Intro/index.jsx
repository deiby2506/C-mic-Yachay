import "./intro.css"
import videooMuisca from "../../img/video presentacion.mp4"

export default function Intro() {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <article className="introt">
                            <h2>Introducción</h2>
                            <p>
                            Hola, este es nuestro sitio web en donde podrás ver nuestro cómic digital interactivo, que está basado en el mito de la creación según los Muiscas, con él queremos contarte de una forma dinámica los hechos que marcaron la historia de las culturas prehispánicas colombianas.
                            <br />
                            Aquí podrás ver la presentación de YACHAY.
                            </p>
                        </article>
                    </div>
                    <div className="col-6">
                    <article className="video1">
                          <video src={ videooMuisca } controls height="330px"></video>
                    </article>
                </div>
                </div>
            </div>
        </section>
           
        );
    }