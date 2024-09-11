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
    <div className="py-10 px-[50px] bg-foreground rounded-section-sm">
      <p
        className={clsx(
          'mb-6 px-5 py-[10px] w-fit small rounded-full',
          colorConfig[sphere.color].bg,
          colorConfig[sphere.color].text,
        )}
      >
        {sphere.value}
      </p>
      <h4 className="mb-[34px] leading-[38px]">{description}</h4>
      <div className="mb-5 grid grid-cols-slider-case-top justify-between">
        {indicators.map(({ title, description }) => (
          <div
            key={title}
            className="min-h-[136px] bg-background px-5 py-4 rounded-block"
          >
            <h3>{title}</h3>
            <p className="small text-font-secondary">{description}</p>
          </div>
        ))}
      </div>

      {'indicators' in additional && (
        <div className="grid grid-cols-slider-case-bottom justify-between">
          {additional.indicators.map(
            ({ title: { value, crossed }, description }) => (
              <div
                key={value}
                className="min-h-[136px] bg-background px-5 py-4 rounded-block"
              >
                <h3>
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
        <div className="min-h-[136px] bg-background px-5 py-5 rounded-block">
          <h3>
            <span className="text-font-secondary line-through">
              {additional.largeIndicator.title.crossed}
            </span>{' '}
            {additional.largeIndicator.title.value}
          </h3>
          <p className="small text-font-secondary">{description}</p>
        </div>
      )}

      {'disclaimerIndicator' in additional && (
        <div className="min-h-[136px] bg-background rounded-block flex">
          <div className="px-5 py-5">
            <h3>{additional.disclaimerIndicator.title}</h3>
            <p className="small text-font-secondary">
              {additional.disclaimerIndicator.description}
            </p>
          </div>
          <div className="py-4 px-5 bg-sky-500 text-font-contrast rounded-block">
            <img src="/disclaimer-icon.svg" alt="" />
            <p className="smaller mt-1">
              {additional.disclaimerIndicator.disclaimer.value}
              <b>{additional.disclaimerIndicator.disclaimer.bold}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
