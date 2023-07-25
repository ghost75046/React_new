import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialog/" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Delya'},
        {id: 2, name: 'Myska'},
        {id: 3, name: 'Kucha'}
    ]

    let messages = [
        {id: 1, message: 'Meow'},
        {id: 2, message: 'Shhhh'},
        {id: 3, message: 'Bark'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

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