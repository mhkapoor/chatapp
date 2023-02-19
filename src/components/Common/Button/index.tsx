import React from 'react'
import { IButton } from '../../../types'

const Index = ({className,onClick,value}:IButton) => {
  return (
    <button className={className} onClick={onClick}>
        {value}
    </button>
  )
}

export default Index