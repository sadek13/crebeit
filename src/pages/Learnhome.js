const Learnhome= ()=>{
  return (
    <>
    {/* Navbar */}
    <div>
{/* //  Navbar start  */}
<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
<div class="container">
  
  <a class="navbar-brand mx-auto " href="#">Lern</a>
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
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
  </ul>
</div>
</div>
</nav>
</div>

{/* Showcase */}
<section
class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
>
<div class="container">
<div class="d-sm-flex align-items-center justify-content-between">
<div className=""> 
  <h1>Become a <span class="text-warning"> Web Developer </span></h1>
  <p class="lead my-4">
    We focus on teaching our students the fundamentals of the latest
    and greatest technologies to prepare them for their first dev role
  </p>
  <button
    class="btn btn-primary btn-lg"
    data-bs-toggle="modal"
    data-bs-target="#enroll"
  >
    Start The Enrollment
  </button>
</div>
<img
  class="img-fluid w-50  d-sm-block"
  src="showcase.svg"
  alt=""
/>
</div>
</div>
</section>

{/* Boxes */}

<section class="p-5">
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
            <a href="#" class="btn btn-primary">Read More</a>
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
            <a href="#" class="btn btn-dark">Read More</a>
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
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Learn */}

<section>
  <div className="container">
    <div className="row text-center">

      <div className=" col-sm-12 col-md-6 ">
        <img className="img-fluid" src="fundamentals.svg" alt="A Pic" />
      </div>

      <div className="col-sm-12 col-md-6 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sint vel numquam eligendi molestiae quisquam, sequi repellat a molestias dolores, cupiditate nobis, quia nihil distinctio in soluta? Doloremque, omnis dolorem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloremque architecto ullam rerum iusto deserunt quibusdam beatae ducimus et, quaerat voluptatum quis natus ea nihil accusamus tenetur velit cum quia!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            beatae fuga animi distinctio perspiciatis adipisci velit maiores
            totam tempora accusamus modi explicabo accusantium consequatur,
            praesentium rem quisquam molestias at quos vero. Officiis ad
            velit doloremque at. Dignissimos praesentium necessitatibus
            natus corrupti cum consequatur aliquam! Minima molestias iure
            quam distinctio velit.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            beatae fuga animi distinctio perspiciatis adipisci velit maiores
            totam tempora accusamus modi explicabo accusantium consequatur,
            praesentium rem quisquam molestias at quos vero. Officiis ad
            velit doloremque at. Dignissimos praesentium necessitatibus
            natus corrupti cum consequatur aliquam! Minima molestias iure
            quam distinctio velit.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            beatae fuga animi distinctio perspiciatis adipisci velit maiores
            totam tempora accusamus modi explicabo accusantium consequatur,
            praesentium rem quisquam molestias at quos vero. Officiis ad
            velit doloremque at. Dignissimos praesentium necessitatibus
            natus corrupti cum consequatur aliquam! Minima molestias iure
            quam distinctio velit.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            beatae fuga animi distinctio perspiciatis adipisci velit maiores
            totam tempora accusamus modi explicabo accusantium consequatur,
            praesentium rem quisquam molestias at quos vero. Officiis ad
            velit doloremque at. Dignissimos praesentium necessitatibus
            natus corrupti cum consequatur aliquam! Minima molestias iure
            quam distinctio velit.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            beatae fuga animi distinctio perspiciatis adipisci velit maiores
            totam tempora accusamus modi explicabo accusantium consequatur,
            praesentium rem quisquam molestias at quos vero. Officiis ad
            velit doloremque at. Dignissimos praesentium necessitatibus
            natus corrupti cum consequatur aliquam! Minima molestias iure
            quam distinctio velit.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="instructors" class="p-5 bg-primary">
  <div class="container">
    <h2 class="text-center text-white">Our Instructors</h2>
    <p class="lead text-center text-white mb-5">
      Our instructors all have 5+ years working as a web developer in the
      industry
    </p>
    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              class="rounded-circle mb-3"
              alt=""
            />
            <h3 class="card-title mb-3">John Doe</h3>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
            </p>
            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/women/11.jpg"
              class="rounded-circle mb-3"
              alt=""
            />
            <h3 class="card-title mb-3">Jane Doe</h3>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
            </p>
            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              class="rounded-circle mb-3"
              alt=""
            />
            <h3 class="card-title mb-3">Steve Smith</h3>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
            </p>
            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              class="rounded-circle mb-3"
              alt=""
            />
            <h3 class="card-title mb-3">Sara Smith</h3>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
            </p>
            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<footer>
<div className="container copyright text-center mt-4">
        <p>© <span>Lern</span> <strong className="px-1 sitename">Crebeit</strong><span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}

        </div>
      </div>
    </footer>
  
</>
  )
}

export default Learnhome