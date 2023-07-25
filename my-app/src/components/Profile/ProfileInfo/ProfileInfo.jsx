import React from "react"
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://sportishka.com/uploads/posts/2022-03/1647183945_12-sportishka-com-p-shtat-gavaii-turizm-krasivo-foto-12.jpg"
                    alt="#"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}


export default ProfileInfo