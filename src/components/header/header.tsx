import { MessengerIcon } from '@/components/(icons)/messenger-icon'
import { PopupButton } from '../(buttons)/features/popup-button'

export const Header = () => {
  return (
    <header className="pt-9 pb-7.5 flex justify-between items-center">
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>

      <div className="flex gap-5">
        <p className="text-font-secondary text-sm">
          Задайте вопрос <br /> напрямую в:
        </p>
        <div className="flex gap-2.5">
          <MessengerIcon variant="telegram" href="/" />
          <MessengerIcon variant="whatsapp" href="/" />
        </div>
      </div>

      <div className="flex gap-12 items-center">
        <div className="flex flex-col gap-1">
          <a href="tel: +375293885512" className="text-xl font-bold flex gap-1">
            +375-29-388-55-12 <img src="/arrow.svg" alt="arrow icon" />
          </a>
          <p className="smallest text-font-secondary">
            Пн-Пт: с 09-00 до 18-00
          </p>
        </div>
        <PopupButton button="header" variant="basic">
          Заказать звонок
        </PopupButton>
      </div>
    </header>
  )
}