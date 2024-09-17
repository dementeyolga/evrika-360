import { ReactElement } from 'react'

interface CaseCardProps {
  icon: ReactElement
  children: string
}

export const CaseCard = ({ icon, children }: CaseCardProps) => {
  return (
    <div className="flex flex-col gap-y-[26px] lg:gap-y-[30px] text-slate-800">
      {icon}
      <p className="text-[16px] leading-[29px] lg:text-[21px] lg:leading-[34px]">
        {children}
      </p>
    </div>
  )
}
