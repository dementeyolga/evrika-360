import { PopupButton } from '@/components/(buttons)/features/popup-button'
import { CaseCard } from '@/components/(cards)/case-card'
import { TickIcon } from '@/components/(icons)/tick-icon'
import { CasesSlider } from '@/components/(sliders)/cases-slider'
import { ListItem } from '@/components/(text)/list-item'
import { Header } from '@/components/header'
import { deptBenefits } from '@/data/dept-benefits'
import { usefulCases } from '@/data/useful-cases'

export default function HomePage() {
  return (
    <div className="bg-background p-5">
      <div className="px-15 mx-auto mb-25 w-full max-w-7xl bg-foreground rounded-section">
        <Header />
        <div className="flex items-end overflow-hidden">
          <div className="max-w-[590px] flex flex-col justify-end">
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
              <PopupButton button="action" variant="demo">
                Записаться на демо
              </PopupButton>
            </div>
          </div>

          <div className="relative w-full h-[670px] max-w-[530px]">
            <div className="absolute bottom-0 -left-[15px] h-full">
              <img
                className="h-full w-auto max-w-max"
                src="/promo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-15 mx-auto w-full max-w-7xl">
        <div className="relative ml-42 py-51px pr-51px pl-226px bg-sky-500 text-font-contrast rounded-section-md">
          <img
            className="absolute -top-[83px] -left-[69px]"
            src="/character-idea.png"
            alt=""
          />
          <h3 className="font-bold">Эврика360 — один сервис</h3>
          <h3>для большинства отделов в компании</h3>
        </div>

        <div className="mt-20 mb-32 grid grid-cols-3 gap-x-5 gap-y-[63px]">
          {deptBenefits.map(({ dept, benefits }) => (
            <div key={dept} className="max-w-[281px] w-full">
              <TickIcon />
              <h4 className="mt-[31px] mb-4 font-bold text-nowrap">{dept}</h4>
              <div className="flex flex-col">
                {benefits.map((b) => (
                  <ListItem key={b}>{b}</ListItem>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[97px] flex gap-x-[65px]">
          <div className="sticky top-20 w-full max-w-[735px] grow shrink-0 h-fit p-51px bg-foreground rounded-section-md rounded-br-none">
            <h3>
              — Я правильно понимаю, что речевая аналитика полезна когда...
            </h3>
          </div>
          <div className="shrink -mt-2 max-w-[310px] flex flex-col gap-y-[68px]">
            {usefulCases.map(({ imgSrc, text }) => (
              <CaseCard
                key={text}
                icon={
                  <div>
                    <img src={imgSrc} />
                  </div>
                }
              >
                {text}
              </CaseCard>
            ))}
          </div>
        </div>

        <div className="relative max-w-[787px] ml-auto mb-25 py-[75px] pr-[122px] pl-226px bg-sky-500 text-font-contrast rounded-section-md rounded-bl-none">
          <img
            className="absolute bottom-0 -left-[21px]"
            src="/character-hand.png"
            alt=""
          />
          <h3>
            <b>— Да, и не только в этом</b>
          </h3>
        </div>

        <div className="mb-25">
          <CasesSlider />
          <div className="flex justify-center mt-[30px] mb-25">
            <PopupButton variant="test">
              Протестировать на своих данных
            </PopupButton>
          </div>
        </div>
      </div>

      <div className="px-11 pt-[75px] pb-[96px] mx-auto mb-25 w-full max-w-7xl flex items-center gap-[45px] bg-foreground rounded-section">
        <div className="max-w-[481px] mt-4">
          <img src="/imac.png" alt="computer picture" />
        </div>
        <div>
          <h2 className="mb-[33px]">
            Запишитесь на экскурсию <br />
            по сервису речевой аналитики <br />
            <b>Эврика360</b>
          </h2>
          <div className="mb-[49px] max-w-[457px] flex flex-col gap-y-[25px]">
            <ListItem size={'big'}>
              Покажем как работает сервис изнутри
            </ListItem>
            <ListItem size={'big'}>
              Расскажем как речевая аналитика может быть полезна вашей компании
            </ListItem>
            <ListItem size={'big'}>
              Найдём в каких коммуникациях заморожены деньги прямо сейчас
            </ListItem>
          </div>
          <PopupButton>Записаться на экскурсию</PopupButton>
        </div>
      </div>
    </div>
  )
}
