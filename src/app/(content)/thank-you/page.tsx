import { ActionButton } from '@/components/(buttons)/action-button'
import { TickIcon } from '@/components/(icons)/tick-icon'
import { Header } from '@/components/header'

export default function ThankYouPage() {
  return (
    <div className="bg-background p-2.5 lg:p-5">
      <div className="px-2.5 md:px-10 lg:px-15 w-full mx-auto mb-36 max-w-7xl bg-foreground rounded-section-mobile lg:rounded-section">
        <Header />
        <main className="relative mt-10 flex flex-col gap-y-[30px] items-center">
          <TickIcon variant="accent" />
          <h1 className="text-center font-bold">Спасибо за заявку</h1>
          <p className="medium text-center">
            В ближайшее рабочее время с вами свяжется менеджер и{' '}
            <b>согласует время демонстрации сервиса Эврика360</b>
          </p>
          <div className="max-w-[840px] mb-0 lg:mb-0">
            <img src="/macbook-conference.png" alt="" />
          </div>
          <div className="absolute bottom-0 translate-y-3/4 lg:translate-y-1/2 max-w-[600px] w-full pt-8 px-8 pb-[41px] bg-foreground rounded-section-md shadow-inner">
            <p className="mb-[29px] text-center">
              А пока ждете звонка — <b>подписывайтесь на наш Instagram</b>
            </p>
            <div className="flex gap-5 justify-center">
              <div>
                <img src="/instagram-icon.png" alt="instagram icon" />
              </div>
              <ActionButton>Подписаться</ActionButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
