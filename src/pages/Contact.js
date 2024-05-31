const Contact=()=>{

    const paintingQuestions = [
        {
          question: "What types of paint do you use for residential painting?",
          answer: "We use high-quality, durable paints suitable for residential applications, ensuring long-lasting results and customer satisfaction."
        },
        {
          question: "Do you offer exterior painting services?",
          answer: "Yes, we specialize in exterior painting to protect and beautify your property. Our team is experienced in handling various exterior surfaces and conditions."
        },
        {
          question: "Can you assist with color selection for my commercial space?",
          answer: "Absolutely! Our expert team can provide guidance and recommendations for choosing the perfect colors that reflect your brand identity and create the desired ambiance for your commercial space."
        }
      ];
    
      // Randomly select three questions from the array
      const selectedQuestions = paintingQuestions.sort(() => 0.5 - Math.random()).slice(0, 3);
    






    return (
        <>  

<section id="faq" className="faq section m-5 p-5">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {selectedQuestions.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h3>{faq.question}</h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>
          {/* End Faq Column */}
        </div>
      </div>
    </section>


    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in touch with our Beirut office for all your painting needs in Lebanon.</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>Beirut Office<br />123 Main Street, Beirut, Lebanon</p>
            </div>
          </div>
          {/* End Info Item */}
          {/* Add other info items as needed */}
        </div>
        <div className="row gy-4 mt-1">
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="400">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" required="" />
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required="" />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>

    </>
    );
  };
    
  export default Contact