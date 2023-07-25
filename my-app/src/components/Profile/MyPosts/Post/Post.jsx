import React from "react";
import classes from './Post.module.css'
const Post = (props) => {

    return (
            <div className={classes.item}>
                <img src="https://storage.needpix.com/rsynced_images/cat-359915_1280.jpg" alt=""/>
                {props.message}
                <div>
                    <span>{`${props.likesCount} `}like</span>
                </div>
            </div>
    )
}


export default Post