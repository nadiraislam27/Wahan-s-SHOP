let cart = [];


function addToCart(productName) {

    cart.push(productName);

    alert(productName + " added to cart!");

    updateCartDisplay();

}


function updateCartDisplay() {

    const cartItems =document.getElementById("cart-items");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        cartItems.appendChild(li);

    })
}


function checkout() {

    alert("CHECKOUT COMPLETED. THANK YOU FOR ORDERING FROM US!");

    cart = [];

    updateCartDisplay();

}


function loginUser(e) {

    e.preventDefault();

    alert("Logged in (demo only)");

}


function registerUser(e) {

    e.preventDefault();

    alert("Account Created (demo only)");
    
}