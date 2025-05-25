// Chargement dynamique de toutes les images .webp dans assets
export const allImages = import.meta.glob('/src/assets/**/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

export const getImagePath = (path: string) => allImages[`/src/assets/${path}.webp`] as string
