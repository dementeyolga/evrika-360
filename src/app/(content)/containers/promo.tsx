import { PopupButton } from '@/components/(buttons)/features/popup-button'
import { Header } from '@/components/header'

export const Promo = () => {
  return (
    <div className="px-2.5 md:px-10 lg:px-15 w-full max-w-7xl bg-foreground rounded-section-mobile lg:rounded-section overflow-hidden">
      <Header />
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh_-_170px)] lg:max-h-[630px]">
        <div className="grow basis-1/2 flex flex-col justify-between z-10">
          <h2 className="mb-5 lg:my-6">
            <b>Доверьте анализ и оценку качества работы</b> сотрудников речевой
            аналитике и избавьте владельца и ТОП-менеджмент от рутинных задач
          </h2>
          <p className="mb-4 lg:4">
            Запишитесь на демонстрацию и{' '}
            <b>за 30 минут узнайте чем речевая аналитика будет полезна</b> для
            вашей компании
          </p>
          <div className="mb-[30px] xl:mb-[77px]">
            <PopupButton button="action" variant="demo">
              Записаться на демо
            </PopupButton>
          </div>
        </div>

        <div className="max-h-full self-center lg:self-end grow basis-1/2 flex">
          <div className="max-h-full flex justify-center">
            <img className="" src="/promo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
