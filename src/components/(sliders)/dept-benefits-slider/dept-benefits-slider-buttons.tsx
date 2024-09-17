'use client'

import {
  FC,
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="py-[15px] px-[23px] rounded-block-sm border border-border hover:bg-foreground transition-colors  duration-300"
      type="button"
      {...restProps}
    >
      <img src="/prev-arrow-small.svg" alt="" />
      {children}
    </button>
  )
}

export const NextButton: FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="py-[15px] px-[23px] rounded-block-sm border border-border hover:bg-foreground transition-colors duration-300"
      type="button"
      {...restProps}
    >
      <img src="/next-arrow-small.svg" alt="" />
      {children}
    </button>
  )
}
