'use client'

import { PopupButton } from '../(buttons)/features/popup-button'
import { ContactPhone } from './contact-phone'
import { ContactMessengers } from './contact-messengers'
import { useRef, useState, MouseEvent } from 'react'
import { BurgerMenu } from '../burger-menu/burger-menu'

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const burgerRef = useRef<HTMLDivElement>(null)

  const handleOpenBurger = () => {
    setIsBurgerOpen(true)
  }

  const handleCloseBurger = () => {
    const burger = burgerRef.current

    if (burger) {
      burger.addEventListener(
        'animationend',
        () => {
          setIsBurgerOpen(false)
        },
        { once: true },
      )

      burger.classList.add('animate-fade-out')
    }
  }

  const handleBurgerClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseBurger()
    }
  }

  return (
    <header className="pt-5 pb-[29px] md:pt-10 lg:pb-7.5 flex justify-between gap-x-3 items-center">
      <a href="/" className="w-[120px] lg:w-fit">
        <img src="/logo.svg" alt="logo" />
      </a>

      <div className="hidden lg:block">
        <ContactMessengers />
      </div>

      <div className="hidden lg:flex gap-5 xl:gap-12 items-center">
        <ContactPhone />
        <PopupButton button="header" variant="basic">
          Заказать звонок
        </PopupButton>
      </div>

      <button
        onClick={handleOpenBurger}
        className="w-9 h-9 flex justify-center items-center lg:hidden"
      >
        <img src="/burger-icon.svg" alt="" />
      </button>

      {isBurgerOpen && (
        <BurgerMenu
          reference={burgerRef}
          onClick={handleBurgerClick}
          handleCloseburger={handleCloseBurger}
        />
      )}
    </header>
  )
}
