import { ChangeEvent, FocusEvent } from 'react'

interface CheckboxProps {
  name: string
  label: string
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

export const Checkbox = ({
  name,
  label,
  value,
  onChange,
  onBlur,
}: CheckboxProps) => {
  return (
    <label className="relative flex justify-center items-center gap-x-2 hover:cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          value={value}
          className="peer w-5 h-5 appearance-none"
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-background w-[18px] h-[18px] xl:w-5 xl:h-5 rounded-full flex justify-center items-center [&_svg]:hidden peer-checked:bg-sky-500 peer-checked:[&_svg]:block">
          <svg className="fill-current" width={12} height={9}>
            <use href="/tick-small.svg#tick"></use>
          </svg>
        </div>
      </div>

      {label && <p className="small">{label}</p>}
    </label>
  )
}
