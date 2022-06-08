import React from 'react'
import classNames from 'classnames'

export const Button = ({onClick, outline, children, className}) => {
  return (
    <button onClick={onClick} className={classNames('button', className , {
    'button--outline': outline,
    })}>
    {children}
    </button>
  )
}
