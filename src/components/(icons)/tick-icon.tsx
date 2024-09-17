import clsx from 'clsx'

interface TickIconProps {
  variant?: 'accent'
}

export const TickIcon = ({ variant }: TickIconProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-block-mobile lg:rounded-block-sm',
        variant === 'accent'
          ? 'h-20 w-20 bg-green-500 text-white'
          : 'h-10 w-10 lg:h-16 lg:w-16 bg-foreground text-green-500',
      )}
    >
      <svg className="fill-current w-[13px] h-2.5 lg:w-[21px] lg:h-[17px]">
        <use className="lg:hidden" href="/tick-mobile.svg#tick"></use>
        <use className="hidden lg:block" href="/tick.svg#tick"></use>
      </svg>
    </div>
  )
}
