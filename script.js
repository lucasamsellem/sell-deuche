const selleriesContainer = document.querySelector('.selleries-container');

const availableSelleriesContainer = document.querySelector(
  '.available-selleries-container'
);

const selleries = [
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
    alt: 'Sellerie en tissu gris losange pour 2CV6 Charleston de 1989',
    model: '2CV6 Charleston',
    material: 'Tissu gris losange',
    year: 1989,
    details: '',
  },
  {
    img: '/img/selleries/image3.jpeg',
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
  {
    img: '/img/selleries/image4.jpeg',
    alt: 'Sellerie en Skaï et tissu rouge diamanté pour AMI8 berline / break CLUB de 1969 à 1973',
    model: 'AMI8 berline / break CLUB',
    material: 'Skaï / tissu rouge diamanté',
    year: '1969 / 1973',
    details: 'Chenillé',
  },
  {
    img: '/img/selleries/34.webp',
    alt: 'Sellerie en tissu MOSAÏQUE pour 2CV6 verte de 1974',
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
];

const availableSelleries = [
  {
    img: '/img/selleries-dispo/Skaï perforé anthracite.jpeg',
    alt: 'Sellerie en Skaï perforé anthracite pour 2CV4/6 de 1968 à 1972',
    model: '2CV4/6',
    material: 'Skaï perforé anthracite',
    year: '1968/1972',
    details: 'Avec plage arrière optionnelle',
  },
  {
    img: '/img/selleries-dispo/Skaï Jean’s délavé.jpeg',
    alt: 'Sellerie en Skaï Jean’s délavé pour 2CV6 Spécial et COCORICO de 1986 à 1990',
    model: '2CV6 Spécial et COCORICO',
    material: 'Skaï Jean’s délavé',
    year: '1986/1990',
    details: '',
  },
  {
    img: '/img/selleries-dispo/Skaï lisse noir.jpeg',
    alt: 'Sellerie en Skaï lisse noir pour 2CV6 et DYANE de 1978 à 1982',
    model: '2CV6 et DYANE',
    material: 'Skaï lisse noir',
    year: '1978/1982',
    details: 'Avec plage arrière optionnelle',
  },
  {
    img: '/img/selleries-dispo/tissu bleu rayé.jpeg',
    alt: 'Sellerie en tissu bleu rayé pour 2CV4/6 et DYANE de 1978 à 1984',
    model: '2CV4/6 et DYANE',
    material: 'Tissu bleu rayé',
    year: '1978/1984',
    details: '',
  },
  {
    img: '/img/selleries-dispo/tissu velours CHENILLÉ rouge.jpeg',
    alt: 'Sellerie en tissu velours CHENILLÉ rouge pour AMI6 berline et break de 1961 à 1968',
    model: 'AMI6 berline et break',
    material: 'Tissu velours CHENILLÉ rouge',
    year: '1961/1968',
    details: '',
  },
];

// Capitalize the first letter of a string
const formatFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

// Reusable function to render selleries
function renderSelleries(selleriesList, container) {
  container.innerHTML = selleriesList
    .map(
      ({ img, alt, material, model, year, details }) => `
      <ul class="sellerie">
        <li class="sellerie-item">
          <figure class="sellerie-img-container">
            <img src="${img}" alt="${alt}" />
          </figure>
          <ul class="specs">
            <li>Matière : <strong>${formatFirstLetter(material)}</strong></li>
            <li>Modèle : <strong>${formatFirstLetter(model)}</strong></li>
            <li>Année : <strong>${year}</strong></li>
            <li><i>${details ? formatFirstLetter(details) : ''}</i></li>
          </ul>
        </li>
      </ul>`
    )
    .join('');
}

renderSelleries(selleries, selleriesContainer);
renderSelleries(availableSelleries, availableSelleriesContainer);
