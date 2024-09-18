'use client'

import { MouseEventHandler, RefObject, useEffect } from 'react'
import { PopupButton } from '../(buttons)/features/popup-button'
import { ContactPhone } from '../header/contact-phone'
import { ContactMessengers } from '../header/contact-messengers'
import { createPortal } from 'react-dom'

export const BurgerMenu = ({
  reference,
  onClick,
  handleCloseburger,
}: {
  reference: RefObject<HTMLDivElement>
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseburger: () => void
}) => {
  const burgerRoot = document.getElementById('burger-root')

  useEffect(() => {
    const burger = reference.current

    if (burger) {
      burger.addEventListener(
        'animationend',
        () => {
          burger.classList.remove('animate-fade-in')
        },
        { once: true },
      )
    }
  }, [reference])

  if (!burgerRoot) return null

  return createPortal(
    <div
      ref={reference}
      onClick={onClick}
      className="fixed h-screen w-screen flex justify-end bg-background-transparent z-20 animate-fade-in"
    >
      <div className="w-[260px] h-full py-[30px] px-5 bg-foreground">
        <button
          onClick={handleCloseburger}
          className="w-9 h-9 mb-6  ml-auto flex justify-center items-center"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="flex flex-col gap-y-[40px]">
          <ContactPhone />
          <PopupButton button="header">Заказать звонок</PopupButton>
          <ContactMessengers />
        </div>
      </div>
    </div>,
    burgerRoot,
  )
}
