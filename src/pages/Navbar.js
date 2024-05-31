const Navbar=()=>{
    return(
      
      <header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center">
  
        <a href="/" class="logo d-flex align-items-center me-auto">
          <img src="assets/img/logo.png" alt="" />
          <h1 class="sitename">Crebeit</h1>
        </a>
  
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="/" class="">Home</a></li>
            <li><a href="Quotation">Request A Quotation</a></li>
            <li><a href="About">About</a></li>

            <li><a href="Contact-Us">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
  
  
      </div>
    </header>
)}

export default Navbar