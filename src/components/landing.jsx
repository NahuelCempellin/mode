import React,{useState} from "react";
import { LandingCont, Switcher } from "../styles/landing";


export default function Landing(){


    const [dark,setDark]= useState(false)

    const selectMode=(e)=>{
        if(e.target.checked === true){
            setDark(true)

        }if(e.target.checked === false){
            setDark(false)
        }
    }



    const backgroundDark={
        background: '#252b43',
        color: 'white',
    }

    const backgroundLight={
        background: 'white',
        color: 'black',
    }

    return(
        <LandingCont theme={dark === true ? backgroundLight : backgroundDark}>
            <div>
            <h1>{dark === false ? 'Light Mode' : 'Dark Mode'}</h1>
            </div>



            <Switcher>
            <label className="switch">
            <input type="checkbox" id="Frontend" name="devType" value={'Frontend'} onClick={(e)=>selectMode(e)}/>
            <span className="slider round"></span>
            </label>
            </Switcher>



        </LandingCont>
    )
}



