const products = [
    { id: 1, name: "Sofa", category: "living-room", image: "sofa.jpg" },
    { id: 2, name: "Coffee Table", category: "living-room", image: "coffee-table.jpg" },
    { id: 3, name: "Bed", category: "bedroom", image: "bed.jpg" },
    { id: 4, name: "Wardrobe", category: "bedroom", image: "wardrobe.jpg" },
    { id: 5, name: "Office Chair", category: "office", image: "office-chair.jpg" },
    { id: 6, name: "Desk", category: "office", image: "desk.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const categoryElements = document.querySelectorAll("#categories li");
    const productsDiv = document.getElementById("products");

    categoryElements.forEach(el => {
        el.addEventListener("click", () => {
            const category = el.getAttribute("data-category");
            renderProducts(category);
        });
    });

    function renderProducts(category) {
        productsDiv.innerHTML = ""; 
        const filteredProducts = products.filter(p => p.category === category);

        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <a href="testproduct.html?id=${product.id}">View Details</a>
            `;
            productsDiv.appendChild(productDiv);
        });
    }

    // Product Page Logic
    const productDetailsDiv = document.getElementById("product-details");
    if (productDetailsDiv) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get("id"));
        const product = products.find(p => p.id === productId);

        productDetailsDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: $${(productId * 100).toFixed(2)}</p>
        `;
    }
});
