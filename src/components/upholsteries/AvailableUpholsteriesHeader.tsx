import { Badge } from '../ui/badge';

function AvailableUpholsteriesHeader() {
  const badgeClasses = 'lg:text-sm text-[0.65rem]';

  return (
    <header className='flex justify-between'>
      <Badge className={badgeClasses}>Tarif sur demande</Badge>
      <Badge className={badgeClasses}>Autres modèles sur commande</Badge>
    </header>
  );
}

export default AvailableUpholsteriesHeader;
