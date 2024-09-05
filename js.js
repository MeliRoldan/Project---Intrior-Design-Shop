const offcanvasUl = document.getElementById('offcanvasUl');
const categoriesDiv = document.getElementById('categoriesDiv'); 
let categoriesList = '';
let homeCatList = '';

//rendering categories and subcategrories
for (let category of categories) {
    let subcategoriesList = '';

    if (category.subcategories) {
        for (let subcategory of category.subcategories) {
            subcategoriesList += `<li><a id="${subcategory.id}" class="dropdown-item" href="#">${subcategory.name}</a></li>`;
        }
    }

    categoriesList += `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="${category.id}" 
            role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${category.name}
        </a>
        <ul class="dropdown-menu" aria-labelledby="${category.id}Dropdown">
            ${subcategoriesList}
        </ul>
    </li>`;

    homeCatList += `
        <div><a id="${category.id}" class="nav-link" href="#">${category.name}</a></div>
    `;
}

offcanvasUl.innerHTML += categoriesList;
categoriesDiv.innerHTML += homeCatList;

//creating a list to save special products to render on homepage
const specials = {
    single: [],
    set: []
};

//saving special products to corresponding list
products.forEach(product => {
    if(product.special === "single") {
        specials.single.push(product);
    } else if (product.special === "set") {
        specials.set.push(product);
    }
});

const singleImgDivs = document.getElementsByClassName('singleImgDiv');
const imgSetDivs = document.getElementsByClassName('imgSet');

//rendering special products on homepage
function displayProducts() {
    Array.from(singleImgDivs).forEach((div, index) => {
        if (index < specials.single.length) {
            const product = specials.single[index];
            div.style.backgroundImage = `url('${product.imgSrc}')`;
            const productInfoDiv = div.querySelector('.productInfoDiv');
            if (productInfoDiv) {
                const productDivh4 = productInfoDiv.querySelector('.productDivh4');
                const productDivh5 = div.querySelector('.productDivh5');
                if (productDivh4) {
                    productDivh4.innerHTML = `${product.name}`;
                    productDivh5.innerHTML = `${product.offer}`;
                    const productAdiv = div.closest('.productAdiv');
                    productAdiv.id = `${product.id}`;
                }
            }
        }
    });

    Array.from(imgSetDivs).forEach((div, index) => {
        if (index < specials.set.length) {
            const product = specials.set[index];
            div.style.backgroundImage = `url('${product.imgSrc}')`;
            const productInfoDiv = div.querySelector('.productInfoDiv');
            if (productInfoDiv){
                const productDivh4 = productInfoDiv.querySelector('.productDivh4');
                const productDivh5 = div.querySelector('.productDivh5');
                if (productDivh4) {
                    productDivh4.innerHTML = `${product.name}`;
                    const productAdiv = div.closest('.productAdiv');
                    productDivh5.innerHTML = `${product.offer}`;
                    productAdiv.id = `${product.id}`;
                }
            }
        }
    })
}

displayProducts();

const offcanvasBody = document.getElementById('offcanvas-body');
const mainPage = document.getElementById('main');
const allProducts = document.getElementById('allProducts');
const mainLinks = document.getElementById('mainLinks');

//event listener for categories/subcategories
function categoriesEventHandler (event) {
    const target = event.target;
    const id = target.id;
    console.log(target, id)

    if (target.classList.contains('nav-link') || target.classList.contains('dropdown-item')) {
        categoryPage(id);
        event.preventDefault();
    }
}

offcanvasBody.addEventListener('click', categoriesEventHandler);
categoriesDiv.addEventListener('click', categoriesEventHandler);
mainLinks.addEventListener('click', categoriesEventHandler);

//calling category/subcategory rendering or all products rendering
function categoryPage(id) {
    window.location.hash = `category=${id}`;

    mainPage.style.display = 'none';
    allProducts.style.display = 'block';
    productPage.style.display = 'none';
    aboutUsContent.style.display = 'none';
    termsSection.style.display = 'none';
    storesSection.style.display = 'none';
    helpSection.style.display = 'none';
    
    if(id === 'all' || id === 'newCollection') {
        displayAllProducts();
    } else {
        displayCategoryProducts(id);
    }
}

const productRow = document.getElementById('productRow');

//rendering products based on category/subcategory
function displayCategoryProducts(id) {
    let htmlContent = '';

    const filteredProducts = products.filter(product => {
        return product.category === id || product.subcategory === id;
    });

    if (filteredProducts.length === 0) {
        htmlContent += `<div style="width: 100%; height: 300px;" class="d-flex justify-content-center align-items-center">
          <p class="text-center fs-4">There are no products currently to show. <br> Come back later.</p>
        </div>`
    } else {
        filteredProducts.forEach(product => {
            let colorArr = '';
    
            if (product.colors) {
                for (let color of product.colors) {
                    colorArr += `<div class="colorOutter">
                            <div class="colorInner" style="background-color: ${color};"></div>
                        </div>`;
                }
            }
    
            htmlContent += `
            <div class="col">
                <div class="card" style="height: 400px; border: none;">
                    <div id="${product.id}" class="card-img-div" style="height: 80%;">
                        <img id="${product.id}" src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0; object-fit: cover;">
                    </div>
                    <div class="card-body" style="height: 20%; text-align: center;">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="d-flex justify-content-center align-items-center h-auto">
                            ${colorArr}
                        </div>
                        <p class="card-text mt-2">${product.price} $</p>
                    </div>
                </div>
            </div>`;
        });
    }

    productRow.innerHTML = htmlContent;
}

//rendering all products for See All section
function displayAllProducts() {
    let htmlContent = '';

    products.forEach(product => {
        let colorArr = '';

        if (product.colors) {
            for (let color of product.colors) {
                colorArr += `<div style="border-radius: 50%; width: 20px; height: 20px; padding: 2px; border: 0px solid gray; position: relative; margin: 0px 4px;">
                        <div style="border-radius: 50%; width: 20px; height: 20px; background-color: ${color}; transform: translate(-50%, -50%); top: 50%; left: 50%; position: absolute;"></div>
                    </div>`;
            }
        }
    
        htmlContent += `
            <div class="col">
                <div class="card" style="height: 400px; border: none;">
                    <div id="${product.id}" class="card-img-div" style="height: 80%;">
                        <img id="${product.id}" src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0; object-fit: cover;">
                    </div>
                    <div class="card-body" style="height: 20%; text-align: center;">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="d-flex justify-content-center align-items-center h-auto">
                            ${colorArr}
                        </div>
                        <p class="card-text mt-2">${product.price} $</p>
                    </div>
                </div>
            </div>
        `;
    });

    productRow.innerHTML = htmlContent;
}

//URL managment on hash change
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const categoryId = params.get('category');
    const productId = params.get('product');

    if (hash === 'about-us'){
        aboutUsPage();
    } else if (hash === 'help') {
        helpPage();
    } else if (hash === 'stores'){
        storesPage();
    } else if (hash === 'terms'){
        termsPage();
    } else if (categoryId){
        categoryPage(categoryId);
    } else if (productId){
        productPageRender(productId);
        window.scrollTo(0, 0);
    } else {
        mainPage.style.display = 'block';
        allProducts.style.display = 'none';
        productPage.style.display = 'none';
        aboutUsContent.style.display = 'none';
        termsSection.style.display = 'none';
        storesSection.style.display = 'none';
        helpSection.style.display = 'none';
        window.scrollTo(0, 0);
    }
});

//URL managment on page load
window.onload = function() {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const categoryId = params.get('category');
    const productId = params.get('product');

    if (hash === 'about-us'){
        aboutUsPage();
    } else if (hash === 'help') {
        helpPage();
    } else if (hash === 'stores'){
        storesPage();
    } else if (hash === 'terms'){
        termsPage();
    } else if (categoryId){
        categoryPage(categoryId);
    } else if (productId){
        productPageRender(productId);
        window.scrollTo(0, 0);
    } else {
        mainPage.style.display = 'block';
        allProducts.style.display = 'none';
        productPage.style.display = 'none';
        aboutUsContent.style.display = 'none';
        termsSection.style.display = 'none';
        storesSection.style.display = 'none';
        helpSection.style.display = 'none';
        window.scrollTo(0, 0);
    }
};

const productPage = document.getElementById('productPage');
const itemMainImg = document.getElementById('itemMainImg');
const itemName = document.getElementById('itemName');
const itemPrize = document.getElementById('itemPrize');
const itemSku = document.getElementById('itemSku');
const itemDesciption = document.getElementById('itemDesciption');
const colorDiv = document.getElementById('colorDiv');

const optionsDiv = document.getElementById('options');
const specDesciption = document.getElementById('specDesciption');
const inStore = document.getElementById('inStore');

const cardImgDiv = document.getElementsByClassName('.card-img-div');

const itemQty = document.getElementById('itemQty');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// rendering product page
function productPageRender (divId) {
    window.location.hash = `product=${divId}`;

    itemQty.innerText = '1';

    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    aboutUsContent.style.display = 'none';
    termsSection.style.display = 'none';
    storesSection.style.display = 'none';
    helpSection.style.display = 'none';
    productPage.style.display = 'block';

    optionsDiv.innerHTML = '';
    specDesciption.innerHTML = '';
    inStore.innerHTML = '';
    
    const findItem = products.find(product => {
        if (product.id === divId) {
            return product;
        }
    })
    
    itemMainImg.src = `${findItem.imgSrc}`;
    itemName.innerHTML = findItem.name;
    itemPrize.innerHTML = `${findItem.price} $`;
    itemSku.innerHTML = findItem.id;
    itemDesciption.innerHTML = findItem.description;

    colorDiv.innerHTML = '';
    let colorPicker = '';

    if (findItem.colors.length > 0) {
        for (let color of findItem.colors) {
            colorPicker += `
            <div class="colorOutter">
                <div id="${color}" class="colorInner" style="background-color: ${color};"></div>
            </div>`;
        };
    };

    colorDiv.innerHTML += colorPicker;

    let options = '';
    let radioId = 0;

    if (findItem.options.length > 0) {
        for (let dimen of findItem.options) {
            radioId++;
            options += `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${radioId}" value="${dimen.size}">
                    <label class="form-check-label" for="flexRadioDefault${radioId}">
                        Size: ${dimen.size}
                    </label>
                </div>
            `
        }
    }

    optionsDiv.innerHTML += options;

    let specs = '';

    for (let spec in findItem.specifications) {
        specs += `
        <p>${capitalizeFirstLetter(spec)}: ${findItem.specifications[spec]}</p>
        `
    }

    specDesciption.innerHTML += specs;

    let inStores = '';

    if (findItem.availability.length > 0) {
        for (let store of findItem.availability) {
            inStores += `
            <p>
                <span class="fst-italic">${store.branch} - </span>
                <span class="fst-italic"> ${store.address} - </span>
                <span class="fw-bold text-uppercase"> Qty: <span class="fw-bold">${store.quantity}</span></span>
            </p>
            `
        }
    }

    inStore.innerHTML += inStores;
}

// calling product page
function openProductPage (event) {
    event.preventDefault();
    const target = event.target;

    let productCard;

    if(mainPage.contains(target)) {
        productCard = target.closest('.productAdiv');
    } else if (productRow.contains(target)) {
        productCard = target.closest('.card-img-div');
    }

    if(!productCard) {
        return;
    }

    const divId = productCard.id;

    productPageRender(divId);
}

mainPage.addEventListener('click', openProductPage);
productRow.addEventListener('click', openProductPage);

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

let quantity = 1;

//product quantity counter
minus.addEventListener('click', function() {
    if (quantity > 1) {
        quantity--;
        itemQty.innerText = quantity;
    }
});

plus.addEventListener('click', function() {
    quantity++;
    itemQty.innerText = quantity;
});

const addToCart = document.getElementById('addToCartBtn');
const alertRadio = document.getElementById('alertRadio');
const cartItems = document.getElementById('cartItems');

//color selection
colorDiv.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('colorInner')) {
        const allColors = document.querySelectorAll('.colorInner');
        allColors.forEach(color => {
            color.classList.remove('checked');
            color.style.outline = '';
        });

        target.classList.add('checked');
        target.style.outline = '2px solid #333';
    }
});

//adding product to cart
addToCart.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
    const selectedColor = document.querySelector('.colorInner.checked');
    const colorDiv = productPage.querySelector('#colorDiv');
    const colorInnerElements = colorDiv.querySelectorAll('.colorInner');

    //checking product option
    if (!selectedOption) {
        alertRadio.style.display = "block";
        alertRadio.style.color = "red";
        alertRadio.innerText = "Please select size.";
        return;
    }
    
    //checking product color
    if (colorDiv && colorInnerElements.length > 0) {
        if (!selectedColor) {
            alertRadio.style.display = "block";
            alertRadio.style.color = "red";
            alertRadio.innerText = "Please select color.";
            return;
        }
    }
        
    alertRadio.style.display = "";

    const variationId = `${selectedOption.value}-${selectedColor ? selectedColor.id : 'no-color'}`;
    const existingItem = cartItems.querySelector(`[data-variation-id="${variationId}"]`);

    //managing cart display
    addToCart.setAttribute('data-bs-toggle', 'offcanvas');
    addToCart.setAttribute('href', '#offcanvasCart');

    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasCart'));
    offcanvas.show();

    addToCart.removeAttribute('data-bs-toggle');
    addToCart.removeAttribute('href');

    //updating cart quantity on in-cart product
    if (existingItem) {
        const inCartQty = existingItem.querySelector('#cartItemQty');
        const currentQty = parseInt(inCartQty.innerText, 10);
        inCartQty.innerText = `${currentQty + quantity}`;
        
        let cartQty = document.querySelector('#cartQty');
        const countQty = parseInt(cartQty.innerText, 10);
        cartQty.innerText = `${countQty + quantity}`;

    } else {
        //add new product to cart

        cartItems.innerHTML += `
        <div class="itemCol w-100 mb-3" data-variation-id="${variationId}">
            <div class="itemColImg w-100">
                <img src="${itemMainImg.src}" alt="sofa">
            </div>
            <div class="itemColInfo w-100 ps-2 h-100">
                <p id="cartItemName" class="mb-1">${itemName.innerText}</p>
                <p id="cartItemSku"  class="m-0 detailsCart">${itemSku.innerText}</p>
                <p id="cartItemSize"  class="m-0 detailsCart">Size: ${selectedOption.value}</p>
                <p id="cartItemColor"  class="m-0 detailsCart">Color: ${selectedColor ? capitalizeFirstLetter(selectedColor.id) : 'No Color'}</p>
                <p class="m-0">Quantity: <span id="cartItemQty">${quantity}</span> </p>
                <p id="cartItemPrize"  class="">${itemPrize.innerText}</p>
            </div>
        </div>
        `

        let cartQty = document.querySelector('#cartQty');
        const countQty = parseInt(cartQty.innerText, 10);
        cartQty.innerText = `${countQty + quantity}`;
    }

    quantity = 1;
    itemQty.innerText = quantity;
});

const aboutUsContent = document.getElementById('aboutSection');
const termsSection = document.getElementById('termsSection');
const storesSection = document.getElementById('storesSection');
const helpSection = document.getElementById('helpSection');

function aboutUsPage() {
    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    productPage.style.display = 'none';
    termsSection.style.display = 'none';
    storesSection.style.display = 'none';
    helpSection.style.display = 'none';
    aboutUsContent.style.display = 'block';
    window.scrollTo(0, 0);
}

function termsPage() {
    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    productPage.style.display = 'none';
    aboutUsContent.style.display = 'none';
    storesSection.style.display = 'none';
    helpSection.style.display = 'none';
    termsSection.style.display = 'block';
    window.scrollTo(0, 0);
}

function storesPage() {
    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    productPage.style.display = 'none';
    aboutUsContent.style.display = 'none';
    termsSection.style.display = 'none';
    helpSection.style.display = 'none';
    storesSection.style.display = 'block';
    window.scrollTo(0, 0);
}

function helpPage() {
    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    productPage.style.display = 'none';
    aboutUsContent.style.display = 'none';
    termsSection.style.display = 'none';
    storesSection.style.display = 'none';
    helpSection.style.display = 'block';
    window.scrollTo(0, 0);
}