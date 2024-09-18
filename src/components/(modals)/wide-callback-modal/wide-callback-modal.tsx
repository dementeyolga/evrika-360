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
      <div className="relative w-fit h-fit my-[70px] mx-2.5 ">
        <button
          onClick={handleCloseModal}
          className="absolute left-1/2 -top-[30px] -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="relative max-w-[600px] lg:max-w-[1000px] mt-[30px] w-full rounded-section-mobile lg:rounded-section overflow-hidden bg-foreground">
          <div className="flex flex-col lg:flex-row lg:justify-center max-h-[calc(100vh_-_130px)] lg:max-h-fit overflow-y-auto">
            <div className="py-5 px-2.5 md:p-[30px] lg:p-[40px] lg:pr-[130px] w-full bg-background">
              <div className="relative max-w-[477px] h-full flex flex-col">
                <p className="xl mb-5 lg:mb-[30px] text-center lg:text-left">
                  {description}
                </p>
                <p className="mb-12 lg:mb-10 text-center lg:text-left">
                  <b>Расскажем о возможностях сервиса</b> и рассчитаем
                  целесообразность применения в вашей компании
                </p>
                <div className="hidden lg:flex flex-grow flex items-end">
                  <img src="/macbook.png" alt="" className="max-w-fit" />
                </div>
              </div>
            </div>

            <div className="-mt-14 lg:mt-0 lg:-ml-[110px] p-5 md:p-[30px] lg:p-[40px] lg:max-w-[460px] w-full bg-foreground z-10 rounded-section-mobile lg:rounded-section">
              <div className="mb-6 text-center text-lg lg:text-left lg:text-xl leading-[34px]">
                {formDescription}
              </div>
              <CallbackForm buttonText={buttonText} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
