let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartsButtons = document.querySelectorAll(".add-cart");
// console.log(addToCartsButtons);
for (let i=0; i < addToCartsButtons.length; i++) {
    addToCartsButtons[i].addEventListener("click", function() {
       let prevProductsCount = +productsCountEl.textContent;
       productsCountEl.textContent = prevProductsCount + 1;
       
    })
}

