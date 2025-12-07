import { getImagePath } from '@/utils/getImagePath';

type RenovatedUpholsteryImgProps = {
  condition: string;
  i: number;
};

function RenovatedUpholsteryImg({ condition, i }: RenovatedUpholsteryImgProps) {
  const imgPath = getImagePath(`before-after-upholsteries/${i + 1}-${condition}`);

  return <img src={imgPath} className='object-cover w-1/2' />;
}

export default RenovatedUpholsteryImg;
