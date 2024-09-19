'use client'

import { FocusEvent } from 'react'
import { useMask } from '@react-input/mask'
interface TextInputProps {
  name: string
  label?: string
  placeholder: string
}

interface PhoneInputProps {
  label?: string
}

const inputClassName =
  'px-4 py-4 lg:px-[30px] lg:py-[26px] lg:text-xl rounded-full placeholder:text-font-secondary bg-background'

export const TextInput = ({ name, label, placeholder }: TextInputProps) => {
  return (
    <label className="flex flex-col gap-y-2.5">
      {label && <p className="ml-[30px] small">{label}</p>}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className={inputClassName}
      />
    </label>
  )
}

export const PhoneInput = ({ label }: PhoneInputProps) => {
  const inputRef = useMask({
    mask: '+375 (__) ___-__-__',
    replacement: { _: /\d/ },
  })

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === '') {
      e.currentTarget.value = '+375 ('
    }
  }

  const handleChange = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === '') {
      e.currentTarget.value = '+375 ('
    }
  }

  return (
    <label className="flex flex-col gap-y-2.5">
      {label && <p className="ml-[30px] small">{label}</p>}
      <input
        type="text"
        placeholder="+375 (__) ___-__-__"
        name="Телефон"
        ref={inputRef}
        className={inputClassName}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </label>
  )
}
