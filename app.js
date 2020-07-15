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

    function openModal() {
        modal.classList.add("show")
            modal.classList.remove("hide")
    }

    function closeModal() {
        modal.classList.add("hide")
            modal.classList.remove("show")
    }

    function openModalByScroll() {
        if(window.pageYOffset >= document.documentElement.scrollHeight/2) {
            openModal()
            window.removeEventListener('scroll', openModalByScroll)
        }
    }

    window.addEventListener('scroll', openModalByScroll)

    closeBtn.addEventListener("click",closeModal);
        modal.addEventListener("click", function(e){
            if (e.target === modal) {
                closeModal()
        }
    })

        // slider

        // -- Initialize Swiper -- Loop Mode / Infinite Loop
        
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });


    // product-qauntity
    // let decrementBtn = document.querySelectorAll('.decrement-btn')[0]; занаходимо 0 (перший) елемент
    
    let decrementBtn = document.querySelectorAll('.decrement-btn')[0];
    let incrementBtn = document.querySelectorAll('.increment-btn')[0];
    let productQuantity = document.querySelectorAll(".product-quantity input")[0];

    let currentCount = +productQuantity.value;
    function toggleButtonState(count) {
            if(count <= 1) {
                decrementBtn.disabled = true;
            } else {
                decrementBtn.disabled = false;
            } 
            if (count >= 5) {
                incrementBtn.disabled = true;
            } else {
                incrementBtn.disabled = false;
            }
    }
    toggleButtonState(currentCount)    

    incrementBtn.addEventListener("click", function(){
        // productQuantity.value = +productQuantity.value + 1;
        let currentCount = +productQuantity.value;
        let nextCount = currentCount + 1;
            productQuantity.value = nextCount;
        toggleButtonState(nextCount)    
    })

    decrementBtn.addEventListener("click", function(){
        let currentCount = +productQuantity.value;
        let nextCount = currentCount - 1;
            productQuantity.value = nextCount;
        toggleButtonState(nextCount)    
    })

    // console.log(decrementBtn)
    // console.log(incrementBtn)
    // console.log(productQuantity.value)