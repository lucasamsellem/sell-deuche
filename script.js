// SLIDER
// const slider = document.querySelector('.slider');
// const visibleItems = 1;
// const computedStyle = window.getComputedStyle(slider);
// const sliderGap = Number(computedStyle.getPropertyValue('gap').slice(0, 2));
// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');

// SELLERIES
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
  {
    img: '/img/selleries/AMI8 rouge.jpeg',
    alt: 'Sellerie en Skaï et tissu rouge diamanté pour AMI8 berline / break CLUB de 1969 à 1973',
    model: 'AMI8 berline / break CLUB',
    material: 'Skaï / tissu rouge diamanté',
    year: '1969/1973',
    details: '',
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
    img: '/img/selleries-dispo/tissu rayé marron.jpeg',
    alt: 'Sellerie en tissu rayé marron pour 2CV4/6 de 1978 à 1984',
    model: '2CV4/6',
    material: 'tissu rayé marron',
    year: '1978/1984',
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

// // Define sellerie item width dynamically
// let sellerieItemWidth;
// const sellerieItem = document.querySelector('.sellerie-item');

// const resizeObserver = new ResizeObserver(() => {
//   sellerieItemWidth = sellerieItem.clientWidth;

//   selleriesContainer.style.width = `${
//     (sellerieItemWidth + sliderGap / visibleItems) * visibleItems
//   }px`;
// });
// resizeObserver.observe(sellerieItem);

// // SLIDER
// let currentIndex = 0;

// function translateX() {
//   slider.style.transform = `translateX(-${
//     currentIndex * ((sellerieItemWidth + sliderGap) * visibleItems)
//   }px)`;
// }

// nextBtn.addEventListener('click', () => {
//   currentIndex++;
//   if (currentIndex >= slider.children.length / visibleItems) {
//     currentIndex = 0;
//   }
//   translateX();
// });

// prevBtn.addEventListener('click', () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = slider.children.length / visibleItems - 1;
//   }
//   translateX();
// });
