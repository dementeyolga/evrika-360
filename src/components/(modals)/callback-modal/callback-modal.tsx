import { MouseEventHandler } from 'react'
import { Modal } from '../modal'
import { CallbackForm } from '@/components/(forms)/callback-form'

export const CallbackModal = ({
  onClick,
  handleCloseModal,
}: {
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseModal: () => void
}) => {
  return (
    <Modal onClick={onClick}>
      <div className="relative p-[50px] max-w-[500px] w-full rounded-section bg-foreground">
        <button
          onClick={handleCloseModal}
          className="absolute -top-[90px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>
        <CallbackForm basic buttonText="Заказать звонок" />
      </div>
    </Modal>
  )
}
