import { Badge } from '../ui/badge';
import { IonIcon } from '@ionic/react';

function Footer() {
  const badgesClass = 'lg:text-sm text-xs';

  return (
    <footer className='bg-amber-800 text-white text-center space-y-10 p-6'>
      <header className='border-b-[1px] pb-10'>
        <h3 className='text-2xl font-bold mb-2'>Guillaume BESEME</h3>
        <h4 className='text-sm font-semibold'>ARTISAN &amp; FONDATEUR</h4>
      </header>

      <ul
        id='assets-badges-list'
        className='flex flex-wrap justify-center gap-x-2 gap-y-4'
      >
        <li>
          <Badge className={badgesClass}>Sellerie</Badge>
        </li>
        <li>
          <Badge className={badgesClass}>Restauration</Badge>
        </li>
        <li>
          <Badge className={badgesClass}>Personnalisation</Badge>
        </li>
        <li>
          <Badge className={badgesClass}>🇫🇷 Made in France 🇫🇷</Badge>
        </li>
      </ul>

      <div className='flex flex-col sm:flex-row justify-between items-center sm:px-12'>
        <div className='flex items-center gap-x-2 mb-6'>
          <IonIcon icon='location-outline' className='lg:text-4xl text-2xl' />
          <span className='lg:text-lg text-sm font-medium'>
            Fontainebleau, Seine-et-Marne, 77300
          </span>
        </div>

        <ul className='flex lg:text-5xl text-4xl gap-x-5'>
          <li>
            <a
              href='https://www.facebook.com/profile.php?id=61561555918052'
              target='_blank'
              aria-label='Facebook profile'
              className='active:opacity-80 transition-all duration-200'
            >
              <IonIcon icon='logo-facebook' />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/sell_deuche_77/'
              target='_blank'
              aria-label='Instagram profile'
              className='active:opacity-80 transition-all duration-200'
            >
              <IonIcon icon='logo-instagram' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
