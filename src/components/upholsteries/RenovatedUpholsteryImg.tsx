type RenovatedUpholsteryImgProps = {
  condition: string;
  i: number;
};

function RenovatedUpholsteryImg({ condition, i }: RenovatedUpholsteryImgProps) {
  return (
    <img
      src={`before-after-upholsteries/${i + 1}-${condition}.webp`}
      className='lg:max-w-[26rem] lg:max-h-[20rem] aspect-auto w-full max-h-[10rem]  rounded-lg shadow'
    />
  );
}

export default RenovatedUpholsteryImg;
