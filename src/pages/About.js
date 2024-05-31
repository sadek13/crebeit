const About=()=>{
    return (
<section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 align-items-center">


          <div className="col-lg-6" data-aos="fade-right">
        <h1 className="section-title p-5 m-5">About Crebeit</h1>

            <p className="lead">
              At Crebeit, we redefine spaces with our innovative and meticulous painting services. Whether it's residential, commercial, or industrial, our skilled team transforms your vision into reality.
            </p>
            <ul className="list-unstyled mt-5">
              <li><i className="bi bi-brush"></i> Customized painting solutions tailored to your needs.</li>
              <li><i className="bi bi-droplet-half"></i> Eco-friendly and sustainable paint options.</li>
              <li><i className="bi bi-award"></i> Award-winning craftsmanship and attention to detail.</li>
            </ul>
     
          </div>

          <div className="col-lg-6 d-flex flex-column gap-4" data-aos="fade-left">
            <div className="d-flex flex-row gap-4">
              <img src="res-paint.jpg" className="img-fluid" alt="Residential painting project" />
            </div>
            <img src="wearecrebeit.jpg" className="img-fluid" alt="Our team in action" />
          </div>
          
        </div>
      </div>
    </section>



    )
}

export default About