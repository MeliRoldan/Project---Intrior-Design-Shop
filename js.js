const offcanvasUl = document.getElementById('offcanvasUl');
const categoriesDiv = document.getElementById('categoriesDiv');

const categoriesList = categories.map(category => {
    const subcategoriesList = (category.subcategories || []).map(subcategory => `<li><a id="${subcategory.id}" class="dropdown-item" href="#">${subcategory.name}</a></li>`).join('');

    return `<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="${category.id}" role="button" data-bs-toggle="dropdown" aria-expanded="false">${category.name} </a>
        <ul class="dropdown-menu" aria-labelledby="${category.id}Dropdown">${subcategoriesList}</ul>
    </li>`
}).join('');

const homeCatList = categories.map(category => `<div><a id="${category.id}" class="nav-link" href="#">${category.name}</a></div>`).join('');

offcanvasUl.innerHTML += categoriesList;
categoriesDiv.innerHTML += homeCatList;

//creating a list to save special products to render on homepage
const specials = {single: [], set: []};

//saving special products to corresponding list
products.forEach(product => {
    if(product.special) specials[product.special].push(product);
});

const singleImgDivs = document.getElementsByClassName('singleImgDiv');
const imgSetDivs = document.getElementsByClassName('imgSet');

function renderProducts(div, product) {
    div.style.backgroundImage = `url('${product.imgSrc}')`;
    const productInfoDiv = div.querySelector('.productInfoDiv');
    if (productInfoDiv) {
        const productDivh4 = productInfoDiv.querySelector('.productDivh4');
        const productDivh5 = div.querySelector('.productDivh5');
        if (productDivh4 && productDivh5) {
            productDivh4.innerHTML = `${product.name}`;
            productDivh5.innerHTML = `${product.offer}`;
            const productAdiv = div.closest('.productAdiv');
            productAdiv.id = `${product.id}`;
        }
    }
}

//rendering special products on homepage
function displayProducts() {
    Array.from(singleImgDivs).forEach((div, index) => {
        if (index < specials.single.length) renderProducts(div, specials.single[index]);
    });

    Array.from(imgSetDivs).forEach((div, index) => {
        if (index < specials.set.length) renderProducts(div, specials.set[index]);
    });
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
    cartPage.style.display = 'none';
    
    if(id === 'all' || id === 'newCollection') {
        displayAllProducts();
    } else {
        displayCategoryProducts(id);
    }
}

const productRow = document.getElementById('productRow');

//rendering products based on category/subcategory
function displayCategoryProducts(id) {
    const filteredProducts = products.filter(product => product.category === id || product.subcategory === id);

    const noProductText = `<div style="width: 100%; height: 300px;" class="d-flex justify-content-center align-items-center"> <p class="text-center fs-4">There are no products currently to show. <br> Come back later.</p></div>`;

    const htmlContent = filteredProducts.map(product => {
        const colorArr = product.colors?.map(color => `<div class="colorOutter"><div class="colorInner" style="background-color:${color};"></div></div>`).join('') || '';

        return `<div class="col">
            <div class="card itemCard" style="height: 573px; border: none;">
                <div id="${product.id}" class="card-img-div" style="height: 80%;">
                    <img id="${product.id}" src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0; object-fit: cover;">
                </div>
                <div class="card-body" style="height: 20%; text-align: center;">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="d-flex justify-content-center align-items-center h-auto">${colorArr}</div>
                    <p class="card-text mt-2">${product.price} $</p>
                </div>
            </div>
        </div>`;
    }).join('');

    productRow.innerHTML = filteredProducts.length ? htmlContent : noProductText;
}

//rendering all products for See All section
function displayAllProducts() {
    const htmlContent = products.map(product => {
        const colorArr = product.colors?.map(color => `<div style="border-radius: 50%; width: 20px; height: 20px; padding: 2px; border: 0px solid gray; position: relative; margin: 0px 4px;">
            <div style="border-radius: 50%; width: 20px; height: 20px; background-color: ${color}; transform: translate(-50%, -50%); top: 50%; left: 50%; position: absolute;"></div>
        </div>`).join('') || '';

        return `<div class="col">
            <div class="card" style="height: 400px; border: none;">
                    <div id="${product.id}" class="card-img-div" style="height: 80%;">
                        <img id="${product.id}" src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0; object-fit: cover;">
                    </div>
                    <div class="card-body" style="height: 20%; text-align: center;">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="d-flex justify-content-center align-items-center h-auto">${colorArr}</div>
                        <p class="card-text mt-2">${product.price} $</p>
                    </div>
                </div>
        </div>`;
    }).join('');

    productRow.innerHTML = htmlContent;
}

const aboutUsContent = document.getElementById('aboutSection');
const termsSection = document.getElementById('termsSection');
const storesSection = document.getElementById('storesSection');
const helpSection = document.getElementById('helpSection');
const cartPage = document.getElementById('cartPage');

function showSection(section) {
    const sections = {mainPage, allProducts, productPage, aboutUsContent, termsSection, storesSection, helpSection, cartPage};

    Object.values(sections).forEach(sec => {
        if(sec !== section) {
            sec.style.display = 'none';
        }
    });

    section.style.display = 'block';
    window.scrollTo(0, 0);
}

//URL managment on hash change
function hashChange() {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const categoryId = params.get('category');
    const productId = params.get('product');

    const pagesDisplay = {
        'about-us': () => showSection(aboutUsContent),
        'help': () => showSection(helpSection),
        'stores': () => showSection(storesSection),
        'terms': () => showSection(termsSection),
        'cart-page': () => {
            showSection(cartPage);
            openCartPage();
        }
    };

    if (pagesDisplay[hash]) {
        pagesDisplay[hash]();
    } else if (categoryId){
        categoryPage(categoryId);
    } else if (productId){
        productPageRender(productId);
        window.scrollTo(0, 0);
    } else {
        showSection(mainPage);
    }
};

//URL managment on page load
window.addEventListener('hashchange', hashChange);
window.onload = hashChange;

const productPage = document.getElementById('productPage');
const itemName = document.getElementById('itemName');
const carouselInner = document.getElementById('itemSlider');
const itemPrize = document.getElementById('itemPrize');
const itemSku = document.getElementById('itemSku');
const itemDesciption = document.getElementById('itemDesciption');
const colorDiv = document.getElementById('colorDiv');
const optionsDiv = document.getElementById('options');
const specDesciption = document.getElementById('specDesciption');
const inStore = document.getElementById('inStore');
const itemQty = document.getElementById('itemQty');

let currentProduct = null;

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// rendering product page
function productPageRender (divId) {
    window.location.hash = `product=${divId}`;
    itemQty.innerText = '1';

    ['main', 'allProducts', 'aboutSection', 'termsSection', 'storesSection', 'helpSection', 'cartPage'].forEach(page => {
        document.getElementById(page).style.display = 'none';
    });
    productPage.style.display = 'block';

    optionsDiv.innerHTML = specDesciption.innerHTML = inStore.innerHTML = '';
    
    currentProduct = products.find(product => product.id === divId);
    
    itemName.innerHTML = currentProduct.name;
    itemPrize.innerHTML = `${currentProduct.price} $`;
    itemSku.innerHTML = currentProduct.id;
    itemDesciption.innerHTML = currentProduct.description;

    renderColors(currentProduct.colors);
    renderCarousel(currentProduct);
    renderOptions(currentProduct.options);
    renderSpecs(currentProduct.specifications);
    renderInstore(currentProduct.availability);

    displaySimiliarItems(currentProduct);
}

function renderColors(colors) {
    const defaultColor = colors[0];
    colorDiv.innerHTML = colors.map(color => `
        <div class="colorOutter">
            <div id="${color}" class="colorInner ${color === defaultColor ? 'checked' : ''}" style="background-color: ${color}; ${color === defaultColor ? 'outline: 2px solid #333;' : ''}"></div>
        </div>`
    ).join('');
}

function renderCarousel(product) {
    const carouselItems = product.colors.length > 0 ? product.images[product.colors[0]].map((image, index) => 
        `<div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image}" class="d-block w-100" alt="${product.name}">
        </div>`
    ).join('')
    : `<div class="carousel-item active">
        <img src="${product.imgSrc}" class="d-block w-100" alt="${product.name}">
    </div>`;

    carouselInner.innerHTML = carouselItems;
}

function renderOptions(options) {
    optionsDiv.innerHTML = options.map((dimen, index) => `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${index + 1}" value="${dimen.size}">
            <label class="form-check-label" for="flexRadioDefault${index + 1}">Size: ${dimen.size}</label>
        </div>`
    ).join('');
}

function renderSpecs(specs) {
    specDesciption.innerHTML = Object.entries(specs).map(([spec, value]) => `
    <p class="specP">${capitalizeFirstLetter(spec)}: ${value}</p>
    `).join('');
}

function renderInstore(stores) {
    inStore.innerHTML = stores.map(store => `<p class="instoreP">
            <span class="fst-italic">${store.branch} - </span>
            <span class="fst-italic"> ${store.address} - </span>
            <span class="fw-bold text-uppercase"> Qty: <span class="fw-bold">${store.quantity}</span></span>
        </p>`
    ).join('');
}

// calling product page
function openProductPage (event) {
    event.preventDefault();
    const target = event.target.closest('.productAdiv') || event.target.closest('.card-img-div');

    if(target) {
        productPageRender(target.id);
    }
}

mainPage.addEventListener('click', openProductPage);
productRow.addEventListener('click', openProductPage);

const similarItemsRow = document.getElementById('similarItemsRow');
const similarProductsH2 = document.getElementById('similarProductsH2');

function displaySimiliarItems(itemId) {
    const filteredProducts = products.filter(product => product.subcategory === itemId.subcategory && product.id !== itemId.id);
    
    if (filteredProducts.length > 0) {
        similarProductsH2.style.display = "block";
        const htmlContent = filteredProducts.map(product => {
            const colorArr = product.colors ? product.colors.map(color => `<div class="colorOutter">
                    <div class="colorInner" style="background-color: ${color};"></div>
                </div>`
            ).join('') : '';
    
            return `<div class="col">
                <div class="card itemCard">
                    <div id="${product.id}" class="card-img-div">
                        <img id="${product.id}" src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0; object-fit: cover;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="d-flex justify-content-center align-items-center h-auto">
                            ${colorArr}
                        </div>
                        <p class="card-text mt-2">${product.price} $</p>
                    </div>
                </div>
            </div>`;
        }).join('');

        similarItemsRow.innerHTML = htmlContent;
    } else {
        similarProductsH2.style.display = "none";
    }
}

similarItemsRow.addEventListener('click', openProductPage);

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
        document.querySelectorAll('.colorInner').forEach(color => {
            color.classList.remove('checked');
            color.style.outline = '';
        });

        target.classList.add('checked');
        target.style.outline = '2px solid #333';
    
        const selectedColor = target.id;
        renderCarousel({images: currentProduct.images, colors: [selectedColor], name: currentProduct.name});
    }
});

const viewCartBtn = document.getElementById('viewCartBtn');
const emptyCartP = document.getElementById('emptyCartP');

const updateCartQty = (qty) => {
    const cartQty = document.querySelector('#cartQty');
    cartQty.innerText = parseInt(cartQty.innerText, 10) + qty;
};

//adding product to cart
addToCart.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
    const selectedColor = document.querySelector('.colorInner.checked');

    //checking product option
    if (!selectedOption) {
        alertRadio.style.display = "block";
        alertRadio.style.color = "red";
        alertRadio.innerText = "Please select size.";
        return;
    }
        
    alertRadio.style.display = '';
    viewCartBtn.innerHTML = '';
    emptyCartP.innerHTML = `<a href="#cart-page">View cart</a>`;

    const variationId = `${selectedOption.value}-${selectedColor ? selectedColor.id : 'no-color'}`;
    const existingItem = cartItems.querySelector(`[data-variation-id="${variationId}"]`);

    //managing cart display
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasCart'));
    offcanvas.show();

    const activeCarouselItem = document.querySelector('.carousel-item.active img');
    const mainImageSrc = activeCarouselItem ? activeCarouselItem.src : currentProduct.imgSrc;

    //updating cart quantity on in-cart product
    if (existingItem) {
        const inCartQty = existingItem.querySelector('#cartItemQty');
        inCartQty.innerText = parseInt(inCartQty.innerText, 10) + quantity;
        updateCartQty(quantity);
    } else {
        //add new product to cart
        cartItems.innerHTML += `
        <div class="cartCard mb-3" data-variation-id="${variationId}">
            <div class="cartCardImg">
                <img src="${mainImageSrc}" alt="${itemName.innerText}">
            </div>
            <div class="cartCardInfo ps-2">
                <p id="cartItemName" class="m-0">${itemName.innerText}</p>
                <p id="cartItemSku"  class="mb-1 detailsCart">${itemSku.innerText}</p>
                <p id="cartItemSize"  class="m-0 detailsCart">Size: ${selectedOption.value}</p>
                <p id="cartItemColor"  class="m-0 detailsCart">Color: ${selectedColor ? capitalizeFirstLetter(selectedColor.id) : 'No Color'}</p>
                <p class="m-0">Quantity: <span id="cartItemQty">${quantity}</span> </p>
                <p id="cartItemPrize"  class="">${itemPrize.innerText}</p>
            </div>
        </div>
        `
        updateCartQty(quantity);
    }

    viewCartBtn.innerHTML += `<button id="cartViewBtn" class="addToCartBtn" role="button" aria-controls="offcanvasCart">View Cart</button>`;

    quantity = 1;
    itemQty.innerText = quantity;
});

const viewCartItems = document.getElementById('viewCartItems');
const cartCanvas = document.getElementById('cartCanvas');

function openCartPage() {
    viewCartItems.innerHTML = '';

    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    aboutUsContent.style.display = 'none';
    termsSection.style.display = 'none';
    storesSection.style.display = 'none';
    helpSection.style.display = 'none';
    productPage.style.display = 'none';
    cartPage.style.display = 'block';

    viewCartItems.innerHTML = 'Coming Soon';

    //უნდა წამოიღო ქართის ეიჩთიემელი და თითოულის დივისთვის 
}

cartCanvas.addEventListener('click', openCartPage);