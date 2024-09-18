export const ContactPhone = () => {
  return (
    <div className="flex flex-col gap-1">
      <a href="tel: +375293885512" className="text-xl font-bold flex gap-1">
        +375-29-388-55-12 <img src="/arrow.svg" alt="arrow icon" />
      </a>
      <p className="smallest text-font-secondary">Пн-Пт: с 09-00 до 18-00</p>
    </div>
  )
}
