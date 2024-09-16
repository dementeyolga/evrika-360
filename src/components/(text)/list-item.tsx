import clsx from 'clsx'

interface ListItemProps {
  size?: 'big'
  children: string
}

export const ListItem = ({ size, children }: ListItemProps) => {
  return (
    <p
      className={clsx(
        'flex items-start gap-x-5 text-slate-pale leading-[29px]',
        size === 'big' && 'large',
      )}
    >
      <img className="mt-3" src="/bullet.svg" alt="bullet icon" />
      {children}
    </p>
  )
}
