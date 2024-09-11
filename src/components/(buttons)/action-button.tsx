interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export const ActionButton = (props: ButtonProps) => {
  return (
    <button
      className="px-15 py-[26px] w-fit text-white text-xl font-bold rounded-full bg-green-500 shadow-button hover:-translate-y-2 transition-transform duration-300"
      {...props}
    >
      {props.children}
    </button>
  )
}
