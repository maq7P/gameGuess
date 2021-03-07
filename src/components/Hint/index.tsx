import React from 'react'
import clsx from 'clsx';

import './style.scss'
import HintModal from './HintModal';

/* Не должен происходить ререндер при клике  */
export interface HintType {
    style?: {
        [name: string]: string
    }
    className?: string
    left?: boolean
    right?: boolean
    top?: boolean
    bottom?: boolean 
    primary?: boolean
    outline?: boolean
    modalLeft?: boolean
    modalRight?: boolean
    modalWidth?: string 
}


const Hint: React.FC<HintType> = ({
    className, style, primary, outline,
    left, right, top, bottom,
    modalLeft, modalRight, modalWidth,
    children
}): React.ReactElement => {
    console.log('RENDER GLOBAL');
    const [isOpen, setIsOpen] = React.useState(false)

    const handleHintClick = React.useCallback((): void => {
        setIsOpen(!isOpen)
    }, [])
    
    return (
        <div 
            className={clsx({
                className,
                'hint': true,
                'hint--primary': primary,
                'hint--outline': outline,
                'hint--default': !primary && !outline
            })}
            style={
                {
                    ...style,
                    ...{
                        top: top? '0': '',
                        right: right? '0': '',
                        left: left? '0': '',
                        bottom: bottom? '0': '',
                    }
                }
            }
            onClick={handleHintClick}
        >
            <span>?</span>
            
            <HintModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalLeft={modalLeft}
                modalRight={modalRight}
                modalWidth={modalWidth}
                content={children}
            />
        </div>
    )
}

export default Hint
