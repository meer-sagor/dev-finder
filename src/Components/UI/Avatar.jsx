import React from 'react'
import classes from './Avatar.module.css';
const Avatar = (props) => <img src={props.src} alt={props.alt} className={classes.avatar} />

export default Avatar
