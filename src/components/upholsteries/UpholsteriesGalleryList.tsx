import { upholsteriesGallery } from '@/data/upholsteriesData';
import UpholsteryCard from './UpholsteryCard';
import ScrollableListWrapper from './ScrollableListWrapper';
import splitArrayIntoChunks from '@/utils/splitArrayIntoChunks';

function UpholsteriesGalleryList() {
  const lists = splitArrayIntoChunks(upholsteriesGallery, 3);

  return lists.map((list, colIndex) => (
    <ScrollableListWrapper>
      {list.map(({ material, model, year, details }, index) => (
        <li key={`gallery-${colIndex}-${index}`}>
          <UpholsteryCard
            material={material}
            model={model}
            year={year}
            details={details}
            isAvailable={false}
          />
        </li>
      ))}
    </ScrollableListWrapper>
  ));
}

export default UpholsteriesGalleryList;
