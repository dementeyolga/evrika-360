'use client'

import { useMask } from '@react-input/mask'

interface TextInputProps {
  name: string
  label?: string
  placeholder: string
}

interface PhoneInputProps {
  label?: string
}

export const TextInput = ({ name, label, placeholder }: TextInputProps) => {
  return (
    <label className="flex flex-col gap-y-2.5">
      {label && <p className="ml-[30px] small">{label}</p>}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="px-[30px] py-[26px] text-xl rounded-full placeholder:text-font-secondary bg-background"
      />
    </label>
  )
}

export const PhoneInput = ({ label }: PhoneInputProps) => {
  const inputRef = useMask({
    mask: '+375 (__) ___-__-__',
    replacement: { _: /\d/ },
  })

  return (
    <label className="flex flex-col gap-y-2.5">
      {label && <p className="ml-[30px] small">{label}</p>}
      <input
        type="text"
        placeholder="+375 (__) ___-__-__"
        name="Телефон"
        ref={inputRef}
        className="px-[30px] py-[26px] text-xl rounded-full placeholder:text-font-secondary bg-background"
      />
    </label>
  )
}
