export type Upholstery = {
  model: string;
  material: string;
  year: string;
  details?: string;
};

export const upholsteriesGallery: Upholstery[] = [
  {
    model: '2CV6 Club',
    material: 'Tissu beige rayé rouge',
    year: '1981',
    details: 'Avec plage arrière optionnelle',
  },
  {
    model: '2CV SPÉCIAL',
    material: 'Skaï caramel perforé',
    year: '1976',
  },
  {
    model: '2CV4/6',
    material: 'Tissu rouge à damier / losange',
    year: '1978',
    details: 'Avec option plage arrière Skaï noir',
  },
  {
    model: 'AMI8 berline Confort',
    material: 'Tissu velours bleu',
    year: '1969/1973',
  },
  {
    model: 'AMISUPER break',
    material: 'Tissu bleu diamanté / Skaï',
    year: '1974',
  },
  {
    model: '2CV6 Spécial',
    material: 'Skaï rouge rayé blanc',
    year: '1987',
  },
  {
    model: 'AMI8 berline / break CLUB',
    material: 'Skaï / tissu rouge diamanté',
    year: '1969/1973',
  },
  {
    model: '2CV6 verte',
    material: 'Tissu Mosaïque',
    year: '1974',
  },
  {
    model: '2CV AZ',
    material: 'Tissu Bayadère blanc / vert',
    year: '1954',
  },
  {
    model: 'AMI6 berline belge',
    material: 'Tissu « Feuille de Houx »',
    year: '1967',
    details: 'Avec boutons',
  },
  {
    model: '2CV6',
    material: 'Tissu orange rayé noir',
    year: '1979',
  },
  {
    model: 'série limitée 2CV « SPOT »',
    material: 'Tissu Jersey vénitien orange / Skaï',
    year: '1976',
  },
  {
    model: 'AMI8 berline CONFORT',
    material: 'Skaï perforé noir',
    year: '1969/1973',
  },
  {
    model: 'AMI8 break',
    material: 'Skaï lisse / perforé marron',
    year: '1973/1979',
  },
  {
    model: '2CV et DYANE',
    material: 'Tissu vert rayé / Skaï',
    year: '1979/1984',
  },
  {
    model: '2CV Spécial',
    material: 'Skaï aspect Jean’s bleu',
    year: '1987/1990',
  },
  {
    model: '2CV bleu Myosotis',
    material: 'Skaï lisse bleu rayé blanc',
    year: '1976',
  },
  {
    model: '2CV6 CHARLESTON / DOLLY',
    material: 'Tissu velours gris à coutures losange',
    year: '1982/1990',
    details: 'avec plage arrière optionnelle',
  },
  {
    model: '2CV et DYANE',
    material: 'Tissu beige rayé orange',
    year: '1979/1984',
  },
  {
    model: '2CV6 CLUB (option sur 2CV Spécial)',
    material: 'Tissu écossais',
    year: '1986/1990',
  },
  {
    model: '2CV6 et DYANE',
    material: 'Tissu marron rayé',
    year: '1979/1984',
  },
  {
    model: '2CV6',
    material: 'Skaï noir aéré / perforé',
    year: '1983',
  },
  {
    model: 'DYANE 6',
    material: 'Skaï marron « Caramel » aéré / perforé ',
    year: '1972',
    details: 'sellerie sur mesure',
  },
];

export const availableUpholsteries: Upholstery[] = [
  {
    model: '2CV Spécial',
    material: 'Skaï lisse noir',
    year: '1977/1987',
  },
  {
    model: '2CV6 « FRANCE 3 »',
    material: 'Tissu blanc rayé bleu',
    year: '1983',
  },
  {
    model: '2CV / DYANE',
    material: 'tissu losange rouge / noir',
    year: '1978',
  },
  {
    model: 'AMI6 break',
    material: 'tissu Armuré rouge',
    year: '1967',
  },
];

export const renovatedUpholsteries = Array.from({ length: 7 }, () => ({
  before: 'before',
  after: 'after',
}));

export const renovationTools = {
  'Outils de coupe': 'Ciseaux, Cutter',
  'Outils de vissage et perçage': 'Tournevis (plats et cruciformes), Forêts métaux',
  'Outils de préhension': 'Pinces (plate, courbée, coupante, à agrafe « nez de porc »)',
  'Outils de ponçage et nettoyage':
    'Brosses (à main, rotatives sur perceuse), Papier de verre, Cale à poncer, Pinceau, Vieille brosse à dents',
  'Produits et consommables':
    'Adhésifs (entoilés, TIRO de carrossier), Aérosols (dégraissant, silicone, peinture anticorrosion), Colle Néoprène, Nettoyant Acétone, Feutre noir',
  'Équipements de protection individuelle':
    'Gants anticoupures, Manchettes, Surlunettes de protection',
};
