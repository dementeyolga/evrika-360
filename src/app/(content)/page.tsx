import { PopupButton } from '@/components/(buttons)/features/popup-button'
import { CaseCard } from '@/components/(cards)/case-card'
import { TickIcon } from '@/components/(icons)/tick-icon'
import { CasesSlider } from '@/components/(sliders)/cases-slider'
import { DeptBenefitsSlider } from '@/components/(sliders)/dept-benefits-slider'
import { ListItem } from '@/components/(text)/list-item'
import { Header } from '@/components/header'
import { deptBenefits } from '@/data/dept-benefits'
import { usefulCases } from '@/data/useful-cases'

export default function HomePage() {
  return (
    <div className="bg-background p-2.5 lg:p-5">
      <div className="px-2.5 md:px-10 lg:px-15 mx-auto mb-[140px] lg:mb-25 w-full max-w-7xl bg-foreground rounded-section-mobile lg:rounded-section overflow-hidden">
        <Header />
        <div className="flex flex-col lg:flex-row lg:items-end">
          <div className="lg:max-w-[590px] xl:shrink-0 flex flex-col justify-end z-10">
            <h2 className="mb-5 lg:mb-[84px]">
              <b>Доверьте анализ и оценку качества работы</b> сотрудников
              речевой аналитике и избавьте владельца и ТОП-менеджмент от
              рутинных задач
            </h2>
            <p className="mb-4 lg:mb-[37px]">
              Запишитесь на демонстрацию и{' '}
              <b>за 30 минут узнайте чем речевая аналитика будет полезна</b> для
              вашей компании
            </p>
            <div className="mb-[30px] lg:mb-[77px]">
              <PopupButton button="action" variant="demo">
                Записаться на демо
              </PopupButton>
            </div>
          </div>

          <div className="lg:relative lg:shrink-0 w-full lg:max-w-[450px] lg:h-[570px] xl:max-w-[576px] xl:h-[670px]">
            <div className="flex justify-center lg:absolute lg:bottom-0 lg:-right-6 xl:right-0 xl:-left-[25px] lg:h-full">
              <img
                className="lg:h-full lg:w-auto lg:max-w-max"
                src="/promo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-2.5 md:px-10 lg:px-15 mx-auto w-full max-w-7xl">
        <div className="relative mb-[42px] lg:mb-20  lg:ml-42 pt-[90px] pb-[26px] px-5 lg:py-51px lg:pr-51px lg:pl-226px bg-sky-500 text-font-contrast rounded-section-mobile lg:rounded-section-md rounded-bl-none lg:rounded-bl-none">
          <img
            className="absolute w-[140px] h-[140px] -top-[70px] left-5 lg:w-fit lg:h-fit lg:-top-[83px] lg:-left-[69px]"
            src="/character-idea.png"
            alt=""
          />
          <h3 className="font-bold">Эврика360 — один сервис</h3>
          <h3>для большинства отделов в компании</h3>
        </div>

        <div className="mb-20 lg:hidden overflow-x-hidden">
          <DeptBenefitsSlider />
        </div>

        <div className="hidden lg:grid mb-32 grid-cols-3 gap-x-5 gap-y-[63px]">
          {deptBenefits.map(({ dept, benefits }) => (
            <div key={dept} className="max-w-[281px] w-full">
              <TickIcon />
              <h4 className="mt-[31px] mb-4 font-bold">{dept}</h4>
              <div className="flex flex-col">
                {benefits.map((b) => (
                  <ListItem key={b}>{b}</ListItem>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[140px] lg:mb-[97px] flex flex-col lg:flex-row lg:gap-x-[65px]">
          <div className="sticky top-20 mb-[207px] min-[342px]:mb-[175px] min-[645px]:mb-[140px] lg:mb-0 px-5 py-[33px] w-full lg:max-w-[735px] grow h-fit lg:p-[51px] bg-foreground rounded-section-mobile lg:rounded-section-md rounded-br-none lg:rounded-br-none">
            <h3>
              — Я правильно понимаю, что речевая аналитика полезна когда...
            </h3>
          </div>
          <div className="-mt-[167px] lg:shrink lg:-mt-2 lg:max-w-[310px] flex flex-col gap-y-[50px] lg:gap-y-[68px]">
            {usefulCases.map(({ imgSrc, text }) => (
              <CaseCard
                key={text}
                icon={
                  <div>
                    <img src={imgSrc} className="h-[60px] lg:h-auto" />
                  </div>
                }
              >
                {text}
              </CaseCard>
            ))}
          </div>
        </div>

        <div className="relative mb-10 lg:max-w-[787px] lg:ml-auto lg:mb-25 pt-[90px] px-5 pb-6 lg:py-[75px] lg:pr-[122px] lg:pl-226px bg-sky-500 text-font-contrast rounded-section-mobile lg:rounded-section-md rounded-bl-none lg:rounded-bl-none">
          <img
            className="absolute -top-[42px] left-5 w-[120px] lg:w-auto lg:top-auto lg:bottom-0 lg:-left-[21px]"
            src="/character-hand.png"
            alt=""
          />
          <h3>
            <b>— Да, и не только в этом</b>
          </h3>
        </div>

        <div className="mb-20 lg:mb-25">
          <CasesSlider />
          <div className="flex justify-center mt-4 lg:mt-[30px]">
            <PopupButton variant="test">
              Протестировать на своих данных
            </PopupButton>
          </div>
        </div>
      </div>

      <div className="md:px-11 lg:pt-[75px] lg:pb-[96px] mx-auto mb-10 lg:mb-20 w-full max-w-7xl flex flex-col md:items-center lg:flex-row lg:items-center gap-y-[32px] lg:gap-x-[43px] bg-foreground rounded-section-mobile lg:rounded-section">
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
    </div>
  )
}
