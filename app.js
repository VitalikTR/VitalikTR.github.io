// add to cart
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".add-cart");
console.log(addToCartButtons);
    for (let i=0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", function() {
            productsCountEl.textContent =  +productsCountEl.textContent + 1;
        
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
    // console.log(moreDetailsButtons);
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
    let decrementBtn = document.querySelectorAll('.decrement-btn');
    let incrementBtn = document.querySelectorAll('.increment-btn');
    let productQuantity = document.querySelectorAll('.product-quantity input');
    let minCount = 1;
    let maxCount = 5

    //     function toggleButtonState(count, incrementBtn, decrementBtn) {
    //         decrementBtn.disabled = count <= minCount;
    //         incrementBtn.disabled = count >= maxCount;
    //     }
        
    //     for (let i= 0; i < incrementBtn.length;i++){
    //         incrementBtn[i].addEventListener("click",function () {
    //             let currentCount = +productQuantity[i].value; 
    //             let nextCount = currentCount + 1;
    //             productQuantity[i].value = nextCount;
    //             toggleButtonState(nextCount, incrementBtn[i], decrementBtn[i])
    //         })
    //     }
        
    //     for (let i= 0; i < incrementBtn.length;i++){
    //         decrementBtn[i].addEventListener("click",function () {
    //             let currentCount = +productQuantity[i].value; 
    //             let nextCount = currentCount - 1;
    //             productQuantity[i].value = nextCount;
    //             toggleButtonState(nextCount, incrementBtn[i], decrementBtn[i])
    // })
    //     }

    //     for (let i=0; i< productQuantity.length;i++){
    //         let currentCount = +productQuantity[i].value;
    //         toggleButtonState(currentCount, incrementBtn[i], decrementBtn[i])
    //     }
       
//     let decrementBtn = document.querySelectorAll('.decrement-btn')[0];
//     let incrementBtn = document.querySelectorAll('.increment-btn')[0];
//     let productQuantity = document.querySelectorAll(".product-quantity input")[0];
    
//     let currentCount = +productQuantity.value;
//     console.log(currentCount) 
//     function toggleButtonState(count) {
//             if(count <= 1) {
//                 decrementBtn.disabled = true;
//             } else {
//                 decrementBtn.disabled = false;
//             } if (count >= 5) {
//                 incrementBtn.disabled = true;
//             } else {
//                 incrementBtn.disabled = false;
//             }
//     }
//     toggleButtonState(currentCount)    
    
    
// //     for (let i=0; i < incrementBtn.length; i++){
// //        incrementBtn[i].addEventListener("click", function() {
// //         let currentCount = +productQuantity[i].value;
// //         let nextCount = currentCount + 1;
// //             productQuantity[i].value = nextCount;
// //         toggleButtonState(nextCount)       
           
        
// //     })
// // }

   
//     incrementBtn.addEventListener("click", function(){
//         // productQuantity.value = +productQuantity.value + 1;
//         let currentCount = +productQuantity.value;
//         let nextCount = currentCount + 1;
//             productQuantity.value = nextCount;
//         toggleButtonState(nextCount)    
//     })

//     decrementBtn.addEventListener("click", function(){
//         let currentCount = +productQuantity.value;
//         let nextCount = currentCount - 1;
//             productQuantity.value = nextCount;
//         toggleButtonState(nextCount)    
//     })

//     console.log(decrementBtn)
//     console.log(incrementBtn)
//     console.log(productQuantity)

// oop

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount= 5) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    }
   
    console.log(this)
    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        }
        this.toggleButtonState()

        this.increment = function(){
            let currentCount = +this.domRefs.inputField.value;
            let nextCount = currentCount + 1;
            this.domRefs.inputField.value = nextCount;
            this.toggleButtonState(nextCount)       
        }
        
        this.decrement = function(){
            let currentCount = +this.domRefs.inputField.value;
            let nextCount = currentCount - 1;
            this.domRefs.inputField.value = nextCount;
            this.toggleButtonState(nextCount)       
        }

        this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
        this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
       
}
const counter1 = new Counter (incrementBtn[0], decrementBtn[0], productQuantity[0]);
const counter2 = new Counter (incrementBtn[1], decrementBtn[1], productQuantity[1]);


    // selectize

        $('#select-beast').selectize({
            create: true,
            sortField: 'text'
        });
    
