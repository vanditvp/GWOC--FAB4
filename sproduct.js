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
