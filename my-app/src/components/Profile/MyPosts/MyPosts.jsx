import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    // let posts =[
    //     {id:1, message: 'Hey', likesCount:13},
    //     {id:2, message: 'Bro', likesCount:15}
    // ]

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        // props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    let newPostElement = React.createRef()

    return (
        <div className={classes.posstBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
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