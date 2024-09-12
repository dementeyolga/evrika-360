import clsx from 'clsx'

interface TickIconProps {
  variant?: 'accent'
}

export const TickIcon = ({ variant }: TickIconProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-block-sm',
        variant === 'accent'
          ? 'h-20 w-20 bg-green-500 text-white'
          : 'h-16 w-16 bg-foreground text-green-500',
      )}
    >
      <svg
        width={variant !== 'accent' ? 23 : 28}
        height={variant !== 'accent' ? 18 : 21}
        className="fill-current"
      >
        <use
          href="/tick.svg#tick"
          width={variant !== 'accent' ? 23 : 28}
          height={variant !== 'accent' ? 18 : 21}
        ></use>
      </svg>
    </div>
  )
}
