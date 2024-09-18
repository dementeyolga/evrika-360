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
      <div className="relative w-fit h-fit my-[70px] mx-2.5 ">
        <button
          onClick={handleCloseModal}
          className="absolute left-1/2 -top-[30px] lg:-top-10 -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="relative mt-[30px] p-5 lg:p-10 flex flex-col justify-center max-w-[500px] w-full rounded-section-mobile lg:rounded-section overflow-hidden bg-foreground">
          <p className="text-center lg:text-left mb-5 lg:mb-[30px] text-lg lg:text-2xl">
            Введите свои данные в форму и{' '}
            <b>закажите звонок нашего специалиста для консультации </b>
          </p>
          <CallbackForm basic buttonText="Заказать звонок" />
        </div>
      </div>
    </Modal>
  )
}
