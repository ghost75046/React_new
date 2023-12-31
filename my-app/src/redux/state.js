import {render} from "@testing-library/react";
import {renderEntireTree} from "../render";

let state = {
    profilePage:{
        posts:[
            {id:1, message: 'Hey', likesCount:13},
            {id:2, message: 'Bro', likesCount:15},
        ]
    },
    dialogsPage:{
        dialogsData:[
            {id: 1, name: 'Delya'},
            {id: 2, name: 'Myska'},
            {id: 3, name: 'Kucha'}
        ],
        messages:[
            {id: 1, message: 'Meow'},
            {id: 2, message: 'Shhhh'},
            {id: 3, message: 'Bark'}
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost ={
        id:3,
        message: postMessage,
        likesCount:3

    }
    state.profilePage.posts.push(newPost)
     renderEntireTree(state)
}

export let updateNewPostText = (newText) => {


    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export default state
