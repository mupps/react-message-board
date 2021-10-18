import React from 'react'
import s from 'styled-components'

const StyledH1 = s.h1`
  text-align: center;
  padding-top:20px;
  padding-bottom:10px;
  font-family: "Lucida Console", "Courier New", monospace;
  color: blue;
`

const Title = () => (<StyledH1> CIS 197 HW 4 </StyledH1>)

export default Title
