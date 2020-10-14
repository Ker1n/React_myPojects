import React from "react";
import style from "./Dialogs.module.css";
import DialogUser from "./Dialog/DialogUser";
import DialogChat from "./Dialog/DialogChat";
import {updateNewChatMessageActionCreator} from "../redux/state";

const Dialogs = (props) => { 
  
    // console.log(props);
    const dialogsElements = props.DialogData.map( (dialog) => {
        return  <DialogUser name = {dialog.name} id = {dialog.id} />
    });
       
    const messagesElements = props.messagesData.map ( m => { 
        return  <DialogChat text= {m.message} />
    });
    

    const newMessage = React.createRef()

    const sendMessage = () => { 
        let text = newMessage.current.value;
        props.dispatch(updateNewChatMessageActionCreator(text));
       
        newMessage.current.value = "";
    };

    return (
        <div className = {style.dialogsBar}>
            <div className = {style.dialogs__body} >
               <div className={style.dialogs__users}> 
                   {dialogsElements}
               </div>
               <div className={style.dialogs__chat}>
                    <div className={style.chat__body}>
                        {messagesElements}
                        <div className="dialogs__textArea">
                            <textarea name="chat" id="chat" cols="50" rows="3" ref={newMessage}   />
                            <button onClick = { sendMessage }> Send message </button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    ) 
};

export default Dialogs;