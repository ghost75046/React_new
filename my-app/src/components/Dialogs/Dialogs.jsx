import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>


    )


}


export default Dialogs