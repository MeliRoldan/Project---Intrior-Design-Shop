const offcanvasUl = document.getElementById('offcanvasUl');
const categoriesDiv = document.getElementById('categoriesDiv');
let categoriesList = '';
let homeCatList = '';

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

const specials = {
    single: [],
    set: []
};

products.forEach(product => {
    if(product.special === "single") {
        specials.single.push(product);
    } else if (product.special === "set") {
        specials.set.push(product);
    }
});

const singleImgDivs = document.getElementsByClassName('singleImgDiv');
const imgSetDivs = document.getElementsByClassName('imgSet');

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

function categoriesEventHandler (event) {
    const target = event.target;
    const id = target.id;

    if (target.classList.contains('nav-link') || target.classList.contains('dropdown-item')) {
        categoryPage(id);
        if (target.classList.contains('see-all')) {
            displayAllProducts();
        }
    }
}

offcanvasBody.addEventListener('click', categoriesEventHandler);
categoriesDiv.addEventListener('click', categoriesEventHandler);

function categoryPage(id) {
    mainPage.style.display = 'none';
    allProducts.style.display = 'block';
    productPage.style.display = 'none';
    displayCategoryProducts(id);
}

const productRow = document.getElementById('productRow');

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

const productPage = document.getElementById('productPage');
const itemMainImg = document.getElementById('itemMainImg');
const itemName = document.getElementById('itemName');
const itemPrize = document.getElementById('itemPrize');
const itemSku = document.getElementById('itemSku');
const itemDesciption = document.getElementById('itemDesciption');
const colorDiv = document.getElementById('colorDiv');

const tableBody = document.getElementById('tableBody');
const specDesciption = document.getElementById('specDesciption');
const inStore = document.getElementById('inStore');

const cardImgDiv = document.getElementsByClassName('.card-img-div');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    mainPage.style.display = 'none';
    allProducts.style.display = 'none';
    productPage.style.display = 'block';

    tableBody.innerHTML = '';
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

    let colorPicker = '';

    if (findItem.colors.length > 0) {
        for (let color of findItem.colors) {
            colorPicker += `
            <div class="colorOutter">
                <div class="colorInner" style="background-color: ${color};"></div>
            </div>`;
        };
    };

    colorDiv.innerHTML += colorPicker;

    let dimensions = '';

    if (findItem.dimensions.length > 0) {
        for (let dimen of findItem.dimensions) {
            dimensions += `
            <tr>
            <td id="itemH">${dimen.height} cm</td>
            <td id="itemW">${dimen.weight} cm</td>
            <td id="itemD">${dimen.depth} cm</td>
            </tr>
            `
        }
    }

    tableBody.innerHTML += dimensions;

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

mainPage.addEventListener('click', openProductPage);
productRow.addEventListener('click', openProductPage);

const itemQty = document.getElementById('itemQty');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

let quantity = 1;

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