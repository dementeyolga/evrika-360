'use client'

import { ActionButton } from '@/components/(buttons)/action-button'
import { Header } from '@/components/header'
import Link from 'next/link'

export default function Error() {
  return (
    <div className="bg-background p-2.5 lg:p-5 flex flex-col items-center">
      <div className="px-2.5 md:px-10 lg:px-15 w-full max-w-7xl mx-auto bg-foreground rounded-section-mobile lg:rounded-section overflow-hidden">
        <Header />
        <div className="pt-10 pb-16 flex flex-col items-center gap-y-10">
          <h2>Произошла непредвиденная ошибка</h2>
          <Link href="/">
            <ActionButton>На главную</ActionButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
