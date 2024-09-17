import { SliderCase } from '@/data/cases-for-slider'
import clsx from 'clsx'

export interface ColorConfig {
  sky: {
    bg: string
    text: string
  }
  orange: {
    bg: string
    text: string
  }
  green: {
    bg: string
    text: string
  }
  slate: {
    bg: string
    text: string
  }
}

export const colorConfig = {
  sky: {
    bg: 'bg-sky-200',
    text: 'text-sky-500',
  },
  orange: {
    bg: 'bg-orange-200',
    text: 'text-orange-500',
  },
  green: {
    bg: 'bg-green-200',
    text: 'text-green-500',
  },
  slate: {
    bg: 'bg-slate-200',
    text: 'text-slate-500',
  },
}

export const CasesSlide = ({
  sphere,
  description,
  indicators,
  additional,
}: SliderCase) => {
  return (
    <div className="p-5 lg:py-10 lg:px-[50px] bg-foreground rounded-block lg:rounded-section-sm">
      <p
        className={clsx(
          'mb-4 lg:mb-6 px-2.5 lg:px-5 py-2 lg:py-[2.5] w-fit small rounded-block-mobile lg:rounded-full',
          colorConfig[sphere.color].bg,
          colorConfig[sphere.color].text,
        )}
      >
        {sphere.value}
      </p>

      <h4 className="mb-2.5 lg:mb-[34px] text-[17px] lg:text-[24px] leading-[25px] lg:leading-[38px]">
        {description}
      </h4>

      <div className="mb-2.5 lg:mb-5 grid gap-y-2.5 lg:grid-cols-slider-case-top lg:justify-between">
        {indicators.map(({ title, description }) => (
          <div
            key={title}
            className="lg:min-h-[136px] bg-background p-4 lg:px-5 lg:py-4 rounded-block-sm lg:rounded-block"
          >
            <h3 className="text-[22px] lg:text-[33px]">{title}</h3>
            <p className="small text-font-secondary">{description}</p>
          </div>
        ))}
      </div>

      {'indicators' in additional && (
        <div className="grid gap-y-2.5 lg:grid-cols-slider-case-bottom lg:justify-between">
          {additional.indicators.map(
            ({ title: { value, crossed }, description }) => (
              <div
                key={value}
                className="lg:min-h-[136px] bg-background p-4 lg:px-5 lg:py-4 rounded-block-sm lg:rounded-block"
              >
                <h3 className="text-[22px] lg:text-[33px]">
                  {value}{' '}
                  {crossed && (
                    <span className="text-font-secondary line-through">
                      {crossed}
                    </span>
                  )}
                </h3>
                <p className="small text-font-secondary">{description}</p>
              </div>
            ),
          )}
        </div>
      )}

      {'largeIndicator' in additional && (
        <div className="lg:min-h-[136px] bg-background p-4 lg:px-5 lg:py-5 rounded-block-sm lg:rounded-block">
          <h3 className="text-[22px] lg:text-[33px]">
            <span className="text-font-secondary line-through">
              {additional.largeIndicator.title.crossed}
            </span>{' '}
            {additional.largeIndicator.title.value}
          </h3>
          <p className="small text-font-secondary">
            {additional.largeIndicator.description}
          </p>
        </div>
      )}

      {'disclaimerIndicator' in additional && (
        <div className="lg:min-h-[136px] lg:bg-background rounded-block-sm lg:rounded-block lg:flex">
          <div className="mb-2.5 lg:mb-0 p-4 lg:p-5 bg-background rounded-block-sm lg:bg-transparent">
            <h3>{additional.disclaimerIndicator.title}</h3>
            <p className="small text-font-secondary">
              {additional.disclaimerIndicator.description}
            </p>
          </div>
          <div className="p-4 lg:px-5 lg:py-4 bg-sky-500 text-font-contrast rounded-block-sm lg:rounded-block">
            <img src="/disclaimer-icon.svg" alt="" />
            <p className="smaller mt-1">
              {additional.disclaimerIndicator.disclaimer.value}{' '}
              <b>{additional.disclaimerIndicator.disclaimer.bold}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
