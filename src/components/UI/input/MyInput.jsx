import classes from './MyInput.module.css'
import React from 'react'

export const MyInput = (props) => {
  return (
    <input className={classes.myInput}  {...props}/>
  )
}