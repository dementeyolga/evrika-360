import { ActionButton } from '@/components/(buttons)/action-button'
import { TickIcon } from '@/components/(icons)/tick-icon'
import { Header } from '@/components/header'

export default function ThankYouPage() {
  return (
    <div className="bg-background p-5">
      <div className="px-15 mx-auto mb-40 w-full max-w-7xl bg-foreground rounded-section">
        <Header />
        <main className="relative mt-10 flex flex-col gap-y-[30px] items-center">
          <TickIcon variant="accent" />
          <h1 className="text-center font-bold">Спасибо за заявку</h1>
          <p className="medium text-center">
            В ближайшее рабочее время с вами свяжется менеджер и{' '}
            <b>
              согласует <br /> время демонстрации сервиса Эврика360
            </b>
          </p>
          <div className="max-w-[840px]">
            <img src="/macbook-conference.png" alt="" />
          </div>
          <div className="absolute bottom-0 translate-y-1/2 max-w-[600px] w-full pt-8 px-8 pb-[41px] bg-foreground rounded-section-md">
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
