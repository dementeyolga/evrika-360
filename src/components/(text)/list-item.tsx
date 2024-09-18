import clsx from 'clsx'

interface ListItemProps {
  size?: 'big'
  children: string
}

export const ListItem = ({ size, children }: ListItemProps) => {
  return (
    <div className="flex items-start gap-x-2 lg:gap-x-5">
      <div className="shrink-0 mt-[7px] lg:mt-3">
        <img
          className="w-[6px] lg:w-full"
          src="/bullet.svg"
          alt="bullet icon"
        />
      </div>

      <p
        className={clsx(
          'text-slate-pale leading-5 lg:leading-[29px]',
          size === 'big' && 'large',
        )}
      >
        {children}
      </p>
    </div>
  )
}
