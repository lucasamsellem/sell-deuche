import { availableUpholsteries } from '@/data/upholsteriesData'
import UpholsteryCard from './UpholsteryCard'
import { Badge } from '../ui/badge'
import ScrollableListWrapper from './ScrollableListWrapper'

function AvailableUpholsteriesList() {
  const badgeClasses = 'lg:text-sm text-[0.65rem]'

  return (
    <>
      <header className="flex justify-between">
        <Badge className={badgeClasses}>Tarif sur demande</Badge>
        <Badge className={badgeClasses}>Autres modèles sur commande</Badge>
      </header>

      <ScrollableListWrapper>
        {availableUpholsteries.map(({ material, model, year, details }, index) => (
          <li key={`available-${index}`}>
            <UpholsteryCard
              material={material}
              model={model}
              year={year}
              details={details}
              available={true}
            />
          </li>
        ))}
      </ScrollableListWrapper>
    </>
  )
}

export default AvailableUpholsteriesList
