import React, { useState } from 'react'
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons'
import s from 'styled-components'

const Wrapper = s.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  align-items: center;
  float: right;
`

const CounterText = s.p`
  display: flex;
  user-select: none;
  font-size: 80%;
  font-weight: bold;
`

const Counter = () => {
  const [numLikes, changeNumLikes] = useState(0)
  return (
    <>
      <Wrapper>
        <ArrowUp onClick={e => changeNumLikes(numLikes + 1)} />
        <CounterText>{numLikes}</CounterText>
        <ArrowDown onClick={e => changeNumLikes(numLikes - 1)} />
      </Wrapper>
    </>
  )
}

export default Counter