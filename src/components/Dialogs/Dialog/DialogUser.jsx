import React from "react";
import {NavLink} from "react-router-dom";
import style from "../Dialogs.module.css";

const DialogUser = (props) => { 
    return ( 
        <div className={style.users__user}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}
            </NavLink>
        </div>
    )
};



export default DialogUser