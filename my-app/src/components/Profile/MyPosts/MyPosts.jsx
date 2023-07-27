import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    // let posts =[
    //     {id:1, message: 'Hey', likesCount:13},
    //     {id:2, message: 'Bro', likesCount:15}
    // ]

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.posstBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                All posts:
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts