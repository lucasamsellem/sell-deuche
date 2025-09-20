import { getImagePath } from '@/utils/getImagePath';

type RenovatedUpholsteryImgProps = {
  condition: string;
  i: number;
};

function RenovatedUpholsteryImg({ condition, i }: RenovatedUpholsteryImgProps) {
  return (
    <img
      src={getImagePath(`before-after-upholsteries/${i + 1}-${condition}`)}
      className='object-scale-down lg:max-h-full lg:max-w-full max-h-[6.5rem] rounded-lg'
    />
  );
}

export default RenovatedUpholsteryImg;
