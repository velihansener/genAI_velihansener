// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1', image: 'image (1).png' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description for Product 2', image: 'image (2).png' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description for Product 3', image: 'image (3).png' },
    { id: 4, name: 'Product 4', price: 40, description: 'Description for Product 4', image: 'image (4).png' },
    { id: 5, name: 'Product 5', price: 50, description: 'Description for Product 5', image: 'image (5).png' },
    { id: 6, name: 'Product 6', price: 60, description: 'Description for Product 6', image: 'image (6).png' },
    { id: 3, name: 'Product 7', price: 70, description: 'Description for Product 7', image: 'image (7).png' },
    { id: 3, name: 'Product 8', price: 80, description: 'Description for Product 8', image: 'image (8).png' },
    { id: 3, name: 'Product 9', price: 90, description: 'Description for Product 9', image: 'image (9).png' },
    { id: 3, name: 'Product 10', price: 100, description: 'Description for Product 10', image: 'image (10).png' },
    { id: 3, name: 'Product 11', price: 110, description: 'Description for Product 11', image: 'image (11).png' },
    { id: 3, name: 'Product 12', price: 120, description: 'Description for Product 12', image: 'image (12).png' },
    { id: 3, name: 'Product 13', price: 130, description: 'Description for Product 13', image: 'image (13).png' },
    { id: 3, name: 'Product 14', price: 140, description: 'Description for Product 14', image: 'image (14).png' },
    { id: 3, name: 'Product 15', price: 150, description: 'Description for Product 15', image: 'image (15).png' },
    { id: 3, name: 'Product 16', price: 160, description: 'Description for Product 16', image: 'image (16).png' },
    { id: 3, name: 'Product 17', price: 170, description: 'Description for Product 17', image: 'image (17).png' },
    { id: 3, name: 'Product 18', price: 180, description: 'Description for Product 18', image: 'image (18).png' },
    { id: 3, name: 'Product 19', price: 190, description: 'Description for Product 19', image: 'image (19).png' },
    { id: 3, name: 'Product 20', price: 200, description: 'Description for Product 20', image: 'image (20).png' },
    { id: 3, name: 'Product 21', price: 210, description: 'Description for Product 21', image: 'image (21).png' },
    { id: 3, name: 'Product 22', price: 220, description: 'Description for Product 22', image: 'image (22).png' },
    { id: 3, name: 'Product 23', price: 230, description: 'Description for Product 23', image: 'image (23).png' },
    { id: 3, name: 'Product 24', price: 240, description: 'Description for Product 24', image: 'image (24).png' },
    { id: 3, name: 'Product 25', price: 250, description: 'Description for Product 25', image: 'image (25).png' },
    { id: 3, name: 'Product 26', price: 260, description: 'Description for Product 26', image: 'image (26).png' },
    { id: 3, name: 'Product 27', price: 270, description: 'Description for Product 27', image: 'image (27).png' },
    { id: 3, name: 'Product 28', price: 280, description: 'Description for Product 28', image: 'image (28).png' },
    { id: 3, name: 'Product 29', price: 290, description: 'Description for Product 29', image: 'image (29).png' },
    { id: 3, name: 'Product 30', price: 300, description: 'Description for Product 30', image: 'image (30).png' },
    { id: 3, name: 'Product 31', price: 310, description: 'Description for Product 31', image: 'image (31).png' },
    { id: 3, name: 'Product 32', price: 320, description: 'Description for Product 32', image: 'image (32).png' },
    { id: 3, name: 'Product 33', price: 330, description: 'Description for Product 33', image: 'image (33).png' },
    { id: 3, name: 'Product 34', price: 340, description: 'Description for Product 34', image: 'image (34).png' },
    { id: 3, name: 'Product 35', price: 350, description: 'Description for Product 35', image: 'image (35).png' },
    { id: 3, name: 'Product 36', price: 360, description: 'Description for Product 36', image: 'image (36).png' },
    { id: 3, name: 'Product 37', price: 370, description: 'Description for Product 37', image: 'image (37).png' },
    { id: 3, name: 'Product 38', price: 380, description: 'Description for Product 38', image: 'image (38).png' },
    { id: 3, name: 'Product 39', price: 390, description: 'Description for Product 39', image: 'image (39).png' },
    { id: 3, name: 'Product 40', price: 400, description: 'Description for Product 40', image: 'image (40).png' }
  ];
  
  const productList = document.getElementById('productList');
  const cartModal = document.getElementById('cartModal');
  const cartItems = document.getElementById('cartItems');
  const viewCartBtn = document.getElementById('viewCart');
  const closeCartBtn = document.getElementsByClassName('close')[0];
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  // Display products
  function displayProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Add product to cart
  function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    const cartItem = document.createElement('li');
    cartItem.textContent = `${product.name} - $${product.price}`;
    cartItem.setAttribute('data-id', productId); // Add data-id attribute for identifying cart items
    cartItem.innerHTML += `<button class="removeBtn">Remove</button>`; // Add remove button
    cartItems.appendChild(cartItem);
    
    // Add event listener for remove button
    cartItem.querySelector('.removeBtn').addEventListener('click', function() {
      removeCartItem(productId);
    });
  }
  
  // Remove item from cart
  function removeCartItem(productId) {
    const cartItem = document.querySelector(`#cartItems li[data-id="${productId}"]`);
    if (cartItem) {
      cartItem.remove();
    }
  }
  
  // Show cart modal
  viewCartBtn.onclick = function() {
    cartModal.style.display = 'block';
  }
  
  // Close cart modal
  closeCartBtn.onclick = function() {
    cartModal.style.display = 'none';
  }
  
  // Close cart modal if user clicks outside of it
  window.onclick = function(event) {
    if (event.target == cartModal) {
      cartModal.style.display = 'none';
    }
  }
  
  // Checkout functionality (dummy implementation)
  checkoutBtn.onclick = function() {
    alert('Checkout functionality is not implemented yet!');
  }
  
  // Display products on page load
  displayProducts();
  