import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './(content)/globals.css'
import clsx from 'clsx'
import { GoogleTagManager } from '@next/third-parties/google'

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
      {/* Google Tag Manager  */}
      <GoogleTagManager gtmId="GTM-5F3WV7LT" />
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5F3WV7LT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <div id="modal-root"></div>
        <div id="burger-root"></div>
        {children}
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  interactiveWidget: 'overlays-content',
}
