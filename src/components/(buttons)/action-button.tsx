import clsx from 'clsx'
import { ReactElement } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: true
  children: string | ReactElement
}

export const ActionButton = ({ full, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        full ? 'md:w-full lg:w-full' : 'md:w-fit lg:w-fit',
        'w-full px-6 py-5 xl:px-15 xl:py-[26px] text-white text-sm md:text-base xl:text-xl font-bold rounded-full bg-green-500 shadow-button hover:-translate-y-2 transition-all duration-300 disabled:opacity-45 disabled:hover:transform-none',
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
