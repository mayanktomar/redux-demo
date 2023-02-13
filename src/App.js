import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addPost, updatePost, deletePost } from './features/Posts';

function App() {
  const postsData = useSelector((state)=>state.posts.value);
  const dispatch = useDispatch();
  const [title,setTitle] = useState('');
  const [tag,setTag] = useState('');
  const [content,setContent] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');

  useEffect(() => {
    fetchPostData();
  }, [])
  

  const fetchPostData = () => {
    //Call your api here...
    //const response = await axios.....
    //Use addPost reducer function after you get the data from api...
  }



  return (
    <div className="App">

    <input type='text' placeholder='title' onChange={(event)=>{
      setTitle(event.target.value)
    }} />
     <input type='text' placeholder='tag' onChange={(event)=>{
      setTag(event.target.value)
    }} />
     <input type='text' placeholder='content' onChange={(event)=>{
      setContent(event.target.value)
    }} />
    <button onClick={()=>{
      dispatch(
        addPost({
          title: title,
          tag: tag,
          content: content
        })
      )
    }}>Add Post</button>

     {postsData.map((post)=>{
      return (
        <div>
          <h1>{post.title}</h1>
          <h4>{post.tag}</h4>
          <p>{post.content}</p>
          <input type='text' placeholder='updated title' onChange={(event)=>{
          setUpdatedTitle(event.target.value)
           }} />
           <button onClick={()=>{
      dispatch(
        updatePost({
         id: post.id,
         title: updatedTitle
        })
      )
    }}>Modify post</button>
      <button onClick={()=>{
      dispatch(
        deletePost({
         id: post.id
        })
      )
    }}>Delete post</button>
        </div>
      )
     })}
    </div>
  );
}

export default App;
