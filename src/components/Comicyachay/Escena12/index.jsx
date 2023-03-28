import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import Animation from '../../asset/escena 12.json';
import ReactHowler from "react-howler";
import sound12 from "../../asset/Sound/Audioescena12.mp3";
import "./index.css"

const Escenadoce = (Props) =>{
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
    <Lottie className="anima" lottieRef={LottieRef} animationData={Animation} loop={false} onClick={changeView}/>
    <ReactHowler src={sound12} playing={ViewPass}/>
    </div>
    <div className="boton_text">
    <Link to='/escena11'>
      <button className="buttonm">Anterior</button>
      </Link>
      <Link to='/'>
      <button className="buttonm">FIN</button>
      </Link>
    </div>
  </div>
  
  
)

};  
export default Escenadoce;