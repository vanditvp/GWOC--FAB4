// Function to remove a product by ID
function removeProduct(productId) {
    // Send a DELETE request to the server
    fetch(`http://localhost:3000/deleteProduct/${productId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // If the deletion is successful, remove the product element from the UI
          var productElement = document.getElementById(productId);
          if (productElement) {
            productElement.remove();
          }
        } else {
          console.error('Error deleting product:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  }
  
  // Function to load products from the server and display them
  function loadProducts() {
    // Send a GET request to the server to fetch all products
    fetch('http://localhost:3000/getProducts')
      .then(response => response.json())
      .then(products => {
        // Call a function to render the products in the UI
        renderProducts(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
  
  // Function to render products in the UI
  function renderProducts(products) {
    // Get the container element where products will be displayed
    var container = document.querySelector('.pro-container');
  
    // Clear the existing content in the container
    container.innerHTML = '';
  
    // Loop through the products and create HTML elements for each product
    products.forEach(product => {
      var productElement = createProductElement(product);
      // Append the product element to the container
      container.appendChild(productElement);
    });
  }
  
  // Function to create an HTML element for a product
  function createProductElement(product) {
    var productElement = document.createElement('div');
    productElement.classList.add('pro');
    productElement.id = product.id;
    productElement.onclick = function () {
      window.location.href = `${product.id}.html`;
    };
  
    var imgElement = document.createElement('img');
    imgElement.src = product.image || 'placeholder.jpg'; // Add a placeholder image URL
  
    var desElement = document.createElement('div');
    desElement.classList.add('des');
  
    var spanElement = document.createElement('span');
    spanElement.innerText = 'Strinja';
  
    var h5Element = document.createElement('h5');
    h5Element.innerText = product.name;
  
    var starElement = document.createElement('div');
    starElement.classList.add('star');
  
    for (let i = 0; i < 5; i++) {
      var starIcon = document.createElement('i');
      starIcon.classList.add('fas', 'fa-star');
      starElement.appendChild(starIcon);
    }
  
    var h4Element = document.createElement('h4');
    h4Element.innerText = `Rs. ${product.price}`;
  
    var closeLink = document.createElement('a');
    closeLink.href = '#';
    closeLink.onclick = function (event) {
      event.stopPropagation();
      openWhatsAppDialog(product.name,product.price);
    };
  
    var closeIcon = document.createElement('i');
    closeIcon.classList.add('fa', 'fa-whatsapp', 'cart');
  
    // Append elements to the product element
    closeLink.appendChild(closeIcon);
    desElement.appendChild(spanElement);
    desElement.appendChild(h5Element);
    desElement.appendChild(starElement);
    desElement.appendChild(h4Element);
    desElement.appendChild(closeLink);
    productElement.appendChild(imgElement);
    productElement.appendChild(desElement);
  
    return productElement;
  }
  
  // Load products when the page is loaded
  document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
  });
  
  // Other code related to mobile navigation and WhatsApp functions...
  
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');
  if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    });
  }
  if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  }
  
  function openWhatsAppDialog(productName, productPrice) {
    var phonenumber = "+918340605194";
    var message = "I'm interested in the product:\n" +
      "Name: " + productName + "\n" +
      "Price: " + productPrice;
  
    var url = "https://wa.me/" + phonenumber + "?text=" + encodeURIComponent(message);
    var Quantity =
      window.open(url, '_blank').focus();
  }
  
  function openWhatsApp(productName, productPrice) {
    var phonenumber = "+918340605194";
    var quantity = document.getElementById('q').value;
    var message = "I'm interested in the product:\n" +
      "Name: " + productName + "\n" +
      "Price: " + productPrice + "\n" + "Quantity: " + quantity;
  
    var url = "https://wa.me/" + phonenumber + "?text=" + encodeURIComponent(message);
  
    window.open(url, '_blank').focus();
  }
  