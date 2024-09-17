import { MouseEventHandler, RefObject } from 'react'
import { WideCallbackModal } from './wide-callback-modal'

export const SignupDemoModal = ({
  reference,
  onClick,
  handleCloseModal,
}: {
  reference: RefObject<HTMLDivElement>
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseModal: () => void
}) => {
  return (
    <WideCallbackModal
      reference={reference}
      onClick={onClick}
      handleCloseModal={handleCloseModal}
      buttonText="Записаться"
      description={
        <>
          <b>Запишитесь на</b> онлайн-демонстрацию возможностей речевой
          аналитики на примере вашей компании
        </>
      }
      formDescription="Заполните форму, чтобы записаться на онлайн-демонстрацию"
    />
  )
}
