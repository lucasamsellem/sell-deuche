import { upholsteriesGallery } from '@/data/upholsteriesData'
import UpholsteryCard from './UpholsteryCard'
import ScrollableListWrapper from './ScrollableListWrapper'

function UpholsteriesGalleryList() {
  return (
    <ScrollableListWrapper>
      {upholsteriesGallery.map(({ material, model, year, details }, index) => (
        <li key={`gallery-${index}`}>
          <UpholsteryCard
            material={material}
            model={model}
            year={year}
            details={details}
            available={false}
          />
        </li>
      ))}
    </ScrollableListWrapper>
  )
}

export default UpholsteriesGalleryList
