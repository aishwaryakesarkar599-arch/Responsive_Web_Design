
const placeholderText =
    document.getElementById("placeholderText");

const searchInput =
    document.getElementById("searchInput");

const searchTexts = [
    "Biscuits",
    "Milk",
    "Curd",
    "Onion",
    "Potato",
    "Garlic"
];

let searchTextIndex = 0;

function changeSearchText() {
    placeholderText.classList.add("move-up");

    setTimeout(() => {

        searchTextIndex++;

        if (searchTextIndex >= searchTexts.length) {
            searchTextIndex = 0;
        }
        placeholderText.innerText =
            searchTexts[searchTextIndex];

        placeholderText.style.transition = "none";
        placeholderText.style.transform =
            "translateY(30px)";
        placeholderText.style.opacity = "0";

        setTimeout(() => {
            placeholderText.style.transition =
                "transform 0.5s ease, opacity 0.5s ease";
            placeholderText.style.transform =
                "translateY(-50%)";
            placeholderText.style.opacity = "1";
        }, 50);

    }, 500);
}
setInterval(changeSearchText, 2000);
searchInput.addEventListener("focus", () => {
    placeholderText.style.display = "none";

});

searchInput.addEventListener("blur", () => {
    if (searchInput.value.trim() === "") {
        placeholderText.style.display = "block";
    }

});

function openLoginForm() {
    window.location.href = "login.html";
}

let arrayImage = [
    "image/slide1.jpeg",
    "image/slide2.jpeg",
    "image/slider4.webp",
]
let image = document.getElementById('image')
let index = 0;

function changeImage() {
    index++;
    if (index >= 3) {
        index = 0
    }
    image.src = arrayImage[index]
}
setInterval(changeImage, 1500)

let track = document.getElementById('categorytrack')
const leftArrow = document.getElementById("leftArrow")
const rightArrow = document.getElementById('rightArrow')
let categories = document.querySelectorAll('.category')
let currentIndex = 0;

//how many item visible
function getVisibile() {
    let slider = document.querySelector('.slider')
    const categoryWidth = categories[0].offsetWidth;
    const gap = 25;
    const availabaleWidth = slider.clientWidth - 90;

    return Math.floor(
        availabaleWidth / (categoryWidth + gap)
    )


}
//moveslider
function moveslider() {
    const categoryWidth = categories[0].offsetWidth;
    const gap = 45;

    // first movement=category width(130px)+gap
    let moveAmount = categoryWidth + gap;

    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
    updateArrows()

}

rightArrow.addEventListener("click", function () {
    const visibleItems = getVisibile()

    const maxIndex = categories.length - visibleItems

    //move only one items
    if (currentIndex < maxIndex) {
        currentIndex++;
        moveslider()
    }

})

//left arrow
leftArrow.addEventListener("click", function () {
    //move only one item
    if (currentIndex > 0) {
        currentIndex--
        moveslider()
    }
})


function updateArrows() {
    const visibleItems = getVisibile()
    const maxIndex = categories.length - visibleItems

    if (currentIndex === 0) {
        leftArrow.classList.add("disabled")
    }
    else {
        leftArrow.classList.remove("disabled")
        leftArrow.style.display = 'block'
    }

    if (currentIndex >= maxIndex) {
        rightArrow.classList.add("disabled")
    }
    else {
        rightArrow.classList.remove("disabled")
    }
}

const productTrack = document.getElementById("productTrack");

const productLeftArrow =
    document.getElementById("productLeftArrow");

const productRightArrow =
    document.getElementById("productRightArrow");

const products =
    document.querySelectorAll(".product-card");

let productIndex = 0;

function getVisibleProducts() {

    const slider =
        document.querySelector(".product-slider");

    const productWidth =
        products[0].offsetWidth;

    const gap = 11;

    const availableWidth =
        slider.clientWidth - 20;

    return Math.floor(
        availableWidth / (productWidth + gap)
    );
}



function moveProductSlider() {

    const productWidth =
        products[0].offsetWidth;

    const gap = 11;

    const moveAmount =
        productWidth + gap;

    productTrack.style.transform =
        `translateX(-${productIndex * moveAmount}px)`;

    updateProductArrows();
}


productRightArrow.addEventListener("click", function () {

    const visibleProducts =
        getVisibleProducts();

    const maxIndex =
        products.length - visibleProducts;

    if (productIndex < maxIndex) {

        productIndex++;

        moveProductSlider();
    }

});


productLeftArrow.addEventListener("click", function () {

    if (productIndex > 0) {

        productIndex--;

        moveProductSlider();
    }

});

function updateProductArrows() {

    const visibleProducts =
        getVisibleProducts();

    const maxIndex =
        products.length - visibleProducts;


    /* LEFT */

    if (productIndex === 0) {

        productLeftArrow.classList.add("disabled");

    } else {

        productLeftArrow.classList.remove("disabled");
    }


    /* RIGHT */

    if (productIndex >= maxIndex) {

        productRightArrow.classList.add("disabled");

    } else {

        productRightArrow.classList.remove("disabled");
    }

}

updateProductArrows();

window.addEventListener("resize", function () {

    productIndex = 0;

    productTrack.style.transform = "translateX(0)";

    updateProductArrows();

});