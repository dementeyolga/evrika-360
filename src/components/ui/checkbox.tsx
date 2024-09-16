interface CheckboxProps {
  name: string
  label: string
}

export const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <label className="relative flex gap-x-2 hover:cursor-pointer">
      <input
        type="checkbox"
        name={name}
        className="peer w-5 h-5 appearance-none"
      />
      <div className="absolute bg-background w-5 h-5 rounded-full flex justify-center items-center [&_svg]:hidden peer-checked:bg-sky-500 peer-checked:[&_svg]:block">
        <svg className="fill-current" width={12} height={9}>
          <use href="/tick-small.svg#tick"></use>
        </svg>
      </div>
      {label && <p className="small">{label}</p>}
    </label>
  )
}
