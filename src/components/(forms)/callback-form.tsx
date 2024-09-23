'use client'

import { ActionButton } from '../(buttons)/action-button'
import { Checkbox } from '../ui/checkbox'
import { PhoneInput, TextInput } from '../ui/input'
import { ErrorMessage, Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { object, string, boolean } from 'yup'
import { useRouter } from 'next/navigation'

interface CallbackFormProps {
  basic?: true
  buttonText: string
}

interface FormValues {
  name: string
  position: string
  phone: string
  personalDataAgreed: boolean
}

export const CallbackForm = ({ buttonText, basic }: CallbackFormProps) => {
  const router = useRouter()

  return (
    <Formik
      initialValues={{
        name: '',
        position: '',
        phone: '',
        personalDataAgreed: false,
      }}
      validationSchema={object({
        name: string()
          .min(2, 'Имя должно содержать от 2-х символов')
          .required('Обязательное поле'),
        position: string().min(2, 'Роль должна содержать от 2-х символов'),
        phone: string()
          .required('Обязательное поле')
          .matches(
            /^(\+?375|8\(?\s?0)(\s|-)*\(?[0-9]{2}\)?(\s|-)*[0-9]{3}(\s|-)*[0-9]{2}(-| )?[0-9]{2}$/,
            'Неверный формат номера телефона',
          ),
        personalDataAgreed: boolean().isTrue('Обязательное поле'),
      })}
      onSubmit={(
        values: FormikValues,
        { setSubmitting }: FormikHelpers<FormValues>,
      ) => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
        if (location.pathname === '/thank-you') {
          location.reload()
        } else {
          router.push('/thank-you')
        }
      }}
    >
      {(formik) => (
        <Form className="w-full flex flex-col gap-4 xl:gap-5">
          <fieldset className="flex flex-col gap-1">
            <TextInput
              label="Ваше имя*"
              placeholder="Например, Иван"
              valid={!(formik.touched.name && formik.errors.name)}
              {...formik.getFieldProps('name')}
            />
            <ErrorMessage name="name">
              {(msg) => <p className="ml-6 text-error-500">{msg}</p>}
            </ErrorMessage>
          </fieldset>

          {!basic && (
            <fieldset className="flex flex-col gap-1">
              <TextInput
                label="Ваша роль в компании"
                placeholder="Например, CEO"
                valid={!(formik.touched.position && formik.errors.position)}
                {...formik.getFieldProps('position')}
              />
              <ErrorMessage name="position">
                {(msg) => <p className="ml-6 text-error-500">{msg}</p>}
              </ErrorMessage>
            </fieldset>
          )}

          <fieldset className="flex flex-col gap-1">
            <PhoneInput
              label="Введите ваш номер телефона*"
              valid={!(formik.touched.phone && formik.errors.phone)}
              {...formik.getFieldProps('phone')}
            />
            <ErrorMessage name="phone">
              {(msg) => <p className="ml-6 text-error-500">{msg}</p>}
            </ErrorMessage>
          </fieldset>

          <div className="flex flex-col gap-3 xl:gap-y-5">
            <ActionButton full type="submit" disabled={formik.isSubmitting}>
              {buttonText}
            </ActionButton>

            <fieldset className="flex flex-col gap-1">
              <Checkbox
                label="Даю согласие на обработку персональных данных"
                {...formik.getFieldProps('personalDataAgreed')}
              />
              <ErrorMessage name="personalDataAgreed">
                {(msg) => <p className="ml-6 text-error-500">{msg}</p>}
              </ErrorMessage>
            </fieldset>
          </div>

          <p className="text-center leading-6">
            Или звоните по номеру <br />
            <a href="tel:+375-29-388-55-12" className="font-bold">
              +375-29-388-55-12
            </a>
          </p>
        </Form>
      )}
    </Formik>
  )
}
