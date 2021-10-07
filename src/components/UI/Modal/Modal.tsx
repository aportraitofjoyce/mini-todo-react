import React from 'react'
import s from './Modal.module.css'

type ModalProps = {
    visible: boolean
    setVisible: (visible: boolean) => void
}

export const Modal: React.FC<ModalProps> = props => {
    const {children, visible, setVisible} = props

    const modalStyles = `${s.container} ${visible && s.active}`

    return (
        <div className={modalStyles} onClick={() => setVisible(false)}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                {children}
                <div onClick={() => setVisible(false)} className={s.close}>X</div>
            </div>
        </div>
    )
}