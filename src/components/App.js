import React, { useState } from 'react'
import Post from './Post'
import Title from './Title'
import Submission from './Submission'
import s from 'styled-components'
// import './App.css'

const MainWindow = s.div `
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

const App = () => {
  const [post, setPost] = useState([])
  const postBox = post.map((props, index) => <Post key={props.id} info={props} d={1} />)
  return (
    <>
      <Title />
      <MainWindow>
        <b><h3>New Post</h3></b>
        <Submission onSubmit={r => setPost([...post, r])} replyUser="" />
      </MainWindow>
      <div>
        {postBox}
      </div>
    </>
  )
}
export default App