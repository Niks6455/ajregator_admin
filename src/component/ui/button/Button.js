import React from 'react'
import styles from './button.module.scss'

const Button = ({text, bg_color, text_color, h, w,size,image }) => {
	return (	
                <button className={styles.buttons}  style={{ background: `${bg_color}`, fontSize: `${size +'px'}`, color: `${text_color}`, width: `${w +'px'}`, height: `${h +'px'}`} }>
                <img src={image} alt=""></img>
                    {text}
                </button>
	)
}

export default Button