import { allImages } from '@/utils/getImagePath';
import useToggle from '@/hooks/useToggle';

function NavbarLink({
  link,
  children,
  toggleMobileMenu,
}: {
  link: string;
  children: React.ReactNode;
  toggleMobileMenu?: () => void;
}) {
  return (
    <li>
      <a
        href={`#${link}`}
        className='font-semibold text-white lg:text-xl cursor-pointer opacity-80 hover:opacity-100 active:opacity-100 transition-all duration-200'
        onClick={toggleMobileMenu}
      >
        {children}
      </a>
    </li>
  );
}

function Header() {
  const { isActive: isMobileMenuOpen, toggle: toggleMobileMenu } = useToggle();

  const navLinks = [
    { link: 'gallery', label: 'Galerie' },
    { link: 'available-upholsteries', label: 'Selleries' },
    { link: 'about', label: 'A propos' },
    { link: 'contact', label: 'Contact' },
  ];

  return (
    <header className='fixed w-full z-[999] top-0 flex py-2 lg:px-12 px-6 bg-amber-800 justify-between items-center'>
      <img
        src={allImages['/src/assets/logos/logo-trimmed.jpeg'] as string}
        alt='Logo Sell Deuche'
        className='bg-white p-1 rounded-lg lg:w-[8rem] w-[6rem]'
      />
      <nav className='hidden md:flex '>
        <ul className='flex gap-8'>
          {navLinks.map(({ link, label }) => (
            <NavbarLink key={link} link={link}>
              {label}
            </NavbarLink>
          ))}
        </ul>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMobileMenu} className='text-white text-2xl'>
          ☰
        </button>
        {isMobileMenuOpen && (
          <div className='absolute top-18 right-0 bg-amber-800 w-full p-4'>
            <ul className='flex items-center justify-center gap-4'>
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
  );
}

export default Header;
