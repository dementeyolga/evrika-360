import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './(content)/globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Эврика 360 - Стратегии правильных решений',
  description:
    'Доверьте анализ и оценку качества работы сотрудников речевой аналитике сегодня',
}

const dmSans = localFont({
  src: [
    {
      path: './(content)/fonts/DMSansRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './(content)/fonts/DMSansItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './(content)/fonts/DMSansMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './(content)/fonts/DMSansMediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './(content)/fonts/DMSansBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './(content)/fonts/DMSansBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-dmsans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={clsx(dmSans.variable)}>
      <body className="font-sans">
        <div id="modal-root"></div>
        {children}
      </body>
    </html>
  )
}