import React from 'react'
import { MessageClass } from '../../styles/styles'
import "./style.css";

const MessageWrapper = ({children}:{ children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <MessageClass>{children}</MessageClass>
  )
}

export default MessageWrapper