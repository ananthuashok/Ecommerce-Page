// The Hamburger Menu
const hiddenMenu = document.querySelector('.hidden-menu')
const hamburger = document.querySelector('#hamburger-menu')
const hamburgerClose = document.querySelector('#hamburger-close')
let click = false;
// Show the hamburger menu on touch
hamburger.addEventListener('touchstart', () => {
    if (!click) {
        hiddenMenu.classList.add('show')
        click = true;
    }
})
// Disappear the hamburger menu on touch
hamburgerClose.addEventListener('touchstart', () => {
    hiddenMenu.classList.remove('show')
    click = false;
})
// The Order Details Menu of both the desktop and mobile version
const cart = document.querySelector('#cart')
const Cart = document.querySelector('#Cart')
const orderDetails = document.querySelector('.order-details')
const OrderDetails = document.querySelector('.Order-details')
click = false;
//  Show/Disappear the order preview on touch
cart.addEventListener('touchstart', () => {
    if (!click) {
        orderDetails.classList.add('show')
        click = true;
    } else {
        orderDetails.classList.remove('show')
        click = false;
    }
})
let orderSummary = document.querySelector('.order-summary')
let OrderSummary = document.querySelector('.order-Summary')
// The show the order preview on click
Cart.addEventListener('click', () => {
    if (!click) {
        OrderDetails.classList.add('show')
        OrderSummary.style.display='block';
        orderSummary.style.display='block';
        click = true;
    } else {
        OrderDetails.classList.remove('show')
        OrderSummary.style.display='none';
        orderSummary.style.display='none';
        click = false;
    }
})
// Image Slider for the mobile version
let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let current = 0;
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}
function startSlide() {
    reset()
    sliderImages[0].style.display = 'block';
}
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}
// Left arrow click
arrowLeft.addEventListener("touchstart", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
// Right arrow click
arrowRight.addEventListener("touchstart", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
startSlide();
// Calculation of the price for the desktop and mobile version
let minus = document.querySelector('#less')
let Minus = document.querySelector('#Less')
let add = document.querySelector('#add')
let Add = document.querySelector('#Add')
let quantity = document.querySelector('#quantity')
let Quantity = document.querySelector('#Quantity')
let totalAmt = document.querySelector('#total-amt')
let TotalAmt = document.querySelector('#amount')
// Add Functionality for mobile
add.addEventListener('touchstart', () => {
    quantity.innerHTML++;
    totalAmt.innerHTML = 125.00 * parseFloat(quantity.innerHTML);

})
// Add Functionality for desktop
Add.addEventListener('click', () => {
    Quantity.innerHTML++;
    TotalAmt.innerHTML = 125.00 * parseFloat(Quantity.innerHTML);

})
// Minus Functionality for mobile
minus.addEventListener('touchstart', () => {
    if (quantity.innerHTML == '0') {
        return;
    } else if (quantity >= '0') {
        quantity.innerHTML--;
        let newAmt = totalAmt.innerHTML - 125.00
        totalAmt.innerHTML = newAmt
        console.log(totalAmt.innerHTML);
    }
})
// Minus Functionality for desktop
Minus.addEventListener('click', () => {
    if (Quantity.innerHTML == '0') {
        return;
    } else if (Quantity >= '0') {
        Quantity.innerHTML--;
        let newAmt = TotalAmt.innerHTML - 125.00
        TotalAmt.innerHTML = newAmt
        console.log(totalAmt.innerHTML);
    }
})
// Add to Cart Button functionality
let addtoCartBtn = document.querySelector('.btn-cart')
let AddtoCartBtn = document.querySelector('.btn-Cart')
// let orderSummary = document.querySelector('.order-summary')
// let OrderSummary = document.querySelector('.order-Summary')
// Add the product to the cart on touch
addtoCartBtn.addEventListener('touchstart', () => {
    // If the quantity of is 0 then abort the function 
    if(`${quantity.innerHTML}`==0){
        return ;
    }else{
    // Remove the placeholder text
    let placeholder = document.querySelector('#placeholder')
    let Placeholder = document.querySelector('#Placeholder')
    placeholder.style.display = 'None'
    Placeholder.style.display = 'None'
    // Add and remove click effect to the button 
    setTimeout(()=>{
        addtoCartBtn.classList.add('clicked')
        },1)
        setTimeout(()=>{
            addtoCartBtn.classList.remove('clicked')
            },80)
    // Show the order summary on the mobile
    orderSummary.innerHTML = `
    <div class="order-summary-inner">
    <img src="./images/image-product-1.jpg" id="order-img"/>
    <div class="box">
    <p id="order-name">Limited Edition Sneakers</p>
    <div id=price-details>$125.00 * ${quantity.innerHTML} = <b>${totalAmt.innerHTML}</b></div>
    </div>
    <img src="./images/icon-delete.svg" id="trash" />
    </div>
    <button class="btn btn-checkout">Checkout</button>
    `
    // Show the order summary on the desktop
    OrderSummary.innerHTML = `
    <div class="order-summary-inner">
    <img src="./images/image-product-1.jpg" id="Order-img"/>
    <div class="box">
    <p id="Order-name">Limited Edition Sneakers</p>
    <div id=price-details>$125.00 * ${quantity.innerHTML} = <b>${totalAmt.innerHTML}</b></div>
    </div>
    <img src="./images/icon-delete.svg" id="Trash" />
    </div>
    <button class="btn Btn-Checkout">Checkout</button>
    `
    // Add the no:of items and the total amount to local storage
    localStorage.setItem('No:of Items',`${quantity.innerHTML}`)
    localStorage.setItem('Total Amount',`${totalAmt.innerHTML}`)
    // Run the check btn function
    checkforBtn();
    }
})
AddtoCartBtn.addEventListener('click', () => {
    
   // If the quantity of is 0 then abort the function 
    if(`${Quantity.innerHTML}`==0){
        return ;
    }else{
    // Remove te placeholdertext
    let placeholder = document.querySelector('#placeholder')
    let Placeholder = document.querySelector('#Placeholder')
    placeholder.style.display = 'None'
    Placeholder.style.display = 'None'
    // Add or Remove Click Effect
    setTimeout(()=>{
    AddtoCartBtn.classList.add('clicked')
    },1)
    setTimeout(()=>{
        AddtoCartBtn.classList.remove('clicked')
        },80)
    // Show the order summary on the desktop
    OrderSummary.innerHTML = `
    <div class="order-summary-inner">
    <img src="./images/image-product-1.jpg" id="Order-img"/>
    <div class="box">
    <p id="Order-name">Limited Edition Sneakers</p>
    <div id=price-details>$125.00 * ${Quantity.innerHTML} = <b>${TotalAmt.innerHTML}</b></div>
    </div>
    <img src="./images/icon-delete.svg" id="Trash" />
    </div>
    <button class="btn Btn-Checkout">Checkout</button>
    `
    // Show the order summary on the mobile
    orderSummary.innerHTML = `
    <div class="order-summary-inner">
    <img src="./images/image-product-1.jpg" id="order-img"/>
    <div class="box">
    <p id="order-name">Limited Edition Sneakers</p>
    <div id=price-details>$125.00 * ${Quantity.innerHTML} = <b>${TotalAmt.innerHTML}</b></div>
    </div>
    <img src="./images/icon-delete.svg" id="trash" />
    </div>
    <button class="btn btn-checkout">Checkout</button>
    `
    // Add the no:of items and the total amount to local storage
    localStorage.setItem('No:of Items',`${Quantity.innerHTML}`)
    localStorage.setItem('Total Amount',`${TotalAmt.innerHTML}`)
    // Run the check btn function
    checkforBtn();
    }
})
// Checkout and Remove Btn
function checkforBtn() {
    let trashBtn = document.querySelector('#trash')
    let TrashBtn = document.querySelector('#Trash')
    let btnCheckout = document.querySelector('.btn-checkout')
    let BtnCheckout = document.querySelector('.Btn-Checkout')
    // Remove the order details whch the trash btn is clicked on desktop
    TrashBtn.addEventListener('click', () => {
        // Remove the order details of mobile and desktop and desktop which the trash btn is clicked on deskop 
        TrashBtn.parentElement.parentElement.innerHTML = ''
        trashBtn.parentElement.parentElement.innerHTML = ''
        console.log(TrashBtn.parentElement.parentElement);
        let placeholder = document.querySelector('#placeholder')
        let Placeholder = document.querySelector('#Placeholder')
        placeholder.style.display = 'Block'
        Placeholder.style.display = 'Block'
        // Remove the data from local storage
        localStorage.removeItem('No:of Items')
        localStorage.removeItem('Total Amount')
    })
    // Remove the order details whch the trash btn is clicked on mobile
    trashBtn.addEventListener('touchstart', () => {
            // Remove the order details of mobile and desktop whcih the trash btn is clicked on mobile 
        TrashBtn.parentElement.parentElement.innerHTML = ''
        trashBtn.parentElement.parentElement.innerHTML = ''
        let placeholder = document.querySelector('#placeholder')
        let Placeholder = document.querySelector('#Placeholder')
        placeholder.style.display = 'Block'
        Placeholder.style.display = 'Block'
        // Remove the data from local storage
        localStorage.removeItem('No:of Items')
        localStorage.removeItem('Total Amount')
    })
    // Remove the order details whch the checkout is clicked on desktop
    BtnCheckout.addEventListener('click', () => {
        BtnCheckout.parentElement.innerHTML = ''
        btnCheckout.parentElement.innerHTML = ''
        let placeholder = document.querySelector('#placeholder')
        let Placeholder = document.querySelector('#Placeholder')
        placeholder.style.display = 'Block'
        Placeholder.style.display = 'Block'
        // Remove the data from local storage
        localStorage.removeItem('No:of Items')
        localStorage.removeItem('Total Amount')
    })
    // Remove the order details whch the checkout is clicked on mobile
    btnCheckout.addEventListener('touchstart', () => {
        btnCheckout.parentElement.innerHTML = ''
        BtnCheckout.parentElement.innerHTML = ''
        let placeholder = document.querySelector('#placeholder')
        let Placeholder = document.querySelector('#Placeholder')
        placeholder.style.display = 'Block'
        Placeholder.style.display = 'Block' 
        // Remove the data from local storage
        localStorage.removeItem('No:of Items')
        localStorage.removeItem('Total Amount')
    })
}
// Check if LocalStorage is Empty on loading the website
window.addEventListener('load', (event) => {   
    Run()
    function Run (){
        // If the length of the localstorage is not zero , show the items in the local storage
        if(localStorage.length!==0){
            let placeholder = document.querySelector('#placeholder')
            let Placeholder = document.querySelector('#Placeholder')
            placeholder.style.display = 'None'
            Placeholder.style.display = 'None'
            // Show the no:of items and the total amount of desktop
            OrderSummary.innerHTML = `
            <div class="order-summary-inner">
            <img src="./images/image-product-1.jpg" id="Order-img"/>
            <div class="box">
            <p id="Order-name">Limited Edition Sneakers</p>
            <div id=price-details>$125.00 * ${localStorage.getItem('No:of Items')} = <b>${localStorage.getItem('Total Amount')}</b></div>
            </div>
            <img src="./images/icon-delete.svg" id="Trash" />
            </div>
            <button class="btn Btn-Checkout">Checkout</button>
            `
            // Show the no:of items and the total amount of moblile
            orderSummary.innerHTML = `
            <div class="order-summary-inner">
            <img src="./images/image-product-1.jpg" id="order-img"/>
            <div class="box">
            <p id="order-name">Limited Edition Sneakers</p>
            <div id=price-details>$125.00 * ${localStorage.getItem('No:of Items')} = <b>${localStorage.getItem('Total Amount')}</b></div>
            </div>
            <img src="./images/icon-delete.svg" id="trash" />
            </div>
            <button class="btn btn-checkout">Checkout</button>
            `
            checkforBtn();
            }else{
            }
        }  
    });
// Gallery and Lightbox
const img = document.querySelectorAll('.img')
const imgg = document.querySelectorAll('.img-l')
const display = document.querySelector('.display')
const lightbox = document.querySelector('.lightbox')
const target = document.querySelector('.target')
const next = document.querySelector('#right')
const prev = document.querySelector('#left')
let pos = 0;
// Change the image node list into an array 
var imgArr = Array.from(img);
var imgL = Array.from(imgg);
// Add click events to all the images
imgArr.forEach(clr => {
    clr.addEventListener('click', (e) => {
        // Change the src of the display to the src of the clicked image
        display.children[0].src = e.target.src;
        function show() {
            if (display.children[0].src == clr.src) {
                clear()
                clr.classList.add('show')
                clr.parentElement.classList.add('show-cover')
            }
        }
        function clear() {
            for (let i = 0; i < imgArr.length; i++) {
                imgArr[i].classList.remove('show')
                imgArr[i].parentElement.classList.remove('show-cover')
            }
        }
        show()
        // Change position for the image clicked on
        for (let i = 0; i < imgArr.length; i++) {
            if (e.target === imgArr[i]) {
                pos = i;
            }
        }
    })
})
//  Add click event to the display to show the lightbox
display.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    changeL()
    for (let i = 0; i < imgL.length; i++) {
        if (target.children[0].src == imgL[i].src) {
            imgL[i].parentElement.classList.add('show-cover-l')
            imgL[i].classList.add('show-l')
        }
    }
})
const close = document.getElementById('close');
close.addEventListener('click',()=>{
    lightbox.style.display = 'none';
})
imgL.forEach(Limage => {
    function clearL() {
        for (let i = 0; i < imgL.length; i++) {
            imgL[i].parentElement.classList.remove('show-cover-l')
            imgL[i].classList.remove('show-l')
        }
    }
    Limage.addEventListener('click', (e) => {
        target.children[0].src = Limage.src;
        if (target.children[0].src == Limage.src) {
            clearL()
            Limage.parentElement.classList.add('show-cover-l')
            Limage.classList.add('show-l')
        }
        // Change position for the image clicked on
        for (let i = 0; i < imgL.length; i++) {
            if (e.target == imgL[i]) {
                pos = i;
            }
        }
    })
    //   When pressing next run the update and change function based on the position
})
next.addEventListener('click', () => {
    if (pos > 2) {
        pos = 0;
        changeL()
        changeL()
    } else {
        ++pos
        changeL()
    }
})
//   When pressing previous run the update and change function based on the position
prev.addEventListener('click', () => {
    if (pos <= 0) {
        pos = 3;
        changeL()
    } else {
        --pos
        changeL()
    }
})
// When clicking on the grey area of the lightbox it will close
lightbox.addEventListener('click', (e) => {
    let targetImage = document.querySelector('#target-image')
    if (e.target === lightbox && e.target != targetImage) {
        lightbox.style.display = "none"
    }
})
function changeL() {
    target.innerHTML = `
    <img id="target-image" style="height: 100%; width: 100%;" src=${imgL[pos].src} >
    <img id="right" class="arrow" src="./images/icon-next.svg" alt=""   style=" ">
    <img id="left" class="arrow" src="./images/icon-previous.svg" alt=""style=" ">
    `;
    const next = document.querySelector('#right')
    const prev = document.querySelector('#left')
    next.addEventListener('click', () => {
        if (pos > 2) {
            pos = 0;
            // update()
            changeL()
            changeL()
        } else {
            ++pos
            // update()
            changeL()
        }
    })
    //   When pressing previous run the update and change function based on the position
    prev.addEventListener('click', () => {
        if (pos <= 0) {
            pos = 3;
            changeL()
        } else {
            --pos
            changeL()
        }
    })
    clearL()
    imgL[pos].classList.add('show-l')
    imgL[pos].parentElement.classList.add('show-cover-l')
    function clearL() {
        for (let i = 0; i < imgL.length; i++) {
            imgL[i].parentElement.classList.remove('show-cover-l')
            imgL[i].classList.remove('show-l')
        }
    }
}