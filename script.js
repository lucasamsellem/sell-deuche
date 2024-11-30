// Conteneurs où les selleries seront affichées
const selleriesListContainers = [
  document.querySelector('.row-1'),
  document.querySelector('.row-2'),
  document.querySelector('.row-3'),
  document.querySelector('.available-selleries-list'),
];

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const selleriesData = [
  [
    {
      img: '/img/selleries/136.webp',
      alt: 'Sellerie en tissu beige rayé rouge pour 2CV6 Club de 1981, avec plage arrière optionnelle',
      model: '2CV6 Club',
      material: 'Tissu beige rayé rouge',
      year: 1981,
      details: 'Avec plage arrière optionnelle',
    },
    {
      img: '/img/selleries/140.webp',
      alt: 'Sellerie en tissu écossais pour 2CV6 Spécial de 1988, avec option sièges avant séparés',
      model: '2CV6 Spécial',
      material: 'Tissu écossais',
      year: 1988,
      details: 'Avec option sièges avant séparés',
    },
    {
      img: '/img/selleries/127.webp',
      alt: 'Sellerie en tissu gris à motifs losange pour 2CV6 Charleston de 1982 à 1990',
      model: '2CV CHARLESTON',
      material: 'Tissu gris à motifs losange',
      year: '1982/1990',
      details: '',
    },
    {
      img: '/img/selleries/image3.png',
      alt: 'Sellerie en tissu velours bleu pour AMI8 berline Confort de 1969 à 1973',
      model: 'AMI8 berline Confort',
      material: 'Tissu velours bleu',
      year: '1969/1973',
      details: '',
    },
    {
      img: '/img/selleries/103.webp',
      alt: 'Sellerie en tissu bleu diamanté et Skaï pour AMISUPER break de 1974',
      model: 'AMISUPER break',
      material: 'Tissu bleu diamanté / Skaï',
      year: 1974,
      details: '',
    },
    {
      img: '/img/selleries/91.webp',
      alt: 'Sellerie en Skaï rouge rayé blanc pour 2CV6 Spécial de 1987',
      model: '2CV6 Spécial',
      material: 'Skaï rouge rayé blanc',
      year: 1987,
      details: '',
    },
  ],
  [
    {
      img: '/img/selleries/AMI8-rouge.jpeg',
      alt: 'Sellerie en Skaï et tissu rouge diamanté pour AMI8 berline / break CLUB de 1969 à 1973',
      model: 'AMI8 berline / break CLUB',
      material: 'Skaï / tissu rouge diamanté',
      year: '1969/1973',
      details: '',
    },
    {
      img: '/img/selleries/34.webp',
      alt: 'Sellerie en tissu Mosaïque pour 2CV6 verte de 1974',
      model: '2CV6 verte',
      material: 'Tissu Mosaïque',
      year: 1974,
      details: '',
    },
    {
      img: '/img/selleries/IMG_4286.webp',
      alt: 'Sellerie en tissu Bayadère blanc/vert pour 2CV AZ de 1954',
      model: '2CV AZ',
      material: 'Tissu Bayadère blanc/vert',
      year: 1954,
      details: '',
    },
    {
      img: '/img/selleries/IMG_3085.webp',
      alt: 'Sellerie en tissu « Feuille de Houx » avec boutons pour AMI6 berline belge de 1967',
      model: 'AMI6 berline belge',
      material: 'Tissu « Feuille de Houx »',
      year: 1967,
      details: 'Avec boutons',
    },
    {
      img: '/img/selleries/IMG_0895.webp',
      alt: 'Sellerie en tissu orange rayé noir pour 2CV6 de 1979',
      model: '2CV6',
      material: 'Tissu orange rayé noir',
      year: 1979,
      details: '',
    },
    {
      img: '/img/selleries/jersey-vénitien.webp',
      alt: 'Sellerie en tissu Jersey vénitien orange pour série limitée 2CV « SPOT » de 1976',
      model: 'série limitée 2CV « SPOT »',
      material: 'Tissu Jersey vénitien orange / Skaï',
      year: 1976,
      details: '',
    },
  ],
  [
    {
      img: '/img/selleries/skai-perforé-noir.jpeg',
      alt: 'Sellerie en Skaï perforé noir pour AMI8 berline CONFORT de 1969 à 1973',
      model: 'AMI8 berline CONFORT',
      material: 'Skaï perforé noir',
      year: '1969/1973',
      details: '',
    },
    {
      img: '/img/selleries/skai-marron.jpeg',
      alt: 'Sellerie en Skaï lisse/perforé marron pour AMI8 break de 1973 à 1979',
      model: 'AMI8 break',
      material: 'Skaï lisse/perforé marron',
      year: '1973/1979',
      details: '',
    },
    {
      img: '/img/selleries/tissu-vert.jpeg',
      alt: 'Sellerie en tissu vert rayé et Skaï pour 2CV et DYANE de 1979 à 1984',
      model: '2CV et DYANE',
      material: 'Tissu vert rayé / Skaï',
      year: '1979/1984',
      details: '',
    },
    {
      img: '/img/selleries/skai-jean.jpeg',
      alt: 'Sellerie en Skaï aspect Jean’s bleu pour 2CV Spécial de 1987 à 1990',
      model: '2CV Spécial',
      material: 'Skaï aspect Jean’s bleu',
      year: '1987/1990',
      details: '',
    },
    {
      img: '/img/selleries/Skai-bleu-rayé.webp',
      alt: 'Sellerie en Skaï lisse bleu rayé blanc pour 2CV bleu Myosotis de 1976',
      model: '2CV bleu Myosotis',
      material: 'Skaï lisse bleu rayé blanc',
      year: 1976,
      details: '',
    },
  ],
  [
    // SELLERIES DISPO
    {
      img: '/img/selleries-dispo/Skaï perforé anthracite.jpeg',
      alt: 'Sellerie en Skaï perforé anthracite pour 2CV4/6 de 1968 à 1972',
      model: '2CV4/6',
      material: 'Skaï perforé anthracite',
      year: '1968/1972',
      details: 'Avec plage arrière optionnelle',
    },
    {
      img: '/img/selleries-dispo/Tissu bleu rayé 2CV46 DYANE.jpeg',
      alt: 'Sellerie en tissu bleu rayé pour modèles 2CV4/6 et DYANE de 1978 à 1984',
      model: '2CV4/6 + DYANE',
      material: 'Tissu bleu rayé',
      year: '1978/1984',
      details: '',
    },
    {
      img: '/img/selleries-dispo/skai-lisse-noir-2CV-special.jpeg',
      alt: 'Sellerie en skaï lisse noir pour modèles 2CV Spécial de 1977 à 1987',
      model: '2CV Spécial',
      material: 'Skaï lisse noir',
      year: '1977/1987',
      details: '',
    },
  ],
];

function renderSelleries(selleriesList, container) {
  container.innerHTML = selleriesList
    .map(
      ({ img, alt, material, model, year, details }) =>
        `<li class="sellerie-item">
          <figure class="sellerie-img-container">
            <img src="${img}" alt="${alt}" loading="lazy" />
          </figure>
          
          <ul class="specs">
            <li>Matière : <strong>${capitalizeFirstLetter(
              material
            )}</strong></li>
            <li>Modèle : <strong>${capitalizeFirstLetter(model)}</strong></li>
            <li>Année : <strong>${year}</strong></li>
            <li class='sellerie-details'>${
              details ? capitalizeFirstLetter(details) : ''
            }</li>
          </ul>
        </li>`
    )
    .join('');
}

selleriesListContainers.forEach((list, i) =>
  renderSelleries(selleriesData[i], list)
);
