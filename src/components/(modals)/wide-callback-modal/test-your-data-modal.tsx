import { MouseEventHandler, RefObject } from 'react'
import { WideCallbackModal } from './wide-callback-modal'

export const TestYourDataModal = ({
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
      buttonText="Протестировать"
      description={
        <>
          Чтобы <b>протестировать сервис</b> на примере данных вашей компании —
          заполните форму
        </>
      }
      formDescription="Чтобы протестировать сервис на примере данных вашей компании — заполните форму"
    />
  )
}
