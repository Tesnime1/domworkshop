function deleteproduct(e) {
  e.target.parentElement.remove();
  total();
}
function addproduct(e) {
  const product = e.target.parentElement;
  quantity = product.querySelector(".quantity");
  price = product.querySelector(".price");
  quantityprice = product.querySelector(".quantityprice");
  quantity.innerText++;
  quantityprice.innerText = price.innerText * quantity.innerText;
  total();
}

function minus(e) {
  const product = e.target.parentElement;
  quantity = product.querySelector(".quantity");
  price = product.querySelector(".price");
  quantityprice = product.querySelector(".quantityprice");
  quantity.innerText--;
  quantityprice.innerText = price.innerText * quantity.innerText;
  total();
}

function total() {
  totalarray = document.querySelectorAll(".quantityprice");
  totalshopping = document.querySelector(".totalshopping span");
  let totall = 0;
  totalarray.forEach((item) => {
    totall += parseInt(item.innerText);
  });
  totalshopping.innerText = totall;
}
