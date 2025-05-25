type RenovatedUpholsteryImgProps = {
  condition: string
  i: number
}

function RenovatedUpholsteryImg({ condition, i }: RenovatedUpholsteryImgProps) {
  return (
    <img
      src={`/src/assets/before-after-upholsteries/${i + 1}-${condition}.webp`}
      className="object-scale-down lg:max-h-full lg:max-w-full max-h-[6.5rem] rounded-lg shadow"
    />
  )
}

export default RenovatedUpholsteryImg
