import { MouseEventHandler, RefObject } from 'react'
import { Modal } from '../modal'
import { CallbackForm } from '@/components/(forms)/callback-form'

export const CallbackModal = ({
  reference,
  onClick,
  handleCloseModal,
}: {
  reference: RefObject<HTMLDivElement>
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseModal: () => void
}) => {
  return (
    <Modal reference={reference} onClick={onClick}>
      <div className="relative p-[40px] max-w-[500px] w-full rounded-section bg-foreground">
        <button
          onClick={handleCloseModal}
          className="absolute -top-[65px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <p className="mb-[30px] text-2xl">
          Введите свои данные в форму и{' '}
          <b>закажите звонок нашего специалиста для консультации </b>
        </p>
        <CallbackForm basic buttonText="Заказать звонок" />
      </div>
    </Modal>
  )
}
