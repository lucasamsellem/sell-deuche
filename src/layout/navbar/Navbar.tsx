import { allImages } from '@/utils/getImagePath'
import NavbarLink from './NavbarLink'
import useToggle from '@/hooks/useToggle'

function Navbar() {
  const { isActive: isMobileMenuOpen, toggle: toggleMobileMenu } = useToggle()

  const navLinks = [
    { link: 'gallery', label: 'Galerie' },
    { link: 'available-upholsteries', label: 'Selleries' },
    { link: 'about', label: 'A propos' },
    { link: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed w-full z-[999] top-0 flex py-2 lg:px-12 px-6 bg-amber-800 justify-between items-center">
      <img
        src={allImages['/src/assets/logos/logo-trimmed.jpeg'] as string}
        alt="Logo Sell Deuche"
        className="bg-white p-1 rounded-lg lg:w-[8rem] w-[6rem]"
      />
      <nav className="hidden md:flex ">
        <ul className="flex gap-8">
          {navLinks.map(({ link, label }) => (
            <NavbarLink key={link} link={link}>
              {label}
            </NavbarLink>
          ))}
        </ul>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          ☰
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-18 right-0 bg-amber-800 w-full p-4">
            <ul className="flex items-center justify-center gap-4">
              {navLinks.map(({ link, label }) => (
                <NavbarLink key={link} link={link} toggleMobileMenu={toggleMobileMenu}>
                  {label}
                </NavbarLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
