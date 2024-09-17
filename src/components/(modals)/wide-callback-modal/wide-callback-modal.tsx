import { MouseEventHandler, ReactElement, RefObject } from 'react'
import { Modal } from '../modal'
import { CallbackForm } from '@/components/(forms)/callback-form'

export const WideCallbackModal = ({
  reference,
  buttonText,
  description,
  formDescription,
  onClick,
  handleCloseModal,
}: {
  reference: RefObject<HTMLDivElement>
  description: ReactElement | string
  formDescription: string
  buttonText: string
  onClick: MouseEventHandler<HTMLDivElement>
  handleCloseModal: () => void
}) => {
  return (
    <Modal reference={reference} onClick={onClick} bg="darker">
      <div className="relative flex max-w-[1000px] min-h-[790px] w-full">
        <button
          onClick={handleCloseModal}
          className="absolute -top-[55px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="p-[40px] w-full rounded-section bg-background">
          <div className="relative max-w-[477px] h-full flex flex-col">
            <p className="xl mb-[30px]">{description}</p>
            <p className="mb-10">
              <b>Расскажем о возможностях сервиса</b> и рассчитаем
              целесообразность применения в вашей компании
            </p>
            <div className="flex-grow flex items-end">
              <img src="/macbook.png" alt="" className="max-w-fit" />
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 bottom-0 p-[40px] max-w-[460px] w-full rounded-section bg-foreground">
          <div className="mb-6 text-xl leading-[34px]">{formDescription}</div>
          <CallbackForm buttonText={buttonText} />
        </div>
      </div>
    </Modal>
  )
}
