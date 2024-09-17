'use client'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './dept-benefits-slider-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import { deptBenefits } from '@/data/dept-benefits'
import { TickIcon } from '@/components/(icons)/tick-icon'
import { ListItem } from '@/components/(text)/list-item'
import s from './dept-benefits-slider.module.css'

export const DeptBenefitsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={s.embla}>
      <div className={s.embla__viewport} ref={emblaRef}>
        <div className={s.embla__container}>
          {deptBenefits.map(({ dept, benefits }) => (
            <div key={dept} className={s.embla__slide}>
              <TickIcon />
              <h4 className="mt-6 lg:mt-[31px] mb-4 font-bold">{dept}</h4>
              <div className="flex flex-col gap-y-[6px] lg:gap-y-0">
                {benefits.map((b) => (
                  <ListItem key={b}>{b}</ListItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-[13px] justify-end">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  )
}
