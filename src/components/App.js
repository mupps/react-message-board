import React, { useState } from 'react'
import s from 'styled-components'
import Post from './Post'
import PostForm from './PostForm'

const MainWindow = s.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 1000px;
  display: block;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  -moz-box-shadow: 0 0 10px #999;
  -webkit-box-shadow: 0 0 10px #999;
  box-shadow: 0 0 10px #999;
  font-family: "Lucida Console", "Courier New", monospace;
`

const PostLists = s.div`
  margin-top:20px;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  display: block;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  -moz-box-shadow: 0 0 10px #999;
  -webkit-box-shadow: 0 0 10px #999;
  box-shadow: 0 0 10px #999;
  font-family: "Lucida Console", "Courier New", monospace;
`

const NewPostTitle = s.h3`
  text-align: left;
  padding-bottom:10px;
  font-family: "Lucida Console", "Courier New", monospace;
  color: black;
`

const StyledTitle = s.h1`
  text-align: center;
  padding-top:20px;
  padding-bottom:10px;
  font-family: "Lucida Console", "Courier New", monospace;
  color: blue;
`

const App = () => {
  const [post, setPost] = useState([])
  const postBox = post.map((props, _) => <Post key={props.id} info={props} d={1} />)
  return (
    <>
      <StyledTitle> React Comment App (CIS 197 HW 4) </StyledTitle>
      <MainWindow>
        <NewPostTitle>Add a New post!</NewPostTitle>
        <PostForm onSubmit={r => setPost([...post, r])} replyUser="" />
      </MainWindow>
      <PostLists>
        {postBox}
      </PostLists>
    </>
  )
}
export default App
