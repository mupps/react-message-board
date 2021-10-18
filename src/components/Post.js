import React, { useState } from 'react'
import s from 'styled-components'
import PostForm from './PostForm'
import Counter from './Counter'

const Wrapper = s.div`
  border-left: solid blue;
  padding-left: 2%;
  user-select: none;
`

const ReplyButton = s.span`
  display: flex;
  align-items: center;
  opacity: 0.5;
  font-size: 80%;
  cursor: pointer;
  margin-top: 0.4rem;
  user-select: none;
  color: blue;

  svg {
    margin-right: 4px;
    opacity: 0.8;
    transform: scale(0.8);
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`

const Reply = s.div`
  padding-left: 0.8rem;
  margin-top: 0.4rem;
  border-left: 2px solid BLACK_ALPHA(0.1);
`

const Post = ({ info, d }) => {
  const [isReplyActive, setIsReplyActive] = useState(false)
  const [replies, setReplies] = useState([])

  const data = (
    <>
      <Counter />
      <Wrapper>
        <b>
          <p style={{ color: 'blue' }}>
            {info.name}
          </p>
        </b>
        <p style={{ color: 'black' }}>
          {info.text}
        </p>
      </Wrapper>
      {d < 3 && (
        <>
            {replies.map(r => (
              <Post key={r.id} info={r} d={d + 1} />
            ))}
          <ReplyButton onClick={() => setIsReplyActive(!isReplyActive)}>
            Reply
          </ReplyButton>
          {isReplyActive && (
            <div>
              <PostForm
                startText={`@${info.name} `}
                onSubmit={reply => {
                  setIsReplyActive(false)
                  setReplies([...replies, reply])
                }}
              />
            </div>
          )}
        </>
      )}
    </>
  )

  if (d === 1) {
    return (
      <>
        <>
          {data}
        </>
      </>
    )
  }
  return (<Reply>{data}</Reply>)
}

export default Post
