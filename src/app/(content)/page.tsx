import { ActionButton } from '@/components/(buttons)/action-button'
import { TickIcon } from '@/components/(icons)/tick-icon'
import { ListItem } from '@/components/(text)/list-item'
import { Header } from '@/components/header'
import { deptBenefits } from '@/data/dept-benefits'

export default function HomePage() {
  return (
    <div className="bg-background p-5">
      <div className="px-15 mx-auto mb-25 w-full max-w-7xl bg-foreground rounded-section">
        <Header />
        <div className="flex h-fit">
          <div className="flex flex-col justify--end">
            <h2 className="pb-21">
              <b>
                Доверьте анализ и оценку <br />
                качества работы
              </b>{' '}
              сотрудников <br />
              речевой аналитике и избавьте <br /> владельца и ТОП-менеджмент{' '}
              <br /> от рутинных задач
            </h2>
            <p className="text-base leading-7.5 pb-37px">
              Запишитесь на демонстрацию и{' '}
              <b>за 30 минут узнайте чем речевая аналитика будет полезна</b> для
              вашей компании
            </p>
            <div className="pb-77px">
              <ActionButton>Записаться на демо</ActionButton>
            </div>
          </div>
          <div>
            <img className="block" src="/promo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="px-15 mx-auto w-full max-w-7xl">
        <div className="relative ml-42 py-51px pr-51px pl-226px bg-sky-500 text-font-contrast rounded-section-md">
          <img
            className="absolute -top-[91px] -left-[71px]"
            src="/character-idea.png"
            alt=""
          />
          <h3 className="font-bold">Эврика360 — один сервис</h3>
          <h3>для большинства отделов в компании</h3>
        </div>
        <div className="mt-20 mb-32 grid grid-cols-3 gap-y-[68px]">
          {deptBenefits.map(({ dept, benefits }) => (
            <div key={dept} className="max-w-[340px]">
              <TickIcon />
              <h4 className="mt-[37px] mb-5 font-bold">{dept}</h4>
              <div className="flex flex-col gap-y-2">
                {benefits.map((b) => (
                  <ListItem key={b}>{b}</ListItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
