import { PopupButton } from '@/components/(buttons)/features/popup-button'
import { CasesSlider } from '@/components/(sliders)/cases-slider'

export const SphereCases = () => {
  return (
    <div>
      <div className="relative mt-4 mb-10 lg:max-w-[787px] lg:ml-auto lg:mb-25 pt-[90px] px-5 pb-6 lg:py-[75px] lg:pr-[122px] lg:pl-226px bg-sky-500 text-font-contrast rounded-section-mobile lg:rounded-section-md rounded-bl-none lg:rounded-bl-none">
        <img
          className="absolute -top-[42px] left-5 w-[120px] lg:w-auto lg:top-auto lg:bottom-0 lg:-left-[21px]"
          src="/character-hand.png"
          alt=""
        />
        <h3>
          <b>— Да, и не только в этом</b>
        </h3>
      </div>

      <div>
        <CasesSlider />
        <div className="flex justify-center mt-5 lg:mt-[30px]">
          <PopupButton variant="test">
            Протестировать на своих данных
          </PopupButton>
        </div>
      </div>
    </div>
  )
}
