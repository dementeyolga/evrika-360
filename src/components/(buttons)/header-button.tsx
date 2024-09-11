interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export const HeaderButton = (props: ButtonProps) => {
  return (
    <button
      className="py-5 px-7.5 text-green-500 font-bold rounded-full bg-green-200 hover:-translate-y-2 transition-transform duration-300"
      {...props}
    >
      {props.children}
    </button>
  )
}
