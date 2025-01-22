// For Navbar

const sideMenu = document.getElementById("side-nav-menu");

const navBar = document.getElementById("nav-bar");

const navCross = document.getElementById("nav-cross");

navBar.addEventListener("click", () => {
    sideMenu.classList.add("side-nav-menu-open");
});

navCross.addEventListener("click", () => {
    sideMenu.classList.remove("side-nav-menu-open");
});

// For Navbar

// For cart open and close

const cartOpenBtn = document.getElementById("cart-open-btn");

const cartCloseBtn = document.getElementById("cart-close-btn");

const cartList = document.querySelector(".cart-list");

cartOpenBtn.addEventListener("click", () => {
    cartList.classList.add("cart-list-open");
})

cartCloseBtn.addEventListener("click", () => {
    cartList.classList.remove("cart-list-open");
})

// For cart open and close


// For add to cart 

const addItemBtns = document.querySelectorAll(".add-item");

addItemBtns.forEach((button) => {

    button.addEventListener("click", (event) => {
        let productCard = event.target.closest(".product-card");
        addToCart(productCard);
    });

});

const cartContent = document.querySelector(".cart-content");

const addToCart = (event) => {

    const productImageSrc = event.querySelector(".card-top img").src;
    const productTitle = event.querySelector(".card-bottom h5").innerText;
    const productPrice = event.querySelector(".card-bottom p").innerText;

    const cartItem = document.createElement("div");

    // For duplicate item checking 

    const cartItemTitle = cartContent.querySelectorAll(".item-title");

    for (const itemTitle of cartItemTitle) {
        if (itemTitle.innerText === productTitle) {
            alert("This item is already exist in cart");
            return;
        }
    }

    // For duplicate item checking 

    cartItem.classList.add("item");

    cartItem.innerHTML = `

        <div class="container-fluid overflow-hidden">
                    <div class="row">
                        <div class="col-sm-4 mb-3">
                            <div class="item-image">
                                <img src="${productImageSrc}" alt="">
                            </div>
                        </div>

                        <div class="col-sm-8">

                            <div class="item-info d-flex gap-4 align-items-center h-100">

                                <div class="d-flex flex-column gap-3">
                                    <h4 class="m-0 fw-semibold item-title">${productTitle}</h4>
                                    <div class="item-quantity-info d-flex justify-content-between align-items-center">
                                        <input type="number" class="item-quantity" value="1">
                                        <p class="item-price m-0 fs-6 fw-medium">${productPrice}</p>
                                    </div>
                                </div>

                                <div>
                                    <i class="fas fa-xmark" onclick ="removeParent(event)"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
    `;

    cartContent.appendChild(cartItem);

    cartItem.querySelector(".item-quantity").addEventListener("change", (event) => {

        let quantity = event.target;

        if (isNaN(quantity.value) || quantity.value <= 0) {
            quantity.value = 1;
        }
        totalPriceUpdate();
    });

    

};

// For removing item
const removeParent = (e) => {
    let itemParent = e.target.closest(".item");

    itemParent.remove();

}
// For removing item

// For updating total price

const totalPriceUpdate = () => {

    const totalPriceElement = document.getElementById("totalPrice");
    const totalItem = document.querySelectorAll(".item");
    let total = 0;

    totalItem.forEach((item) => {
        const priceElement = item.querySelector(".item-price");
        const quantityElement = item.querySelector(".item-quantity");
        const price = parseFloat(priceElement.innerText.replace("$ ", ""));
        const quantity = quantityElement.value;
        total += price * quantity; 
    })


    totalPriceElement.innerText = `$ ${total} `;
};


// For updating total price


// For add to cart 

