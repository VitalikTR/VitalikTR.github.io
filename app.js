// add to cart
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartsButtons = document.querySelectorAll(".add-cart");
// console.log(addToCartsButtons);
    for (let i=0; i < addToCartsButtons.length; i++) {
        addToCartsButtons[i].addEventListener("click", function() {
            let prevProductsCount = +productsCountEl.textContent;
                productsCountEl.textContent = prevProductsCount + 1;
        
    })
}

// change like start
let likeButtons = document.querySelectorAll(".image-heart");
// console.log(likeButtons);
    for (let i=0; i < likeButtons.length; i++) {   
        likeButtons[i].addEventListener("click", function() {
            // this.classList.toggle("licked");
            if (this.classList.contains("licked")) {
                this.classList.remove("licked")
                } else {
                         this.classList.add("licked")
            }
        })
    }


    // modal

    let moreDetailsButtons = document.querySelectorAll(".more-details");
    // console.log(moredetailsButtons);
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".btn-close")
    moreDetailsButtons.forEach(function(btn){
        btn.addEventListener("click", function(){
            modal.classList.add("show")
            modal.classList.remove("hide")
        })
    })

    function closeModal() {
        modal.classList.add("hide")
        modal.classList.remove("show")
    }

    closeBtn.addEventListener("click",closeModal);

    modal.addEventListener("click", function(e){
        if (e.target === modal) {
            closeModal()
        }
    })