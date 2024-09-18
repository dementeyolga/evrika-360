interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export const HeaderButton = (props: ButtonProps) => {
  return (
    <button
      className="px-[46px] py-[16px] lg:py-[18px] lg:px-9 text-green-500 text-sm lg:text-base font-bold rounded-full bg-green-200 hover:-translate-y-2 transition-transform duration-300"
      {...props}
    >
      {props.children}
    </button>
  )
}
