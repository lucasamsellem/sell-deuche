import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Badge } from '../ui/badge';
import { formatImgName } from '@/utils/formatImgName';
import { getImagePath } from '@/utils/getImagePath';

type UpholsteryCardProps = {
  isAvailable: boolean;
  material: string;
  model: string;
  year: string;
  details?: string;
};

function UpholsteryCard({ isAvailable, material, model, year, details }: UpholsteryCardProps) {
  const formattedImgName = formatImgName(material);
  const folderPath = isAvailable ? 'available-upholsteries/' : 'upholsteries/';
  const formattedImgPath = getImagePath(folderPath + formattedImgName);

  return (
    <div className='lg:w-[28rem] w-[14rem] relative shadow my-5 rounded-lg'>
      <img
        src={formattedImgPath}
        alt={`Sellerie en ${material}, modèle ${model}, année ${year}`}
        className='rounded-t-lg w-full h-[22rem] object-cover'
      />

      {details && (
        <Badge className='absolute top-3 right-3 lg:text-[0.7rem] text-[0.5rem]'>
          {capitalizeFirstLetter(details)}
        </Badge>
      )}

      <ul className='flex flex-col gap-1 lg:text-[1rem] text-xs bg-white p-5 text-center rounded-b-lg'>
        <li>
          <span className='font-medium'>Matière :</span>{' '}
          <strong>{capitalizeFirstLetter(material)}</strong>
        </li>
        <li>
          <span className='font-medium'>Modèle :</span>{' '}
          <strong>{capitalizeFirstLetter(model)}</strong>
        </li>
        <li>
          <span className='font-medium'>Année :</span> <strong>{year}</strong>
        </li>
      </ul>
    </div>
  );
}

export default UpholsteryCard;
