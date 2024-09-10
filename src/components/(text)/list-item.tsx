export const ListItem = ({ children }: { children: string }) => {
  return (
    <p className="flex gap-x-5 text-font-secondary">
      <img className="" src="/bullet.svg" alt="bullet icon" />
      {children}
    </p>
  )
}
