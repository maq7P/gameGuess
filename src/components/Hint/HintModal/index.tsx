import clsx from 'clsx'
import React, { ReactNode } from 'react'

import './style.scss'

import {HintType} from '../index'
import { motion } from 'framer-motion'

interface HintModalType extends HintType {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    content: ReactNode
}

const HintModal: React.FC<HintModalType> = ({
    modalLeft, modalRight, modalWidth, 
    isOpen, setIsOpen,
    content
}) => {
    console.log('RENDER HERE');
    const handleOutClick = (e: Event) => {
        const target = e.target as HTMLElement
        if(!target.closest('.hint__modal')){
            setIsOpen(false)
        }
    }

    React.useEffect(() => {
        if(isOpen) {
            //const modal = document.querySelector('.hint__modal')
            document.body.addEventListener('click', handleOutClick)
        }
        return () => {
            document.body.removeEventListener('click', handleOutClick)
        }
    })
    const fadeIn = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <>
            {isOpen && (
                <motion.div 
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className={clsx({
                        'hint__modal': true,
                        'hint__modal--left': modalLeft,
                        'hint__modal--right': modalRight,
                    })}
                    style={{
                        width: modalWidth,
                    }}
                >
                    <div className="hint__modal-inner">
                        {content}
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default HintModal
