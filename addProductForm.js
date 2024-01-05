function addProduct(event) {
    event.preventDefault();
  
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;
    const productDescription = document.getElementById('productDescription').value;
  
    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription,
    };
  
    fetch('http://localhost:3000/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        alert(message);
  
        // After adding the product, create an HTML file dynamically
        createProductHTML(newProduct);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  }
  function createProductHTML(product) {
    const productHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
    <link rel="stylesheet" href="gallery.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
</head>
<body>
  <nav id="navi" class="navbar navbar-expand-lg" style="position: sticky;" >
    <div class="container-fluid">
      <img id="logo" class="mx-4" src="logo1.jpg" alt="" />
      <a class="navbar-brand" href="#" id="v1">Strinja</a>
      <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <div class="right-container">
          <div class="right-container-child">
            <a class="nav-item" style="color: turquoise;" href="mainpage.html">
              <span></span><span></span><span></span><span></span>Home
            </a>
            <a class="nav-item-active" href="gallery.html" style="color: turquoise;" ><span></span><span></span><span></span><span></span>Gallery</a><a
              class="nav-item" href="aboutus.html" style="color: turquoise;"><span></span><span></span><span></span><span></span>About Us</a><a
              class="nav-item" href="contactus.html" style="color: turquoise;"><span></span><span></span><span></span><span></span>Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </nav>
            <section id="prodetails" class="section-p1">
            <div id="images">
            <div class="single-pro-image">
               <img src="${product.image}" width="100%" id="MainImg">
            </div>
            <div class="small-img-group">
               <div class="small-img-col">
                   <img src="${product.image}" width="100%" class="small-img">
               </div>
               <div class="small-img-col">
                   <img src="s2.jpg" width="100%" class="small-img">
               </div>
               <div class="small-img-col">
                   <img src="s3.jpg" width="100%" class="small-img">
               </div>
               <div class="small-img-col">
                   <img src="s1.jpg" width="100%" class="small-img">
               </div>
            </div>
           </div>           
                <div class="single-pro-details">
                    <h4>${product.name}</h4>
                    <h2>${product.price}</h2>
                    <input type="number" value="1" min="1" id="q">  
                    <button onclick="event.preventDefault(); openWhatsApp('${product.name}', '${product.price}')">Buy</button>
                    <h4>Product Details </h4>
                    <span>${product.description}</span>
                </div>   
            </section>
            <section id="product1" class="section-p1">
    <h2>Featured Products</h2>
    <div class="pro-container">
        
        <div class="pro" onclick="window.location.href='sproduct13.html';">
            <img src="sproduct13.jpg">
            <div class="des">
                <span>Strinja</span>
                <h5>The Puppy</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>Rs. 6500</h4>
            </div>
            <a href="#" onclick="event.preventDefault(); openWhatsAppDialog('The Puppy', 'Rs. 6500')"><i class="fa fa-whatsapp cart"></i></a>
        </div>
        <div class="pro" onclick="window.location.href='sproduct14.html';">
            <img src="sproduct14.jpg">
            <div class="des">
                <span>Strinja</span>
                <h5>Sudarshana</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>Rs. 7400</h4>
            </div>
            <a href="#" onclick="event.preventDefault(); openWhatsAppDialog('Sudarshana', 'Rs. 7400')"><i class="fa fa-whatsapp cart"></i></a>
        </div>
        <div class="pro" onclick="window.location.href='sproduct15.html';">
            <img src="sproduct15.jpg">
            <div class="des">
                <span>Strinja</span>
                <h5>The Dog</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>Rs. 3240</h4>
            </div>
            <a href="#" onclick="event.preventDefault(); openWhatsAppDialog('The Dog', 'Rs. 3240')"><i class="fa fa-whatsapp cart"></i></a>
        </div>
        <div class="pro" onclick="window.location.href='sproduct16.html';">
            <img src="sproduct16.jpg">
            <div class="des">
                <span>Strinja</span>
                <h5>3d-effect</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>Rs. 4567</h4>
            </div>
            <a href="#" onclick="event.preventDefault(); openWhatsAppDialog('3d-effect', 'Rs. 4567')"><i class="fa fa-whatsapp cart"></i></a>
        </div>
    </div>
    </section>
    <script>
    var MainImg = document.getElementById("MainImg");
var smallimg = document.querySelectorAll(".small-img");
smallimg[0].onclick=function(){
        MainImg.src = smallimg[0].src;
    }
    smallimg[1].onclick=function(){
        MainImg.src = smallimg[1].src;
    }
    smallimg[2].onclick=function(){
        MainImg.src = smallimg[2].src;
    }
    smallimg[3].onclick=function(){
        MainImg.src = smallimg[3].src;
    }
    </script>
    <div class="footer-distributed">

    <div class="footer-content">
      <div class="footer-left">
        <img src="logo1.jpg" alt="" style="height: 103px; width: 110px;">
        <p class="footer-links">
          <a href="mainpage.html" class="link-1">Home</a>
          <a href="aboutus.html">About</a>
          <a href="gallery.html">Gallery</a>
          <a href="contactus.html">Contact Us</a>
        </p>
        <p class="footer-company-name">Strinja © 2023</p>
      </div>
  
      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Bhabha Bhavan, SVNIT,</span>Surat, Gujarat, 395007</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>
      </div>
  
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          Strinja crafts personalized string arts, blending tradition with innovation. Empowering women, delivering
          artistry globally. Your memories, our creations, handcrafted.
        </p>
        <div class="footer-icons">
          <span class="social-media-buttons">
            <span class="social-media-button">
              <a href="https://www.instagram.com/strinja.shop/" target="_blank"><img style="border-radius: 10px;" alt=""
                  src="insta.jpg" /></a>
            </span>
            <span class="social-media-button">
              <a href="" target="_blank">
  
                <img alt="Twitter" src="x.jpg" id="x" />
              </a>
            </span>
            <span class="social-media-button">
              <a href="" target="_blank" style="margin-top: -19px; margin-left: -16px;">
  
                <img alt="Youtube" src="yt.jpg" id="yt" />
              </a>
            </span>
            <span class="social-media-button">
              <a href="" target="_blank">
                <img alt="LinkedIn" src="in.jpg" />
  
              </a>
  
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
      <script src="https://daniellaharel.com/raindrops/js/raindrops.js"></script>
    
     <script> jQuery('#waterdrop').raindrops({color:'#1c1f2f', canvasHeight:150, density: 0.1, frequency: 20});
    </script>
    <script src="sproduct.js"></script> 
</body>
</html>
    `;
  
    // Use the product name as the file name (you may need to sanitize it)
    const fileName = `${product.image.toLowerCase().replace(/\.[^/.]+$/, "").replace(/\s+/g, '-')}.html`;

    // Create a Blob from the HTML content
    const blob = new Blob([productHTML], { type: 'text/html' });

    // Create a download link and trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);

    // Set the download attribute with the desired file name
    a.download = fileName;

    // Append the link to the document body
    document.body.appendChild(a);

    // Trigger a click on the link to start the download
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);
}

  