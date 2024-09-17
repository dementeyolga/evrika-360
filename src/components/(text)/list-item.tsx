import clsx from 'clsx'

interface ListItemProps {
  size?: 'big'
  children: string
}

export const ListItem = ({ size, children }: ListItemProps) => {
  return (
    <div
      className={clsx(
        'flex items-start gap-x-2 lg:gap-x-5 text-slate-pale leading-5 lg:leading-[29px]',
        size === 'big' && 'large',
      )}
    >
      <div className="shrink-0 mt-[7px] lg:mt-3">
        <img
          className="w-[6px] lg:w-full"
          src="/bullet.svg"
          alt="bullet icon"
        />
      </div>

      {children}
    </div>
  )
}
