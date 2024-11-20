let cart = [];

// Function to add products to the cart
function addToCart(name, price) {
  // Check if the item is already in the cart
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

// Function to update the cart display and total price
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItemsElement.innerHTML += `
      <li>${item.name} - ₦${item.price} x ${item.quantity}</li>
    `;
  });

  document.getElementById('total-price').innerText = `Total: ₦${total.toFixed(2)}`;
  document.getElementById('cart-count').innerText = cart.length;
}

// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
  }
}
function clearCart() {
  cart = [];
  console.log('Cart has been cleared:', cart);
  updateCart();
}

// Clear the cart
clearCart();
