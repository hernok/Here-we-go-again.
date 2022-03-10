let products = [];
let productContainer = document.getElementById("input-container");
let inputProductNameEnough = document.getElementById(
  "input-product-name-enough"
);
let inputProductNameSoonEmpty = document.getElementById(
  "input-product-name-soon-empty"
);
let inputProductNameBuyMore = document.getElementById(
  "input-product-name-buy-more"
);
let inputPrice = document.getElementById("input-price");
let enoughRow = document.getElementById("enough-row");
let soonEmptyRow = document.getElementById("soon-empty-row");
let buyMoreRow = document.getElementById("buy-more-row");

/*function loadPage() {
  alert("Velkommen til din handleliste");
  alert(
    "For å legge til varer skriver du inn navnet på varen i input-feltet merket med Navn på vare"
  );
  alert(
    "Deretter må du velge prisen per vare i feltet under merket pris (kan kun bruke tall som er lik eller høyere enn 1)"
  );
  alert(
    "Når du har skrevet pris og navn på varen må du skrive antallet du ønsker i feltet under merket Antall varer"
  );
  alert(
    "Du kan endre antall varer etter du har lagt til ved å trykke på + og - knappene i ruten"
  );
  alert("For å slette varer kan du trykke på slett knappen nederst i ruten");
  alert("Når du nesten er tom for en vare vil boksen bytte farge til oransje");
}
*/

function addProductEnough() {
  products.push({
    name: inputProductNameBuyMore.value,
    price: inputPrice.value,
  });
  console.log("La til vare: " + inputProductNameBuyMore.value);
  updateProductList();
}
function addProductSoonEmpty() {
  products.push({
    name: inputProductNameBuyMore.value,
    price: inputPrice.value,
  });
  console.log("La til vare: " + inputProductNameBuyMore.value);
  updateProductList();
}
function addProductBuyMore() {
  products.push({
    name: inputProductNameBuyMore.value,
    price: inputPrice.value,
  });
  console.log(
    "La til vare: " + inputProductNameBuyMore.value + ", " + inputPrice.value
  );
  updateProductList();
}

function removeProduct(index) {
  let confirmDelete = prompt(
    "Ønsker du å slette " + products[index].name + "?" + " (ja/nei)"
  );
  if (confirmDelete.toLowerCase() == "ja") {
    let productName = products[index].name;
    products.splice(index, 1);
    updateProductList();
    alert(productName + " er nå slettet.");
  } else {
    alert("Sletting kansellert.");
  }
}

function updateProductList() {
  enoughRow.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    enoughRow.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<p>Navn på vare: " +
      products[i].name +
      "</p>" +
      "<button onclick='removeProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";
  }

  for (let i = 0; i < products.length; i++) {
    soonEmptyRow.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<p>Navn på vare: " +
      products[i].name +
      "</p>" +
      "<button onclick='removeProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";
  }
}
function updateProductList() {
  buyMoreRow.innerHTML = "";
  let productPriceSum = 0;
  for (let i = 0; i < products.length; i++) {
    buyMoreRow.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<p>Navn på vare: " +
      products[i].name +
      "</p>" +
      "<p>Pris for vare: kr " +
      products[i].price +
      ",-</p>" +
      "<button onclick='removeProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";

    productPriceSum += products[i].price;
  }
  document.getElementById("total-sum-all-products").innerHTML =
    "Total sum av alle varer: " + productPriceSum + " kr";
}

function filterInput(value) {
  if (value <= 0) {
    value = 1;
    alert("Kan kun bruke tall som er høyere enn 1");
  }
  return value;
}
