import React from "react";
import style from "../Dialogs.module.css";




const DialogChat = (props) => { 
    return ( 
        <div className={style.chat__message}>
            {props.text}
        </div>
    )
};
  


export default DialogChat