import { ReactElement } from 'react'

interface CaseCardProps {
  icon: ReactElement
  children: string
}

export const CaseCard = ({ icon, children }: CaseCardProps) => {
  return (
    <div className="flex flex-col gap-y-[30px] text-slate-800">
      {icon}
      <p className="text-[21px] leading-[34px]">{children}</p>
    </div>
  )
}
