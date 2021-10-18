import React from 'react'
import s from 'styled-components'

const StyledTitle = s.h1`
  text-align: center;
  padding-top:20px;
  padding-bottom:10px;
  font-family: "Lucida Console", "Courier New", monospace;
  color: blue;
`

const Title = () => (<StyledTitle> React Comment App (CIS 197 HW 4) </StyledTitle>)

export default Title
