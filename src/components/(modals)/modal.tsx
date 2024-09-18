'use client'

import clsx from 'clsx'
import { MouseEventHandler, ReactElement, RefObject, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({
  reference,
  bg = 'standard',
  onClick,
  children,
}: {
  reference: RefObject<HTMLDivElement>
  bg?: 'standard' | 'darker'
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

  const background =
    bg === 'standard'
      ? 'bg-background-transparent'
      : 'bg-background-transparent-darker'

  return createPortal(
    <div
      ref={reference}
      className={clsx(
        'fixed w-screen min-h-screen h-max flex justify-center items-center overflow-y-auto animate-fade-in z-50',
        background,
      )}
      onClick={onClick}
    >
      {children}
    </div>,
    modalRoot,
  )
}
