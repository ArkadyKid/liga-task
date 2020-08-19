const catalog = document.querySelector('.catalog__list');

export default (data) => {
  catalog.innerHTML = '';
  console.log(data);
  data.forEach((product) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const divWrapper = document.createElement('div');
    const spanTitle = document.createElement('span');
    const dl = document.createElement('dl');
    const divSizeOption = document.createElement('div');
    const dtSize = document.createElement('dt');
    const ddSize = document.createElement('dd');
    const divSquareOption = document.createElement('div');
    const dtSquare = document.createElement('dt');
    const ddSquare = document.createElement('dd');
    const divFeatureOption = document.createElement('div');
    const dtFeature = document.createElement('dt');
    const divIconsFeature = document.createElement('div');
    const ddFeature = document.createElement('dd');
    const divPriceOption = document.createElement('div');
    const dtPrice = document.createElement('dt');
    const ddPrice = document.createElement('dd');
    const button = document.createElement('button');
    const spanButton = document.createElement('span');

    li.classList.add('catalog__item');
    catalog.append(li);
    img.src = `./assets/img/items/${product.img}`;
    img.alt = product.alt;
    li.append(img);
    divWrapper.classList.add('catalog__item-wrapper');
    spanTitle.classList.add('catalog__title-item');
    spanTitle.textContent = product.title;
    divWrapper.append(spanTitle);
    li.append(divWrapper);
    dl.classList.add('catalog__item-options');
    divWrapper.append(dl);
    divSizeOption.classList.add('catalog__item-option');
    dl.append(divSizeOption);
    dtSize.textContent = 'Размеры (ШхГхВ) -';
    ddSize.textContent = `${product.size} см`;
    if (!product.size) {
      divSizeOption.classList.add('catalog__item-option--hidden');
    }
    divSizeOption.append(dtSize);
    divSizeOption.append(ddSize);
    divSquareOption.classList.add('catalog__item-option');
    dl.append(divSquareOption);
    dtSquare.textContent = 'Площадь -';
    ddSquare.textContent = `${product.square} м2`;
    divSquareOption.append(dtSquare);
    divSquareOption.append(ddSquare);
    divFeatureOption.classList.add('catalog__item-option');
    dl.append(divFeatureOption);
    dtFeature.textContent = 'Оснащение номера';
    divFeatureOption.append(dtFeature);
    divFeatureOption.append(ddFeature);
    divIconsFeature.classList.add('catalog__item-icons');
    ddFeature.append(divIconsFeature);
    product.icons.forEach((icon) => {
      const imgIcon = document.createElement('img');
      imgIcon.src = `./assets/img/icons/option/${icon.src}`;
      imgIcon.alt = icon.alt;
      imgIcon.width = 16;
      imgIcon.height = 16;
      divIconsFeature.append(imgIcon);
    });
    divPriceOption.classList.add('catalog__item-option');
    divPriceOption.classList.add('catalog__item-option--price');
    dl.append(divPriceOption);
    dtPrice.textContent = 'Цена за сутки:';
    ddPrice.textContent = `${product.price} \u20bd`;
    divPriceOption.append(dtPrice);
    divPriceOption.append(ddPrice);
    button.classList.add('catalog__item-button');
    button.type = 'button';
    divWrapper.append(button);
    spanButton.textContent = 'Забронировать';
    button.append(spanButton);
  });
};
