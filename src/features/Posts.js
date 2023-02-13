import { createSlice } from "@reduxjs/toolkit";

import { postData } from "./postData";

export const postsSlice = createSlice({
  name : "posts",
  initialState: {value: postData},
  reducers: {
    addPost: (state, action) => {
      console.log("State....",state);
      console.log("Action...",action);
      state.value.push(action.payload);
    },

    updatePost: (state, action) => {
      state.value.map((post)=>{
        if (post.id==action.payload.id) {
          post.title = action.payload.title
        }
      })
    },

    // {
    //   id: '1234',
    //   title:'post1',
    //   tag:'Cricket',
    //   content:'post 1 content'
    // },
    // {
    //   id: '5678',
    //   title:'post2',
    //   tag:'Politics',
    //   content:'Post 2 content'
    // },
    deletePost: (state,action) => {
       state.value = state.value.filter((post)=>{
        return (post.id!=action.payload.id);
      })
    }
  }
})

export const {addPost,updatePost,deletePost} = postsSlice.actions;
export default postsSlice.reducer;

