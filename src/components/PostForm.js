import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import s from 'styled-components'
import { Button } from 'react-bootstrap'

const styles = `
  margin-bottom: 1rem !important;
  border-radius: 3px !important;
  background: #ffffff;
  background-clip: padding-box;
  font-size: 1rem !important;
  padding: 0.5rem 0.75rem !important;
  display: block;
  width: 100%;
  line-height: 1.5;
  color: #000000;
  transition: border-color 0.2s;
  box-sizing: border-box;
  font-family: "Lucida Console", "Courier New", monospace;
`
const Input = s.input`${styles}`

const Textarea = s.textarea`${styles}`

const PostForm = ({ startText, onSubmit }) => {
  const [name, setName] = useState('')
  const [text, setText] = useState(startText || '')
  const [disabled, setDisabled] = useState(true)

  React.useEffect(() => {
    const isMissingField = !name || !text
    if (isMissingField && !disabled) {
      setDisabled(true)
    }

    if (!isMissingField && disabled) {
      setDisabled(false)
    }
  }, [name, text])

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()

        if (disabled) {
          return
        }

        onSubmit({ name, text, id: uuid() })
        setName('')
        setText('')
      }}
      >
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name..."
        />
        <Textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a new post..."
        />
        <div style={{ textAlign: 'right' }}>
          <Button type="submit" value="Submit" disabled={disabled}>
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default PostForm
