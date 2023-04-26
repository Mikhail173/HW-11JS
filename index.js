import { dataProducts } from "./data.js";

const productData = JSON.parse(dataProducts);
const productBox = document.querySelector(".product__box");

productData.forEach(({ name, image, price, color, size, quantity }) => {
  const productEl = `
  <div class="product">
            <button class="btn__del" type="button">Удалить</button>
            <div class="product__content">
                <img class="product__img" src="${image}" alt="${name}">
                <div class="product__desc">
                    <h2 class="product__name">${name}</h2>
                    <p class="product__price_label">Price: <span class="product__price">$${price}</span></p>
                    <p class="product__color">Color: ${color}</p>
                    <p class="product__size">Size: ${size}</p>
                    <div class="product__qty">
                        <label class="input__label">Quantity:</label>
                        <input class="input__quantity" type="number" value="${quantity}">
                    </div>
                    <div class="info"></div>
                </div>
            </div>
        </div>
  `;
  productBox.insertAdjacentHTML("beforeend", productEl);
});

const deleteButtons = document.querySelectorAll(".btn__del");

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    product.remove();
  });
});
