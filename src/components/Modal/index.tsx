import { ReactNode, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: () => void
}

export function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(false)

  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          background: '#c72828',
          color: '#ffffff',
          borderRadius: '8px',
          padding: 0,
          maxWidth: '736px',
          width: '100%',
          position: 'relative',
          border: 'none',
          inset: 0
        },
        overlay: {
          backgroundColor: '#121214e6',

          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      {children}
    </ReactModal>
  )
}
