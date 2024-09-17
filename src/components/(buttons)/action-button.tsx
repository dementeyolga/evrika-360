import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: true
  children: string
}

export const ActionButton = ({ full, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        full ? 'lg:w-full' : 'lg:w-fit',
        'w-full p-5 lg:px-15 lg:py-[26px] text-white text-sm lg:text-xl font-bold rounded-full bg-green-500 shadow-button hover:-translate-y-2 transition-transform duration-300',
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
