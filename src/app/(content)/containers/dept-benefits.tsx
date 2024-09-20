import { TickIcon } from '@/components/(icons)/tick-icon'
import { DeptBenefitsSlider } from '@/components/(sliders)/dept-benefits-slider'
import { ListItem } from '@/components/(text)/list-item'
import { deptBenefits } from '@/data/dept-benefits'

export const DeptBenefits = () => {
  return (
    <div>
      <div className="relative mb-[42px] lg:mb-20  lg:ml-42 pt-[90px] pb-[26px] px-5 lg:py-51px lg:pr-51px lg:pl-226px bg-sky-500 text-font-contrast rounded-section-mobile lg:rounded-section-md rounded-bl-none lg:rounded-bl-none">
        <img
          className="absolute w-[140px] h-[140px] -top-[70px] left-5 lg:w-fit lg:h-fit lg:-top-[83px] lg:-left-[69px]"
          src="/character-idea.png"
          alt=""
        />
        <h3 className="font-bold">Эврика360 — один сервис</h3>
        <h3>для большинства отделов в компании</h3>
      </div>

      <div className="-mb-[30px] lg:hidden overflow-x-hidden">
        <DeptBenefitsSlider />
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-x-5 gap-y-[63px]">
        {deptBenefits.map(({ dept, benefits }) => (
          <div key={dept} className="max-w-[281px] w-full">
            <TickIcon />
            <h4 className="mt-[31px] mb-4 font-bold">{dept}</h4>
            <div className="flex flex-col">
              {benefits.map((b) => (
                <ListItem key={b}>{b}</ListItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
