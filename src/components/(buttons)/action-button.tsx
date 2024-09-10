interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export const ActionButton = (props: ButtonProps) => {
  return (
    <button
      className="py-5 px-7.5 w-fit text-white text-xl font-bold rounded-full bg-green-500 shadow-button"
      {...props}
    >
      {props.children}
    </button>
  )
}
