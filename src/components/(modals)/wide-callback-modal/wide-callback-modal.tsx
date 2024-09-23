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
    <Modal reference={reference} onClick={onClick}>
      <div className="self-start relative mx-2.5 mt-[90px] mb-[60px] ">
        <button
          onClick={handleCloseModal}
          className="absolute left-1/2 -top-[60px] -translate-x-1/2 w-[50px] h-[50px] bg-foreground flex justify-center items-center rounded-full"
        >
          <img src="/cross.svg" alt="" />
        </button>

        <div className="relative max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] w-full rounded-section-mobile lg:rounded-section-sm overflow-hidden bg-foreground">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="py-5 px-2.5 md:py-[20px] md:px-[26px] lg:pr-[130px] xl:pr-[130px] xl:p-[40px]  w-full bg-background">
              <div className="relative lg:max-w-[350px] xl:max-w-[477px] h-full flex flex-col">
                <p className="xl mb-3 lg:mb-[30px] text-center lg:text-left">
                  {description}
                </p>
                <p className="mb-12 lg:mb-10 text-center lg:text-left">
                  <b>Расскажем о возможностях сервиса</b> и рассчитаем
                  целесообразность применения в вашей компании
                </p>
                <div className="hidden lg:flex flex-grow flex items-end">
                  <img src="/macbook.png" alt="" />
                </div>
              </div>
            </div>

            <div className="-mt-14 lg:mt-0 lg:-ml-[110px] p-5 md:py-[22px] md:px-[26px] lg:max-w-[460px] w-full overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 bg-foreground z-10 rounded-section-mobile lg:rounded-section-sm">
              <div className="mb-4 xl:mb-5 text-center text-lg lg:text-left lg:text-xl">
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
