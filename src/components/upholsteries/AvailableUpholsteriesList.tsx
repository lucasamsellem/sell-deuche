import { availableUpholsteries } from '@/data/upholsteriesData';
import UpholsteryCard from './UpholsteryCard';
import { Badge } from '../ui/badge';
import ScrollableListWrapper from './ScrollableListWrapper';

const BADGE_CLASSES = 'lg:text-sm text-[0.65rem]';

function AvailableUpholsteriesList() {
  return (
    <>
      <header className='flex justify-between'>
        <Badge className={BADGE_CLASSES}>Tarif sur demande</Badge>
        <Badge className={BADGE_CLASSES}>Autres modèles sur commande</Badge>
      </header>

      <ScrollableListWrapper>
        {availableUpholsteries.map(({ material, model, year, details }, index) => (
          <li key={`available-${index}`}>
            <UpholsteryCard
              material={material}
              model={model}
              year={year}
              details={details}
              isAvailable={true}
            />
          </li>
        ))}
      </ScrollableListWrapper>
    </>
  );
}

export default AvailableUpholsteriesList;
