import clsx from 'clsx'

interface MessengerIconProps {
  variant: 'telegram' | 'whatsapp'
  href: string
}

export const MessengerIcon = ({ variant, href }: MessengerIconProps) => {
  let data: { src: string; color: 'bg-green-200' | 'bg-sky-200' }

  switch (variant) {
    case 'telegram':
      data = {
        color: 'bg-sky-200',
        src: '/telegram-icon.svg',
      }
      break
    case 'whatsapp':
      data = {
        color: 'bg-green-200',
        src: '/whatsapp-icon.svg',
      }
  }

  return (
    <a
      href={href}
      className={clsx(
        'w-10 h-10 flex items-center justify-center rounded-full',
        data.color,
      )}
    >
      <img src={data.src} alt={variant} />
    </a>
  )
}
