const categories = [
    {
        name: 'Furniture',
        id: 'Furniture',
        subcategories: [
            { name: 'Sofas', id: 'Sofas' },
            { name: 'Tables', id: 'Tables' },
            { name: 'Chairs', id: 'Chairs' },
            { name: 'Bedsides', id: 'Bedsides' }
        ]
    },
    {
        name: 'Accessories',
        id: 'Accessories',
        subcategories: [
            { name: 'Cushions', id: 'Cushions' },
            { name: 'Lamps', id: 'Lamps' }
        ]
    },
    {
        name: 'Decor',
        id: 'Decor',
        subcategories: [
            { name: 'Vases', id: 'Vases' },
            { name: 'Baskets', id: 'Baskets' },
            { name: 'Bowls', id: 'Bowls' }
        ]
    },
    {
        name: 'Textile',
        id: 'Textile',
        subcategories: [
            { name: 'Tablecloths', id: 'Tablecloths' }
        ]
    }
];

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

const products = [
    { id: 1, imgSrc: 'images/single-img-1.jpg', name: 'Minimal 954', description: 'Elegant single product perfect for any space.', price: 250, colors: ['burlywood', 'olive', 'darkred'], special: 'single', category: 'Furniture', subcategory: 'Sofas' },
    { id: 2, imgSrc: 'images/sofa-1.jpg', name: 'Safari 900', description: 'Comfortable sofa with modern design.', price: 1500, colors: ['lightgray', 'olive'], special: 'single', category: 'Furniture', subcategory: 'Sofas' },
    { id: 3, imgSrc: 'images/photo-1565031491910-e57fac031c41.jpg', name: 'Gwen 968', description: 'Stylish single item to enhance your home.', price: 400, colors: [], special: 'single', category: 'Furniture', subcategory: 'Sofas' },
    { id: 4, imgSrc: 'images/photo-1606744824163-985d376605aa.avif', name: 'Grace 110', description: 'Unique single piece for contemporary interiors.', price: 600, colors: [], special: 'single', category: 'Furniture', subcategory: 'Chairs' },
    { id: 5, imgSrc: 'images/table.jpg', name: 'Zana 131', description: 'Modern and sleek single product for any decor.', price: 800, colors: [], special: 'single', category: 'Furniture', subcategory: 'Tables' },
    { id: 6, imgSrc: 'images/photo-1618221195710-dd6b41faaea6.avif', name: 'Terra 686', description: 'Chic single piece with a stylish touch.', price: 350, colors: [], special: 'single', category: 'Furniture', subcategory: 'Tables' },
    { id: 7, imgSrc: 'images/photo-1549187774-b4e9b0445b41.avif', name: 'York 775', description: 'Trendy single item for contemporary spaces.', price: 500, colors: [], special: 'single', category: 'Furniture', subcategory: 'Sofas' },
    { id: 8, imgSrc: 'images/chair.avif', name: 'Beudje 905', description: 'Comfortable chair set for modern homes.', price: 1200, colors: ['burlywood', 'red', 'peru'], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 9, imgSrc: 'images/chair4.avif', name: 'Origin 901', description: 'Stylish chairs that complement any decor.', price: 1500, colors: [], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 10, imgSrc: 'images/bascket.jpg', name: 'Marocco 95', description: 'Functional and decorative basket set.', price: 60, colors: [], special: 'set', category: 'Decor', subcategory: 'Baskets' },
    { id: 11, imgSrc: 'images/bedside.jpg', name: 'Retro 707', description: 'Elegant bedside table set for your bedroom.', price: 200, colors: [], special: 'set', category: 'Furniture', subcategory: 'Bedsides' },
    { id: 12, imgSrc: 'images/chair2.avif', name: 'Kvela 988', description: 'Modern chair set for any living area.', price: 900, colors: [], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 13, imgSrc: 'images/coffe-table.jpg', name: 'Chrome 101', description: 'Chic coffee table set to enhance your living space.', price: 400, colors: [], special: 'set', category: 'Furniture', subcategory: 'Tables' },
    { id: 14, imgSrc: 'images/chair3.avif', name: 'Blanko 001', description: 'Stylish chair set for contemporary interiors.', price: 1300, colors: ['black', 'cornsilk'], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 15, imgSrc: 'images/pillow-1.jpg', name: 'Sandy 303', description: 'Decorative pillow set for comfort and style.', price: 80, colors: ['lightgray', 'olive', 'cornsilk', 'burlywood'], special: 'set', category: 'Accessories', subcategory: 'Cushions' },
    { id: 16, imgSrc: 'images/chair5.jpg', name: 'Greko 383', description: 'Elegant chair set with a modern design.', price: 1400, colors: ['olive', 'darkred', 'peru'], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 17, imgSrc: 'images/sofa-grey-half.jpg', name: 'CRO 909', description: 'Comfortable sofa set for any living room.', price: 2500, colors: ['lightgray', 'olive', 'darkred', 'peru'], special: 'set', category: 'Furniture', subcategory: 'Sofas' },
    { id: 18, imgSrc: 'images/vase4.jpg', name: 'Murel 707', description: 'Decorative vase set for a stylish touch.', price: 90, colors: [], special: 'set', category: 'Decor', subcategory: 'Vases' },
    { id: 19, imgSrc: 'images/pillow.avif', name: 'Soho 353', description: 'Soft and cozy pillow set for any space.', price: 70, colors: [], special: 'set', category: 'Accessories', subcategory: 'Cushions' },
    { id: 20, imgSrc: 'images/chair6.jpg', name: 'Amer 030', description: 'Stylish and comfortable chair set.', price: 1600, colors: [], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 21, imgSrc: 'images/vase5.avif', name: 'Stela 050', description: 'Elegant vase set to enhance your decor.', price: 120, colors: [], special: 'set', category: 'Decor', subcategory: 'Vases' },
    { id: 22, imgSrc: 'images/chairs.avif', name: 'Nutto 504', description: 'Modern chair set for a fresh look.', price: 1100, colors: ['darkred', 'black'], special: 'set', category: 'Furniture', subcategory: 'Chairs' },
    { id: 23, imgSrc: 'images/vase.jpg', name: 'Tuta 440', description: 'Decorative vase set for adding elegance.', price: 75, colors: ['cornsilk', 'darkred', 'olive', 'peru'], special: 'set', category: 'Decor', subcategory: 'Vases' },
    { id: 24, imgSrc: 'images/coffe-table3.jpg', name: 'Zino 080', description: 'Functional coffee table set for modern homes.', price: 400, colors: [], special: 'set', category: 'Furniture', subcategory: 'Tables' },
    { id: 25, imgSrc: 'images/lamp.jpg', name: 'Fema 702', description: 'Stylish lamp set to brighten up your space.', price: 200, colors: ['cornsilk', 'darkred', 'olive', 'peru'], special: 'set', category: 'Accessories', subcategory: 'Lamps' },
    { id: 26, imgSrc: 'images/vase3.jpg', name: 'Zwin 011', description: 'Decorative vase set with a modern design.', price: 100, colors: ['cornsilk', 'lightgray'], special: 'set', category: 'Decor', subcategory: 'Vases' },
    { id: 27, imgSrc: 'images/wood-bowl.avif', name: 'XEE 455', description: 'Unique wooden bowl set for a rustic touch.', price: 150, colors: [], special: 'set', category: 'Decor', subcategory: 'Bowls' }
];

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
            //console.log(productInfoDiv)
            if (productInfoDiv) {
                const productDivh4 = productInfoDiv.querySelector('.productDivh4');
                if (productDivh4) {
                    productDivh4.innerHTML = `${product.name}`;
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
                if (productDivh4) {
                    productDivh4.innerHTML = `${product.name}`;
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
                    colorArr += `<div style="border-radius: 50%; width: 20px; height: 20px; padding: 2px; border: 0px solid gray; position: relative; margin: 0px 4px;">
                            <div style="border-radius: 50%; width: 20px; height: 20px; background-color: ${color}; transform: translate(-50%, -50%); top: 50%; left: 50%; position: absolute;"></div>
                        </div>`;
                }
            }
    
            htmlContent += `
            <div class="col">
                <div class="card" style="height: 400px; border: none;">
                    <div class="img-div" style="height: 80%;">
                        <img src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0;">
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
                    <div class="img-div" style="height: 80%;">
                        <img src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0; border-top-right-radius: 0;">
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