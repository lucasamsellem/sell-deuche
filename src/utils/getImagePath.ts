// Chargement dynamique de toutes les images .webp dans assets
export const allImages = import.meta.glob('/src/assets/**/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const normalize = (s: string) => s.normalize('NFC');

// Index des images avec des clés normalisées (calculé une seule fois)
const normalizedImages: Record<string, string> = Object.fromEntries(
  Object.entries(allImages).map(([key, value]) => [normalize(key), value as string]),
);

const safeDecode = (s: string) => {
  try {
    return decodeURIComponent(s);
  } catch {
    return s; // ex: "%" littéral dans le nom
  }
};

export const getImagePath = (path: string): string => {
  const candidates = [
    path,
    safeDecode(path),
    safeDecode(path.replace(/\+/g, ' ')), // "+" utilisé comme espace (query string)
  ];

  for (const candidate of candidates) {
    const found = normalizedImages[normalize(`/src/assets/${candidate}.webp`)];
    if (found) return found;
  }

  console.warn(`Image introuvable : ${path}`);
  return '';
};

export const getImagePathWithKit = (path: string) =>
  allImages[`/src/assets/${path}-kit.webp`] as string;
