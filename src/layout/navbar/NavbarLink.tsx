function NavbarLink({
  link,
  children,
  toggleMobileMenu,
}: {
  link: string
  children: React.ReactNode
  toggleMobileMenu?: () => void
}) {
  return (
    <li>
      <a
        href={`#${link}`}
        className="font-semibold text-white lg:text-xl cursor-pointer opacity-80 hover:opacity-100 active:opacity-100 transition-all duration-200"
        onClick={toggleMobileMenu}
      >
        {children}
      </a>
    </li>
  )
}

export default NavbarLink
