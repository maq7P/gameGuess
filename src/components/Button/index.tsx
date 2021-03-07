import React from 'react'
import clsx from 'clsx';

import './style.scss'

interface ButtonType {
    style?: {
        [name: string]: string
    }
    className?: string
    onClick?: any 
}
const Button: React.FC<ButtonType> = ({
    style,
    className,
    children,
    onClick
}): React.ReactElement => {
    return (
        <button 
            className={clsx(
                'btn',
                className
            )} 
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
