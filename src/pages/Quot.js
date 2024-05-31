const Quot=()=>{
    return (
        <section id="get-quote" class="get-quote section">
  <div class="container">
    <div class="section-title" data-aos="fade-up">
      <h2>Get a Quote</h2>
      <p>Fill out the form below to get a free quote for your painting project</p>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto" data-aos="fade-up" data-aos-delay="100">
        <form class="quote-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" class="form-control" placeholder="Your Name" required />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" placeholder="Your Email" required />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6 form-group">
              <input type="tel" class="form-control" placeholder="Your Phone" required />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <textarea class="form-control" rows="5" placeholder="Message" required></textarea>
            </div>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary">Get Quote</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}

export default Quot