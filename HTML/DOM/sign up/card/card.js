const container = document.querySelector(".card-container");


function populateProducts(product) {
    const productCard = document.createElement("div");

    productCard.innerHTML = `
        <div class="card">

            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>

            <h2>${product.title}</h2>

            <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="reviews">
                    (${product.rating?.count || 0} reviews)
                </span>
            </div>

            <h3>$${product.price}</h3>

            <p>
                ${product.description}
            </p>

            <button class="cart-btn">
                Add to Cart
                <span>🛒</span>
            </button>

        </div>
    `;

    container.appendChild(productCard);
}


async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        console.log(products);

        products.forEach((product) => {
            populateProducts(product);
        });

    } catch (error) {
        console.log(`Error is: ${error}`);
    }
}


fetchProducts();

fetchProducts();

