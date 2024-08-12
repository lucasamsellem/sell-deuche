const selleriesContainer = document.querySelector('.selleries-container');

const selleries = [
  {
    img: '/img/selleries/136.webp',
    alt: 'Sellerie en tissu beige rayé rouge pour 2CV6 Club 1981, avec plage arrière optionnelle',
    model: '2CV6 Club',
    material: 'Tissu',
    year: 1981,
    details: 'Avec plage arrière optionnelle',
  },
  {
    img: '/img/selleries/140.webp',
    alt: 'Sellerie en tissu écossais pour 2CV6 Spécial 1988, avec option sièges avant séparés',
    model: '2CV6 Spécial',
    material: 'Tissu écossais',
    year: 1988,
    details: 'Avec option sièges avant séparés',
  },
  {
    img: '/img/selleries/127.webp',
    alt: 'Sellerie en tissu gris losange pour 2CV6 Charleston 1989',
    model: '2CV6 Charleston',
    material: 'Tissu',
    year: 1989,
    details: 'Losange',
  },
  {
    img: '/img/selleries/161.webp',
    alt: 'Sellerie en Skaï noir perforé pour 2CV6 1971, avec plage arrière optionnelle',
    model: '2CV6',
    material: 'Skaï',
    year: 1971,
    details: 'Avec plage arrière optionnelle',
  },
  {
    img: '/img/selleries/103.webp',
    alt: 'Sellerie en tissu bleu diamanté / Skaï pour AMISUPER break 1974',
    model: 'AMISUPER break',
    material: 'Tissu / Skaï',
    year: 1974,
    details: '',
  },
  {
    img: '/img/selleries/91.webp',
    alt: 'Sellerie à deux banquettes en Skaï rouge rayé blanc pour 2CV6 Spécial 1987',
    model: '2CV6 Spécial',
    material: 'Skaï',
    year: 1987,
    details: '',
  },
  {
    img: '/img/selleries/85.webp',
    alt: 'Sellerie à deux banquettes en tissu rouge chenillé pour AMI6 berline 1963',
    model: 'AMI6 berline',
    material: 'Tissu',
    year: 1963,
    details: 'Chenillé',
  },
  {
    img: '/img/selleries/34.webp',
    alt: 'Sellerie en tissu MOSAÏQUE pour 2CV6 verte 1974',
    model: '2CV6 verte',
    material: 'Tissu',
    year: 1974,
    details: 'Mosaïque',
  },
  {
    img: '/img/selleries/IMG_4286.webp',
    alt: 'Sellerie à deux banquettes en tissu Bayadère blanc/vert pour 2CV AZ 1954',

    model: '2CV AZ',
    material: 'Tissu',
    year: 1954,
    details: 'Bayadère',
  },
  {
    img: '/img/selleries/IMG_3085.webp',
    alt: 'Sellerie en tissu « Feuille de Houx » avec boutons pour AMI6 berline belge 1967',
    model: 'AMI6 berline belge',
    material: 'Tissu « Feuille de Houx »',
    year: 1967,
    details: 'Avec boutons',
  },
  {
    img: '/img/selleries/IMG_0895.webp',
    alt: 'Sellerie en tissu orange rayé noir pour 2CV6 1979',
    model: '2CV6',
    material: 'Tissu',
    year: 1979,
    details: '',
  },
];

// Render selleries into the slider
function renderSelleries() {
  selleriesContainer.innerHTML = selleries
    .map(
      (el) => `
    <ul class="sellerie">
      <li class="sellerie-item">
        <figure class="sellerie-img-container">
          <img src="${el.img}" alt="${el.alt}" />
        </figure>
        <ul class="specs">
          <li>Matière : <strong>${el.material}</strong></li>
          <li>Modèle : <strong>${el.model}</strong></li>
          <li>Année : <strong>${el.year}</strong></li>
          <li><i>${el.details}</i></li>
        </ul>
      </li>
    </ul>
    `
    )
    .join('');
}
renderSelleries();

const selleriesImgs = document.querySelectorAll('.sellerie-img-container');

const imgModal = document.querySelector('.modal');
const imgModalContent = document.querySelector('.modal-content');
const modalCloseBtn = document.querySelector('.modal-close-btn');

// Full size img on click
selleriesImgs.forEach((img) => {
  img.addEventListener('click', (e) => {
    // Clear any previous content in the modal
    imgModalContent.innerHTML = '';

    // Create img element
    const imgElement = document.createElement('img');
    imgElement.src = e.target.src;
    imgElement.style.width = '100%';
    imgElement.style.borderRadius = '5px';

    // Append the new image to the modal content
    imgModalContent.appendChild(imgElement);

    // Show the modal
    imgModal.showModal();
  });
});

modalCloseBtn.addEventListener('click', () => {
  imgModal.close();
});

// CLOSE DIALOG WHEN CLICKING OUTSIDE MODAL
window.addEventListener('click', (e) => {
  if (e.target === imgModal) imgModal.close();
});
