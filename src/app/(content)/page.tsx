import { Promo } from './containers/promo'
import { DeptBenefits } from './containers/dept-benefits'
import { UseCases } from './containers/use-cases'
import { SphereCases } from './containers/shere-cases'
import { SignForTour } from './containers/sign-for-tour'

export default function HomePage() {
  return (
    <div className="bg-background p-2.5 lg:p-5 flex flex-col items-center gap-y-block-mobile lg:gap-y-block">
      <Promo />

      <div className="px-2.5 md:px-10 lg:px-15 mx-auto w-full max-w-7xl flex flex-col gap-y-block-mobile lg:gap-y-block">
        <DeptBenefits />
        <UseCases />
        <SphereCases />
      </div>

      <SignForTour />
    </div>
  )
}
