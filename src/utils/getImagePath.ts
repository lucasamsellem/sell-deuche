// Chargement dynamique de toutes les images .webp dans assets
const allImages = import.meta.glob('/src/assets/**/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

export function getImagePath(filename: string, isAvailable: boolean) {
  const folder = isAvailable ? 'available-upholsteries' : 'upholsteries'
  const key = `/src/assets/${folder}/${filename}.webp`
  return allImages[key]
}
