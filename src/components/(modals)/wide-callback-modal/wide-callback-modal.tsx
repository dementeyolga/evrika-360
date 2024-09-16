import { MouseEventHandler, ReactElement } from 'react'
import { Modal } from '../modal'
import { CallbackForm } from '@/components/(forms)/callback-form'

export const WideCallbackModal = ({
  buttonText,
  description,
  formDescription,
  onClick,
  handleCloseModal,
}: {
  description: ReactElement | string
  formDescription: string
  buttonText: string
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseModal: () => void
}) => {
  return (
    <Modal onClick={onClick} bg="bg-background-transparent-darker">
      <div className="relative flex max-w-[1000px] w-full">
        <button
          onClick={handleCloseModal}
          className="absolute -top-[90px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="p-[50px] w-full rounded-section bg-background">
          <div className="relative max-w-[477px]">
            <p className="xl mb-[30px]">{description}</p>
            <p className="mb-10">
              <b>Расскажем о возможностях сервиса</b> и рассчитаем
              целесообразность применения в вашей компании
            </p>
            <div className="">
              <img src="/macbook.png" alt="" className="max-w-fit" />
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 bottom-0 p-[50px] max-w-[460px] w-full rounded-section bg-foreground">
          <p className="medium mb-6">{formDescription}</p>
          <CallbackForm buttonText={buttonText} />
        </div>
      </div>
    </Modal>
  )
}
