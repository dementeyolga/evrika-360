import { CaseCard } from '@/components/(cards)/case-card'
import { usefulCases } from '@/data/useful-cases'

export const UseCases = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-[65px]">
      <div className="sticky top-20 mb-[207px] min-[342px]:mb-[175px] min-[645px]:mb-[140px] lg:mb-0 px-5 py-[33px] w-full lg:max-w-[735px] grow h-fit lg:p-[51px] bg-foreground rounded-section-mobile lg:rounded-section-md rounded-br-none lg:rounded-br-none">
        <h3>— Я правильно понимаю, что речевая аналитика полезна когда...</h3>
      </div>

      <div className="-mt-[167px] lg:shrink lg:-mt-2 lg:max-w-[310px] flex flex-col gap-y-[50px] lg:gap-y-[68px]">
        {usefulCases.map(({ imgSrc, text }) => (
          <CaseCard
            key={text}
            icon={
              <div>
                <img src={imgSrc} className="h-[60px] lg:h-auto" />
              </div>
            }
          >
            {text}
          </CaseCard>
        ))}
      </div>
    </div>
  )
}
