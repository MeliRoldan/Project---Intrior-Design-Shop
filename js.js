const products = {
    single: [
        { imgSrc: 'images/single-img-1.jpg', name: 'Minimal 954', description: 'Elegant single product perfect for any space.', price: 250, colors: ['burlywood', 'olive', 'darkred'] },
        { imgSrc: 'images/sofa-1.jpg', name: 'Safari 900', description: 'Comfortable sofa with modern design.', price: 1500, colors: ['lightgray', 'olive'] },
        { imgSrc: 'images/photo-1565031491910-e57fac031c41.jpg', name: 'Gwen 968', description: 'Stylish single item to enhance your home.', price: 400, colors: [] },
        { imgSrc: 'images/photo-1606744824163-985d376605aa.avif', name: 'Grace 110', description: 'Unique single piece for contemporary interiors.', price: 600, colors: [] },
        { imgSrc: 'images/table.jpg', name: 'Zana 131', description: 'Modern and sleek single product for any decor.', price: 800, colors: [] },
        { imgSrc: 'images/photo-1618221195710-dd6b41faaea6.avif', name: 'Terra 686', description: 'Chic single piece with a stylish touch.', price: 350, colors: [] },
        { imgSrc: 'images/photo-1549187774-b4e9b0445b41.avif', name: 'York 775', description: 'Trendy single item for contemporary spaces.', price: 500, colors: [] },
    ],
    set: [
        { imgSrc: 'images/chair.avif', name: 'Beudje 905', description: 'Comfortable chair set for modern homes.', price: 1200, colors: ['burlywood', 'red', 'peru'] },
        { imgSrc: 'images/chair4.avif', name: 'Origin 901', description: 'Stylish chairs that complement any decor.', price: 1500, colors: [] },
        { imgSrc: 'images/bascket.jpg', name: 'Marocco 95', description: 'Functional and decorative basket set.', price: 60, colors: [] },
        { imgSrc: 'images/bedside.jpg', name: 'Retro 707', description: 'Elegant bedside table set for your bedroom.', price: 200, colors: [] },
        { imgSrc: 'images/chair2.avif', name: 'Kvela 988', description: 'Modern chair set for any living area.', price: 900, colors: [] },
        { imgSrc: 'images/coffe-table.jpg', name: 'Chrome 101', description: 'Chic coffee table set to enhance your living space.', price: 400, colors: [] },
        { imgSrc: 'images/chair3.avif', name: 'Blanko 001', description: 'Stylish chair set for contemporary interiors.', price: 1300, colors: ['black', 'cornsilk'] },
        { imgSrc: 'images/pillow-1.jpg', name: 'Sandy 303', description: 'Decorative pillow set for comfort and style.', price: 80, colors: ['lightgray', 'olive', 'cornsilk', 'burlywood'] },
        { imgSrc: 'images/chair5.jpg', name: 'Greko 383', description: 'Elegant chair set with a modern design.', price: 1400, colors: ['olive', 'darkred', 'peru'] },
        { imgSrc: 'images/sofa-grey-half.jpg', name: 'CRO 909', description: 'Comfortable sofa set for any living room.', price: 2500, colors: ['lightgray', 'olive', 'darkred', 'peru'] },
        { imgSrc: 'images/vase4.jpg', name: 'Murel 707', description: 'Decorative vase set for a stylish touch.', price: 90, colors: [] },
        { imgSrc: 'images/pillow.avif', name: 'Soho 353', description: 'Soft and cozy pillow set for any space.', price: 70, colors: [] },
        { imgSrc: 'images/chair6.jpg', name: 'Amer 030', description: 'Stylish and comfortable chair set.', price: 1600, colors: [] },
        { imgSrc: 'images/vase5.avif', name: 'Stela 050', description: 'Elegant vase set to enhance your decor.', price: 120, colors: [] },
        { imgSrc: 'images/chairs.avif', name: 'Nutto 504', description: 'Modern chair set for a fresh look.', price: 1100, colors: ['darkred', 'black'] },
        { imgSrc: 'images/vase.jpg', name: 'Tuta 440', description: 'Decorative vase set for adding elegance.', price: 75, colors: ['cornsilk', 'darkred', 'olive', 'peru'] },
        { imgSrc: 'images/coffe-table3.jpg', name: 'Zino 080', description: 'Functional coffee table set for modern homes.', price: 400, colors: [] },
        { imgSrc: 'images/lamp.jpg', name: 'Fema 702', description: 'Stylish lamp set to brighten up your space.', price: 200, colors: ['cornsilk', 'darkred', 'olive', 'peru'] },
        { imgSrc: 'images/vase3.jpg', name: 'Zwin 011', description: 'Decorative vase set with a modern design.', price: 100, colors: ['cornsilk', 'lightgray'] },
        { imgSrc: 'images/wood-bowl.avif', name: 'XEE 455', description: 'Unique wooden bowl set for a rustic touch.', price: 150, colors: [] }
    ]
};

const singleImgDivs = document.getElementsByClassName('singleImgDiv');
const imgSetDivs = document.getElementsByClassName('imgSet');

function displayProducts() {
    Array.from(singleImgDivs).forEach((div, index) => {
        if (index < products.single.length) {
            const product = products.single[index];
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
        if (index < products.set.length) {
            const product = products.set[index];
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

const offcanvasBody = document.getElementById('offcanvas-body')
const canvasNavlink = offcanvasBody.querySelectorAll('.nav-link', '.dropdown-item');
const mainPage = document.getElementById('main');
const allProducts = document.getElementById('allProducts');

canvasNavlink.forEach(link => {
    link.addEventListener('click', categoryPage);
})

function categoryPage() {
    mainPage.style.display = 'none';
    allProducts.style.display = 'block';
    displayCategoryProducts();
}

const productRow = document.getElementById('productRow');
const allProductsArr = products.single.concat(products.set);

function displayCategoryProducts() {
    let htmlContent = '';
    
    allProductsArr.forEach(product => {
        let colorArr = '';
        
        if(product.colors.length > 0) {
            colorArr = product.colors.map(color => 
                `<div style="border-radius: 50%; width: 20px; height: 20px; padding: 2px; border: 0px solid gray; position: relative; margin: 0px 4px;">
                    <div style="border-radius: 50%; width: 20px; height: 20px; background-color: ${color}; transform: translate(-50%, -50%); top: 50%; left: 50%; position: absolute;"></div>
                </div>`
            ).join('');
        }

        htmlContent += `
        <div class="col">
            <div class="card" style="height: 400px; border: none;">
                <div class="img-div" style="height: 80%;">
                    <img src="${product.imgSrc}" class="card-img-top w-100 h-100" alt="${product.name}" style="border-top-left-radius: 0;
                    border-top-right-radius: 0;">
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
        `
    })

    productRow.innerHTML = htmlContent;
}