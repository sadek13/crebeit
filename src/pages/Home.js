import Testimonials from './Testimonials'

const Home=()=>{
    return(
      <>
      <section id="hero" class="hero section">
        <div class="hero-bg">
          <img src="worker2.jpg" alt="" class="img"/>
        </div>
        <div class="container text-center">
        <div class="d-flex flex-column justify-content-center align-items-center">
  <h1 data-aos="fade-up" class="">Welcome to <span>Crebeit</span></h1>
  <p data-aos="fade-up" data-aos-delay="100" class="">Transform Your Space with a Stroke of Excellence</p>
  <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
    <a href="/Quotation" class="btn-get-started">Get Quotation</a>
  </div>
  <img src="assets/img/hero-services-img.webp" class="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
</div>

  </div>
      </section>

      <section id="featured-services" class="featured-services section">
  <div class="container">
    <div class="row gy-4">
      <div class="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div class="service-item d-flex">
          <div>
            <h4 class="title"><a href="#" class="stretched-link">Residential Painting</a></h4>
            <p class="description"><i class="bi bi-house"></i> Enhance the beauty of your home with our expert residential painting services, ensuring a flawless finish every time.</p>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div class="service-item d-flex">
          <div>
            <h4 class="title"><a href="#" class="stretched-link">Commercial Painting</a></h4>
            <p class="description"><i class="bi bi-building"></i> Transform your business space with professional commercial painting that creates a lasting impression on clients and customers.</p>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div class="service-item d-flex">
          <div>
            <h4 class="title"><a href="#" class="stretched-link">Exterior Painting</a></h4>
            <p class="description"><i class="bi bi-tree"></i> Protect and beautify the exterior of your property with our durable and weather-resistant exterior painting solutions.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="about" class="about section">

  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
        <p class="who-we-are">Who We Are</p>
        <h3>Transforming Spaces with Precision and Creativity</h3>
        <p class="fst-italic">
          At Crebeit, we believe in turning every project into a masterpiece. Our team of skilled painters and designers are dedicated to delivering exceptional results that exceed your expectations.
        </p>
        <ul>
          <li><i class="bi bi-check-circle"></i> <span>Expert craftsmanship with attention to every detail.</span></li>
          <li><i class="bi bi-check-circle"></i> <span>High-quality materials for a durable and flawless finish.</span></li>
          <li><i class="bi bi-check-circle"></i> <span>Personalized service tailored to your specific needs and style.</span></li>
        </ul>
        <a href="/About" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>

      <div class="col-lg-6 about-images d-none d-sm-block" data-aos="fade-up" data-aos-delay="200">
        <div class="row gy-4">
          <div class="col-lg-6">
            <img src="res-paint.jpg" class="img-fluid d-none d-sm-block" alt="Our team at work on a residential project" />
            <p class="image-caption">Our team at work on a residential project</p>
          </div>
          <div class="col-lg-6">
            <div class="row gy-4">
              <div class="col-lg-12">
                <img src="com-paint.jpg" class="img-fluid d-none d-sm-block" alt="High-quality finishes for commercial spaces" />
                <p class="image-caption">High-quality finishes for commercial spaces</p>
              </div>
              <div class="col-lg-12">
                <img src="precision.jpg" class="img-fluid d-none d-sm-block" alt="Precision and detail in every stroke" />
                <p class="image-caption">Precision and detail in every stroke</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>



  {/* Features Section */}
  <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2 className="">Features</h2>
          <p>Explore the features of our painting services</p>
        </div>{/* End Section Title */}

        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-5 d-flex align-items-center">

              <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                    <i className="bi bi-brush"></i>
                    <div>
                      <h4 className="d-none d-lg-block">Interior Painting</h4>
                      <p>
                        Transform the interior of your home with our professional painting service. We use high-quality paints to bring your vision to life.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                    <i className="bi bi-building"></i>
                    <div>
                      <h4 className="d-none d-lg-block">Commercial Painting</h4>
                      <p>
                        Enhance your commercial space with our commercial painting solutions. Our skilled team ensures minimal disruption to your business operations.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                    <i className="bi bi-tree"></i>
                    <div>
                      <h4 className="d-none d-lg-block">Exterior Painting</h4>
                      <p>
                        Protect and beautify the exterior of your property with our durable and weather-resistant exterior painting solutions.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>{/* End Tab Nav */}

            </div>

            <div className=" d-none d-sm-block col-lg-6">

              <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

                <div className="tab-pane fade active show" id="features-tab-1">
                  <img src="interior.jpg" alt="Interior Painting" className="img-fluid" />
                </div>{/* End Tab Content Item */}

                <div className="tab-pane fade" id="features-tab-2">
                  <img src="com-paint2.jpg" alt="Commercial Painting" className="img-fluid" />
                </div>{/* End Tab Content Item */}

                <div className="tab-pane fade" id="features-tab-3">
                  <img src="exterior.jpg" alt="Exterior Painting" className="img-fluid" />
                </div>{/* End Tab Content Item */}
              </div>

            </div>

          </div>

        </div>

      </section>{/* /Features Section */}



      <section id="more-features" className="more-features section">

      <div className="container">

        <div className="row justify-content-around gy-4">

          <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <h3>Enhance Your Painting Experience</h3>
            <p>Experience the difference with our painting services. We prioritize quality, professionalism, and customer satisfaction.</p>

            <div className="row">

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4>Custom Solutions</h4>
                  <p>Our painting solutions are tailored to meet your unique needs, ensuring exceptional results every time.</p>
                </div>
              </div>{/* End Icon Box */}

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4>Professional Team</h4>
                  <p>Our team consists of skilled professionals who are dedicated to delivering superior painting services with attention to detail.</p>
                </div>
              </div>{/* End Icon Box */}

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>Quality Materials</h4>
                  <p>We use high-quality paints and materials to ensure long-lasting results that enhance the beauty of your property.</p>
                </div>
              </div>{/* End Icon Box */}

              <div className="col-lg-6 icon-box d-flex">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>Customer Satisfaction</h4>
                  <p>Your satisfaction is our priority. We strive to exceed your expectations and provide a seamless painting experience from start to finish.</p>
                </div>
              </div>{/* End Icon Box */}

            </div>

          </div>

          <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src="happy.jpg" alt="More Features" />
          </div>

        </div>

      </div>

    </section>{/* /More Features Section */}


{/* <Testimonials /> */}



    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Crebeit</span>
            </a>
            <div className="footer-contact pt-3">
             <p>Beirut</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Crebeit</strong><span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}

        </div>
      </div>
    </footer>
  




</>
    )}

    export default Home