const catalog = document.querySelector('[data-card="catalog"]');

export default (items) => {
  catalog.innerHTML = '';
  items.forEach((item) => {
    const cardTemplate = document.querySelector('[data-card="card-template"]').content.querySelector('[data-card="card"]');
    const cardElement = cardTemplate.cloneNode(true);
    const imgElement = cardElement.querySelector('[data-card="img"]');
    const titleElement = cardElement.querySelector('[data-card="title"]');
    const sizeOptionElement = cardElement.querySelector('[data-card="size"]');
    const squareOptionElement = cardElement.querySelector('[data-card="square"]');
    const featuresOptionsElement = cardElement.querySelector('[data-card="features"]');
    imgElement.src = `./assets/img/items/${item.img}`;
    imgElement.alt = item.alt;
    titleElement.textContent = item.title;
    sizeOptionElement.textContent = `${item.size} см`;
    squareOptionElement.textContent = `${item.square} м2`;
    if (!item.size) {
      sizeOptionElement.parentElement.classList.add('catalog__item-option--hidden');
    }
    item.features.forEach((feature) => {
      const featureTemplate = document.querySelector('[data-card="feature-template"]').content.querySelector('[data-card="feature"]');
      const featureElement = featureTemplate.cloneNode(true);
      featureElement.src = `./assets/img/icons/option/${feature.src}`;
      featureElement.alt = feature.alt;
      featureElement.width = 16;
      featureElement.height = 16;
      featuresOptionsElement.append(featureElement);
    });
    const priceOptionElement = cardElement.querySelector('[data-card="price"]');
    priceOptionElement.textContent = item.price;
    catalog.append(cardElement);
  });
};
