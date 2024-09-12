import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './(content)/globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Эврика 360 - Стратегии правильных решений',
  description:
    'Доверьте анализ и оценку качества работы сотрудников речевой аналитике сегодня',
}

const dmSans = localFont({
  src: './(content)/fonts/DMSans-Regular.ttf',
  display: 'swap',
  variable: '--font-dmsans',
})
const dmSansBold = localFont({
  src: './(content)/fonts/DMSans-Bold.ttf',
  display: 'swap',
  variable: '--font-dmsans-bold',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={[dmSans.variable, dmSansBold.variable].join(' ')}
    >
      <body>{children}</body>
    </html>
  )
}
