const Dunkinhome = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        {/* //  Navbar start  */}
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
          <div class="container">
            <a class="navbar-brand mx-auto " href="#">
              Elern
            </a>
            <button
              class="navbar-toggler order-0 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav ms-auto">
              <li class="nav-item">
              <a href="#learn" class="nav-link">What You'll Learn</a>
            </li>
            <li class="nav-item">
              <a href="#questions" class="nav-link">Questions</a>
            </li>
            <li class="nav-item">
              <a href="#instructors" class="nav-link">Instructors</a>
            </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Showcase */}


      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <img class="w-100 h-25" src="dunkin1.jpg" alt="donuts" />

        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="p-5">
              <h1>
                Become a <span class="text-warning"> Web Developer </span>
              </h1>
              <p class="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Start The Enrollment
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Boxes */}

      <section class="p-5 my-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h3 class="card-title mb-3">Virtual</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3">Hybrid</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3">In Person</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn */}

      <section id="learn"     data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <div className="container">
          <div className="row text-center">
            <div className=" col-sm-12 col-md-6 ">
              <img className="img-fluid" src="fundamentals.svg" alt="A Pic" />
            </div>

            <div className="col-sm-12 col-md-6 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              sint vel numquam eligendi molestiae quisquam, sequi repellat a
              molestias dolores, cupiditate nobis, quia nihil distinctio in
              soluta? Doloremque, omnis dolorem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Id doloremque architecto ullam rerum
              iusto deserunt quibusdam beatae ducimus et, quaerat voluptatum
              quis natus ea nihil accusamus tenetur velit cum quia!
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}

      <section id="questions" class="p-5">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Where exactly are you located?
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  How much does it cost to attend?
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  What do I need to Know?
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  How Do I sign up?
                </button>
              </h2>
              <div
                id="question-four"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id="question-five"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instuctors */}

      <section class="bg-primary" id="instructors">
        
      <h1 class="text-light text-center fs-1">Our Instructors</h1>
        
        <h2 class="text-light fs-3 text-center">Top 5 Instructors</h2>

<div class="container">


           

          <div class="row p-5 b-3 g-4">


          <div class=" col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body">
              <img src="showcase.svg"  class="rounded-circle"/>
 
                <h5 class="card-title p-1 text-center">
                  <strong>John Doe</strong>
                </h5>

                <h6 class="card-subtitle p-1 text-center">SE</h6>

                <p class="card-text p-2 text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              <i class="bi bi-instagram">s</i>
             
                
                <a href="#" class="card-link p-2 b-2">
                  Another link
                </a>
              </div>
              </div>
           </div>


           <div class="col-md-6  col-lg-3">
            <div class="card bg-light">
              <div class="card-body">
              <img src="showcase.svg"  class="rounded-circle"/>
 
                <h5 class="card-title p-1 text-center">
                  <strong>John Doe</strong>
                </h5>

                <h6 class="card-subtitle p-1 text-center">SE</h6>

                <p class="card-text p-2 text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              <i class="bi bi-instagram">s</i>
             
                
                <a href="#" class="card-link p-2 b-2">
                  Another link
                </a>
              </div>
              </div>
           </div>
           
           <div class=" col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body">
              <img src="showcase.svg"  class="rounded-circle"/>
 
                <h5 class="card-title p-1 text-center">
                  <strong>John Doe</strong>
                </h5>

                <h6 class="card-subtitle p-1 text-center">SE</h6>

                <p class="card-text p-2 text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              <i class="bi bi-instagram">s</i>
             
                
                <a href="#" class="card-link p-2 b-2">
                  Another link
                </a>
              </div>
              </div>
           </div>
           

           <div class="col-md-6  col-lg-3">
            <div class="card bg-light">
              <div class="card-body">
              <img src="showcase.svg"  class="rounded-circle"/>
 
                <h5 class="card-title p-1 text-center">
                  <strong>John Doe</strong>
                </h5>

                <h6 class="card-subtitle p-1 text-center">SE</h6>

                <p class="card-text p-2 text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              <i class="bi bi-instagram">s</i>
             
                
                <a href="#" class="card-link p-2 b-2">
                  Another link
                </a>
              </div>
              </div>
           </div>
           

       
           
           
          </div>     
</div>
        

      </section>

{/* Contact */}

<section class="p-5"     data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
>
      <div class="container">
        <div class="row g-4">
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Info</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold">Main Location:</span> 50 Main st Boston MA
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Phone:</span> (555) 555-5555
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div class="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>


<section>
      <footer class="p-5 bg-dark text-white text-center position-relative">
      <div class="container">
        <p class="lead">Copyright &copy; 2021 Frontend Bootcamp</p>

        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
    </section>

    </>
  );
};

export default Dunkinhome;
