'use client'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './cases-slider-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import s from './cases-slider.module.css'
import { casesForSlider } from '@/data/cases-for-slider'
import { CasesSlide } from './cases-slide'

export const CasesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={s.embla}>
      <div className="mb-4 lg:mb-[40px] flex flex-col lg:flex-row justify-between items-end gap-x-14">
        <h2 className="mb-[10px] lg:mb-0">
          Речевая аналитика применима в любой сфере, <br />
          <b>где нужно общаться с клиентами</b>
        </h2>

        <div className="shrink-0 h-fit lg:mb-3 flex gap-[14px]">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className={s.embla__viewport} ref={emblaRef}>
        <div className={s.embla__container}>
          {casesForSlider.map(
            ({ sphere, description, indicators, additional }) => (
              <div key={description} className={s.embla__slide}>
                <CasesSlide
                  sphere={sphere}
                  description={description}
                  indicators={indicators}
                  additional={additional}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
