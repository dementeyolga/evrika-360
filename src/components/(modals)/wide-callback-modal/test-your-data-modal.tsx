import { MouseEventHandler } from 'react'
import { WideCallbackModal } from './wide-callback-modal'

export const TestYourDataModal = ({
  onClick,
  handleCloseModal,
}: {
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseModal: () => void
}) => {
  return (
    <WideCallbackModal
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
