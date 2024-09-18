import { MessengerIcon } from '../(icons)/messenger-icon'

export const ContactMessengers = () => {
  return (
    <div className="flex gap-5">
      <p className="text-font-secondary text-sm">
        Задайте вопрос <br /> напрямую в:
      </p>
      <div className="flex gap-2.5">
        <MessengerIcon variant="telegram" href="/" />
        <MessengerIcon variant="whatsapp" href="/" />
      </div>
    </div>
  )
}
