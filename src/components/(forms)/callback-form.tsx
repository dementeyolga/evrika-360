import { ActionButton } from '../(buttons)/action-button'
import { Checkbox } from '../ui/checkbox'
import { PhoneInput, TextInput } from '../ui/input'

interface CallbackFormProps {
  basic?: true
  buttonText: string
}

export const CallbackForm = ({ buttonText, basic }: CallbackFormProps) => {
  return (
    <form className="w-full flex flex-col gap-4 xl:gap-5">
      <TextInput name="Имя" label="Ваше имя" placeholder="Например, Иван" />
      {!basic && (
        <TextInput
          name="Роль"
          label="Ваша роль в компании"
          placeholder="Например, CEO"
        />
      )}
      <PhoneInput label="Введите ваш номер телефона" />

      <div className="flex flex-col gap-3 xl:gap-y-5">
        <ActionButton full type="submit">
          {buttonText}
        </ActionButton>
        <Checkbox
          name="Согласие на обработку персональных данных"
          label="Даю согласие на обработку персональных данных"
        />
      </div>

      <p className="text-center leading-6">
        Или звоните по номеру <br />
        <a href="tel:+375-29-388-55-12" className="font-bold">
          +375-29-388-55-12
        </a>
      </p>
    </form>
  )
}
