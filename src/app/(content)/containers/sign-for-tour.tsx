import { PopupButton } from '@/components/(buttons)/features/popup-button'
import { ListItem } from '@/components/(text)/list-item'

export const SignForTour = () => {
  return (
    <div className="md:px-11 lg:pt-[75px] lg:pb-[96px] mx-auto w-full max-w-7xl flex flex-col md:items-center lg:flex-row lg:items-center gap-y-[32px] lg:gap-x-[43px] bg-foreground rounded-section-mobile lg:rounded-section">
      <div className="order-1 lg:order-0 mb-[38px] lg:mb-0 flex justify-center lg:max-w-[481px] lg:mt-4 scale-[1.04] lg:scale-100">
        <img src="/imac.png" alt="computer picture" />
      </div>

      <div className="mx-2.5 my-5 lg:m-0 order-0 lg:order-1">
        <h2 className="mb-[26px] lg:mb-[33px]">
          Запишитесь на экскурсию <br />
          по сервису речевой аналитики <br />
          <b>Эврика360</b>
        </h2>
        <div className="mb-7 lg:mb-[54px] lg:max-w-[457px] flex flex-col gap-y-2.5 lg:gap-y-[25px]">
          <ListItem size="big">Покажем как работает сервис изнутри</ListItem>
          <ListItem size="big">
            Расскажем как речевая аналитика может быть полезна вашей компании
          </ListItem>
          <ListItem size="big">
            Найдём в каких коммуникациях заморожены деньги прямо сейчас
          </ListItem>
        </div>
        <PopupButton>Записаться на экскурсию</PopupButton>
      </div>
    </div>
  )
}
