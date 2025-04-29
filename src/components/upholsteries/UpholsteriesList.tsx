import UpholsteryCard from './UpholsteryCard'
import { Upholstery } from '@/data/upholsteriesData'

type UpholsteriesListProps = {
  upholsteriesGallery?: Upholstery[][]
  availableUpholsteries?: Upholstery[]
}

function UpholsteriesList({
  upholsteriesGallery = [],
  availableUpholsteries = [],
}: UpholsteriesListProps) {
  return (
    <ul id="upholsteries-list" className="flex gap-x-10 overflow-x-scroll">
      {upholsteriesGallery.flat().map(({ material, model, year, details }, index) => (
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
    </ul>
  )
}

export default UpholsteriesList
