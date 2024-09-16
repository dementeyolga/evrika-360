import clsx from 'clsx'
import { MouseEventHandler, ReactElement } from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({
  bg = 'standard',
  onClick,
  children,
}: {
  bg: string
  onClick: MouseEventHandler<HTMLDivElement>
  children: ReactElement | ReactElement[]
}) => {
  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  const background =
    bg === 'standard'
      ? 'bg-background-transparent'
      : 'bg-background-transparent-darker'

  return createPortal(
    <div
      className={clsx(
        'fixed w-screen h-screen flex justify-center items-center z-10',
        background,
      )}
      onClick={onClick}
    >
      {children}
    </div>,
    modalRoot,
  )
}
