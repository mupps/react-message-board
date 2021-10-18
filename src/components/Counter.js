import React, { useState } from 'react'
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons'
import s from 'styled-components'

const Wrapper = s.div`
  display: flex;
  flex-direction: column;
  width: 12px;
  align-items: center;
  float: right;
`

const CounterText = s.p`
  display: flex;
  user-select: none;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  align-content: center;
`

const Counter = () => {
  const [numLikes, changeNumLikes] = useState(0)
  return (
    <>
      <Wrapper>
        <ArrowUp
          color="royalblue"
          size={15}
          onClick={e => changeNumLikes(numLikes + 1)}
        />
        <CounterText>{numLikes}</CounterText>
        <ArrowDown
          color="royalblue"
          size={15}
          onClick={e => changeNumLikes(numLikes - 1)}
        />
      </Wrapper>
    </>
  )
}

export default Counter
