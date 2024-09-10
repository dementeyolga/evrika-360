import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Эврика 360 - Стратегии правильных решений',
  description:
    'Доверьте анализ и оценку качества работы сотрудников речевой аналитике сегодня',
}

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  )
}
