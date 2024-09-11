import clsx from 'clsx'

interface ListItemProps {
  size?: 'big'
  children: string
}

export const ListItem = ({ size, children }: ListItemProps) => {
  return (
    <p
      className={clsx(
        'flex gap-x-5 text-slate-pale',
        size === 'big' && 'large',
      )}
    >
      <img className="" src="/bullet.svg" alt="bullet icon" />
      {children}
    </p>
  )
}
