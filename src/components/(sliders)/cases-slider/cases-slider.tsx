'use client'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './cases-slider-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import './cases-slider.css'
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
    <section className="embla">
      <div className="mb-[40px] flex justify-between items-end gap-14">
        <h2>
          Речевая аналитика применима в любой сфере, <br />
          <b>где нужно общаться с клиентами</b>
        </h2>

        <div className="shrink-0 h-fit mb-3 flex gap-[14px]">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {casesForSlider.map(
            ({ sphere, description, indicators, additional }) => (
              <div key={description} className="embla__slide">
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
