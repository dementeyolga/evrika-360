'use client'

import clsx from 'clsx'
import { MouseEventHandler, ReactElement, RefObject, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({
  reference,
  onClick,
  children,
}: {
  reference: RefObject<HTMLDivElement>
  onClick: MouseEventHandler<HTMLDivElement>
  children: ReactElement | ReactElement[]
}) => {
  const modalRoot = document.getElementById('modal-root')

  useEffect(() => {
    const modal = reference.current

    if (modal) {
      modal.addEventListener(
        'animationend',
        () => {
          modal.classList.remove('animate-fade-in')
        },
        { once: true },
      )
    }
  }, [reference])

  if (!modalRoot) return null

  return createPortal(
    <div
      ref={reference}
      className={clsx(
        'fixed top-0 bottom-0 overflow-y-auto w-screen flex justify-center items-center animate-fade-in z-50 bg-background-transparent',
      )}
      onClick={onClick}
    >
      {children}
    </div>,
    modalRoot,
  )
}
