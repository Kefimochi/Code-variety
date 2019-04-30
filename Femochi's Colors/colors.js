const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('a');
navBar.addEventListener('mouseleave', toggleNavigation);

navLinks.forEach(link => {
  link.addEventListener("click", toggleNavigation);
  console.log(link);
});

$(".toggle-bars").click(function(){
    $(".nav").toggleClass("show");
});

function toggleNavigation(e) {
  $(".nav").toggleClass("show");
  if($(".nav").hasClass("show")) {
    $(".nav").removeClass("show");
  }
}

<header id="header">
  <i id="header-img" src="#"></i> <!--   For FCC -->
  
  <div class="nav-bar">
    <a class="title" href="#first-section">Femochi's Colors</a>
    <div class="toggle-bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="nav">
      <ul>
        <li class="nav-link"><a href="#first-section">Home</a></li>
        <li class="nav-link"><a href="#second-section">About</a></li>
        <li class="nav-link"><a href="#third-section">Subscription</a></li>
        <li class="nav-link"><a href="#fourth-section">Order</a></li>
        <li class="nav-link"><a href="#fifth-section">Contact</a></li>
      </ul>
    </div>
  </div>
</header>
  
  <div class="media-links">
    <ul class="media-links-content">
      <li>
        <i class="fab fa-facebook-f"></i>
        <span>Facebook</span>
      </li>
      <li class="twitter">
        <i class="fab fa-twitter"></i>
        <span>Twitter</span>
      </li>
        <li class="google">
        <i class="fab fa-google-plus-g"></i>
        <span>Google +</span>
      </li>
    </ul>
  </div>
  
  <section id="first-section">
    <div class="transparent"></div>
    <div class="transparent-2"></div>
    <div class="transparent-3"></div>
    <div class="main-tr">
    </div>
    <h1 class="sec1-title">Femochi's Colors</h1>
    <h1 class="sec1-title-shadow">Femochi's Colors</h1>
    <div class="cursor-text-container">
      <p>Watercoloring is <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
    </div>
  </section>
  
  <section id="second-section">
    <div class="icon-space">    
      <div class="icons">
        <div class="icon">
          <i class="fas fa-palette"></i>  
        </div>
        <h1 class="icon-title">Professional Quality</h1>
        <h1 class="icon-text">All colors are created using professional single pigments. We also use gum arabic and honey as a watercolor binder in production.</h1>
      </div>
      
      <div class="icons">
        <div class="icon">
          <i class="fas fa-paint-brush"></i>  
        </div>
          <h1 class="icon-title">Fast Shipping</h1>
          <h1 class="icon-text">A guranteed delievery of your product in 3 days after you place an order. yes, it applies worldwide.</h1>
      </div>
      
      <div class="icons">
        <div class="icon">
           <i class="fas fa-truck"></i>
        </div>
           <h1 class="icon-title">Wide selection</h1>
           <h1 class="icon-text">More than 364 colors are available for purchase already with new colors released every month.</h1>
      </div>
    </div>
    <div class="about-container">
      <div class="about-text-container">
        <h1 class="about-title">ABOUT</h1>
        <h1>Since around 1970s our team at Femochi's Colors were delievering bright proffesional quality watercolors right next to your door. Starting 2019 there is now an option of subscribing monthly, where automatically(w/o worries)clients will be charged a certain amount of money every month for a monthly shipping. <br/> It is cheaper compared to buying watercolors pans that are in stock, so if you are a constant watercolor user and professional/hobbiest make sure to consider this cheaper option! Please don't take this text seriously, its just here to make this section look pretty.</h1>
      </div>
    <img class="about-image" src="https://github.com/Kefimochi/Random-stuff/blob/master/Femochi's%20Colors/Done.png?raw=true" alt="Watercolor set" height="420" width="540">
      </div>
  </section>
  
  <section id="third-section">
  </section>
  
  <section id="fourth-section">
  </section>
  
  <section id="fifth-section">
  </section>
  
 <footer>
  </footer>
