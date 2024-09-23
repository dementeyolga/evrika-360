import { ChangeEvent, FocusEvent } from 'react'
import clsx from 'clsx'
interface TextInputProps {
  name: string
  label?: string
  placeholder: string
  valid: boolean
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

interface PhoneInputProps {
  value: string
  label?: string
  name: string
  valid: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

const inputClassName =
  'px-4 py-4 lg:px-7 lg:py-4 lg:text-lg xl:text-xl rounded-full placeholder:text-font-secondary bg-background'

export const TextInput = ({
  name,
  label,
  value,
  valid,
  placeholder,
  onChange,
  onBlur,
}: TextInputProps) => {
  return (
    <label className="flex flex-col gap-y-2.5">
      {label && <p className="ml-[30px] small">{label}</p>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        className={clsx(inputClassName, !valid && 'bg-error-200')}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  )
}

export const PhoneInput = ({
  label,
  name,
  onChange,
  valid,
  onBlur,
}: PhoneInputProps) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === '') {
      e.currentTarget.value = '+375'
      onChange(e)
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur(e)

    const value = e.currentTarget.value

    if (value === '+375') {
      e.currentTarget.value = ''
      onChange(e)
    }
  }

  const handleChange = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === '') {
      e.currentTarget.value = '+375'
    }

    onChange(e)
  }

  return (
    <label className="flex flex-col gap-y-2.5">
      {label && <p className="ml-[30px] small">{label}</p>}
      <input
        type="text"
        placeholder="+375 (__) ___-__-__"
        name={name}
        className={clsx(inputClassName, !valid && 'bg-error-200')}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </label>
  )
}
