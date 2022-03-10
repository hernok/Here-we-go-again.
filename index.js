let enoughProducts = [];
let soonEmptyProducts = [];
let buyMoreProducts = [];
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
////////////////////////////////////////
function removeEnoughProduct(index) {
  let confirmDelete = prompt(
    "Ønsker du å slette " + enoughProducts[index].name + "?" + " (ja/nei)"
  );
  if (confirmDelete.toLowerCase() == "ja") {
    let productName = enoughProducts[index].name;
    enoughProducts.splice(index, 1);
    updateEnoughList();
    alert(productName + " er nå slettet.");
  } else {
    alert("Sletting kansellert.");
  }
}

function addProductEnough() {
  if (inputProductNameEnough.value == 0) {
    alert("Fyll inn navn på vare");
  } else {
    enoughProducts.push({
      name: inputProductNameEnough.value,
    });

    console.log("La til vare: " + inputProductNameEnough.value);
    updateEnoughList();
  }
}

function updateEnoughList() {
  enoughRow.innerHTML = "";

  for (let i = 0; i < enoughProducts.length; i++) {
    enoughRow.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<p>Navn på vare: " +
      enoughProducts[i].name +
      "</p>" +
      "<button onclick='removeEnoughProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";
  }
}
////////////////////////////////////////

function removeSoonEmptyProduct(index) {
  let confirmDelete = prompt(
    "Ønsker du å slette " + soonEmptyProducts[index].name + "?" + " (ja/nei)"
  );
  if (confirmDelete.toLowerCase() == "ja") {
    let productName = soonEmptyProducts[index].name;
    soonEmptyProducts.splice(index, 1);
    updateSoonEmptyList();
    alert(productName + " er nå slettet.");
  } else {
    alert("Sletting kansellert.");
  }
}

function addProductSoonEmpty() {
  if (inputProductNameSoonEmpty.value == 0) {
    alert("Fyll inn navn på vare");
  } else {
    soonEmptyProducts.push({
      name: inputProductNameSoonEmpty.value,
    });

    console.log("La til vare: " + inputProductNameSoonEmpty.value);
    updateSoonEmptyList();
  }
}

function updateSoonEmptyList() {
  soonEmptyRow.innerHTML = "";
  for (let i = 0; i < soonEmptyProducts.length; i++) {
    soonEmptyRow.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<p>Navn på vare: " +
      soonEmptyProducts[i].name +
      "</p>" +
      "<button onclick='removeSoonEmptyProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";
  }
}

////////////////////////////////////////
function removeBuyMoreProduct(index) {
  let confirmDelete = prompt(
    "Ønsker du å slette " + buyMoreProducts[index].name + "?" + " (ja/nei)"
  );
  if (confirmDelete.toLowerCase() == "ja") {
    let productName = buyMoreProducts[index].name;
    buyMoreProducts.splice(index, 1);
    updateBuyMoreList();
    alert(productName + " er nå slettet.");
  } else {
    alert("Sletting kansellert.");
  }
}

function addProductBuyMore() {
  if (inputProductNameBuyMore.value == 0) {
    alert("Fyll inn navn på vare");
  }
  if (inputPrice.value == 0) {
    alert("Fyll inn pris på vare");
    return value; /////////////////////////////////////////////
  } else {
    buyMoreProducts.push({
      name: inputProductNameBuyMore.value,
      price: inputPrice.value,
    });
  }
  console.log(
    "La til vare: " + inputProductNameBuyMore.value + ", " + inputPrice.value
  );
  updateBuyMoreList();
}

function updateBuyMoreList() {
  buyMoreRow.innerHTML = "";
  let productPriceSum = 0;
  for (let i = 0; i < buyMoreProducts.length; i++) {
    buyMoreRow.innerHTML +=
      "<div class='product-wrapper' id='product-" +
      i +
      "'>" +
      "<div class='buy-more-inner-wrapper'>" +
      "<p>Navn på vare: " +
      buyMoreProducts[i].name +
      "</p>" +
      "<p>Pris for vare: kr " +
      buyMoreProducts[i].price +
      ",-</p>" +
      "</div>" +
      "<button onclick='removeBuyMoreProduct(" +
      i +
      ")'>Slett</button>" +
      "</div>";

    productPriceSum += buyMoreProducts[i].price;
  }
  document.getElementById("total-sum-all-buyMoreProducts").innerHTML =
    "Total sum av alle varer: " + productPriceSum + " kr";
}

function filterInput(value) {
  if (value <= 0) {
    value = 1;
    alert("Kan kun bruke tall som er høyere enn 1");
  }
  return value;
}
