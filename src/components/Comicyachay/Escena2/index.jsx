import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import ReactHowler from "react-howler";
import sound2 from "../../asset/Sound/audioescena2.mp3";
import Animation from '../../asset/escena2.json';
import moduleStyle from "../Estilos.module.css";
import "./index.css";

const Segundaescena = (Props) =>{
  const LottieRef = useRef();
  const [isActive, setIsActive] = useState(false)
  const [ ViewPass, setViewPass] = useState(false)

  const changeView = () =>{
    if (!isActive) {
      setViewPass(true)
    }
  }

useEffect( () => {
  LottieRef.current.setSpeed(1)
  LottieRef.current.goToAndStop(1,true)
  if (ViewPass) {
    LottieRef.current.playSegments(0,3)
  }
},[ViewPass])

/* animacion1 */

return(
  <div>
    <div>
    <div>
        <h2>Click en la pantalla para empezar animación</h2>
      </div>
    <Lottie className={moduleStyle.comic} lottieRef={LottieRef} animationData={Animation} loop={false} onClick={changeView}/>
    <ReactHowler src={sound2} playing={ViewPass}/>
    </div>
    <div className="boton_text">
    <Link to='/comic'>
      <button className="buttonm">Anterior</button>
      </Link>
      <Link to='/escena3'>
      <button className="buttonm">Siguiente</button>
      </Link>
    </div>
  </div>
  
  
)

};  
export default Segundaescena;