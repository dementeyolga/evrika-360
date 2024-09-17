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
      <div className="relative my-[70px] mx-2.5 overflow-y-auto flex flex-col lg:flex-row justify-center max-w-[600px] lg:max-w-[1000px] lg:min-h-[790px] w-full">
        <button
          onClick={handleCloseModal}
          className="absolute -top-[55px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="py-5 px-2.5 lg:p-[40px] w-full rounded-section-mobile lg:rounded-section bg-background">
          <div className="relative max-w-[477px] h-full flex flex-col">
            <p className="xl mb-5 lg:mb-[30px] text-center lg:text-left">
              {description}
            </p>
            <p className="mb-12 lg:mb-10 text-center lg:text-left">
              <b>Расскажем о возможностях сервиса</b> и рассчитаем
              целесообразность применения в вашей компании
            </p>
            <div className="hidden lg:block flex-grow flex items-end">
              <img src="/macbook.png" alt="" className="max-w-fit" />
            </div>
          </div>
        </div>

        <div className="py-5 px-2.5 relative -top-14 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 p-5 lg:p-[40px] max-w-[460px] w-full rounded-section-mobile lg:rounded-section bg-foreground">
          <div className="mb-6 text-center text-lg lg:text-left lg:text-xl leading-[34px]">
            {formDescription}
          </div>
          <CallbackForm buttonText={buttonText} />
        </div>
      </div>
    </Modal>
  )
}
