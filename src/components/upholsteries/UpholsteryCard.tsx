import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Badge } from '../ui/badge';
import { formatImgName } from '@/utils/formatImgName';
import { getImagePath, getImagePathWithKit } from '@/utils/getImagePath';

type UpholsteryCardProps = {
  isAvailable: boolean;
  material: string;
  model: string;
  year: string;
  details?: string;
  isKit?: boolean;
  kitDetails?: string;
};

function UpholsteryCard({
  isAvailable,
  material,
  model,
  year,
  details,
  isKit = false,
  kitDetails,
}: UpholsteryCardProps) {
  const formattedImgName = formatImgName(material);
  const folderPath = isAvailable ? 'available-upholsteries/' : 'upholsteries/';
  const formattedImgPath = getImagePath(folderPath + formattedImgName);
  const formattedKitImgPath = getImagePathWithKit(folderPath + formattedImgName);

  return (
    <div
      className={`${isKit ? 'lg:w-[56rem] w-[26rem]' : 'lg:w-[28rem] w-[14rem]'} relative shadow my-5 rounded-lg`}
    >
      <div className='flex w-full'>
        <div className={`relative ${isKit ? 'w-1/2' : 'w-full'}`}>
          <img
            src={formattedImgPath}
            alt={`Sellerie en ${material}, modèle ${model}, année ${year}`}
            className={`w-full h-[22rem] object-cover rounded-tl-lg ${!isKit && 'rounded-tr-lg'}`}
          />

          {details && (
            <Badge className='absolute top-3 right-3 lg:text-[0.7rem] text-[0.5rem]'>
              {capitalizeFirstLetter(details)}
            </Badge>
          )}
        </div>

        {isKit && (
          <div className='relative w-1/2'>
            <img
              src={formattedKitImgPath}
              alt={`Kit sellerie en ${material}, modèle ${model}, année ${year}`}
              className='w-full h-[22rem] object-cover rounded-tr-lg'
            />

            {kitDetails && (
              <Badge className='absolute top-3 right-3 lg:text-[0.7rem] text-[0.5rem]'>
                {capitalizeFirstLetter(kitDetails)}
              </Badge>
            )}
          </div>
        )}
      </div>

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
