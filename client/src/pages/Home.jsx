import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
{/* HEADER SECTION */}
<header className="container-fluid">
        <div className="header-top">
          <div className="container">
            <div className="row col-det">
              <div className="col-lg-6 d-none d-lg-block">
                <ul className="ulleft">
                  <li>
                    <i className="far fa-envelope"></i>
                    vitalflow123@gmail.com
                    <span> | </span>
                  </li>
                  <li>
                    <i className="far fa-clock"></i>
                    Service Time: {new Date().toLocaleString()}
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12">
                <ul className="ulright">
                  <li>
                    <i className="fas fa-hand-holding"></i>
                    <a href="/donate" style={{ color: 'white' }}>Donate</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="menu-jk" className="header-bottom">
          <div className="container">
            <div className="row nav-row">
              <div className="col-md-3 logo">
                <img src="assets/images/logo-png.png" alt="Logo" />
              </div>
              <div className="col-md-9 nav-col">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#about">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#gallery">Gallery</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#process">Process</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#blog">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* SLIDER SECTION */}
      <div className="slider-detail">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="assets/images/slider/slide-02.jpg" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bounceInDown">Donate Blood & Save a Life</h5>
                <p className="bounceInLeft">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br />
                  aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                  sed sagittis at, sagittis quis neque. Praesent.
                </p>
                <div className="vbh">
                  <div className="btn btn-danger bounceInUp">
                    <a href="bookappointment" style={{ color: 'white' }}>Book Appointment</a>
                  </div>
                  <div className="btn btn-danger bounceInUp">
                    <a href="#contact" style={{ color: 'white' }}>Contact Us</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src="assets/images/slider/slide-03.jpg" alt="Second slide" />
              <div className="carousel-caption vdg-cur d-none d-md-block">
                <h5 className="bounceInDown">Donate Blood & Save a Life</h5>
                <p className="bounceInLeft">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br />
                  aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
                  sed sagittis at, sagittis quis neque. Praesent.
                </p>
                <div className="vbh">
                  <div className="btn btn-danger bounceInUp">
                    <a href="donate" style={{ color: 'white' }}>Donate Now</a>
                  </div>
                  <div className="btn btn-danger bounceInUp">
                    <a href="#contact" style={{ color: 'white' }}>Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section id="about" className="container-fluid about-us">
      <div className="container">
        <div className="row session-title">
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 text">
            <h2>About Blood Donors</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, humour, or randomised words which don't look even slightly believable. If you are going to
              use a passage. The industry's standard dummy has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="col-md-6 image">
            <img src="assets/images/about.jpg" alt="About Blood Donors" />
          </div>
        </div>
      </div>
    </section>

    {/* GALLERY SECTION */}
    <div id="gallery" className="gallery container-fluid">
      <div className="container">
        <div className="row session-title">
          <h2>Checkout Our Gallery</h2>
        </div>
        <div className="gallery-row row">
          <div id="gg-screen"></div>
          <div className="gg-box">
            <div className="gg-element">
              <img src="assets/images/gallery/g1.jpg" alt="Gallery 1" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g2.jpg" alt="Gallery 2" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g3.jpg" alt="Gallery 3" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g4.jpg" alt="Gallery 4" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g1.jpg" alt="Gallery 5" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g2.jpg" alt="Gallery 6" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g3.jpg" alt="Gallery 7" />
            </div>
            <div className="gg-element">
              <img src="assets/images/gallery/g4.jpg" alt="Gallery 8" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* DONATION SECTION */}

    <section id="process" className="donation-care">
      <div className="container">
        <div className="row session-title">
          <h2>Donation Process</h2>
          <p>The donation process from the time you arrive at the center until the time you leave</p>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 vd">
            <div className="bkjiu">
              <img src="assets/images/gallery/g1.jpg" alt="Registration" />
              <h4><b>1 - </b>Registration</h4>
              <p>Register now to see where you can donate and help save lives. Your contribution makes a difference in the lives of those in need! Join us to the blood donation journey where you can donate blood and save lifes.</p>
              
            </div>
          </div>

          <div className="col-md-3 col-sm-6 vd">
            <div className="bkjiu">
              <img src="assets/images/gallery/g2.jpg" alt="Seeing" />
              <h4><b>2 - </b>Seeing</h4>
              <p>Join us for a comprehensive examination to ensure your eligibility for blood donation. During this visit, you'll learn about the donation process and how your efforts can help save lives in your community.</p>
              
            </div>
          </div>

          <div className="col-md-3 col-sm-6 vd">
            <div className="bkjiu">
              <img src="assets/images/gallery/g3.jpg" alt="Donation" />
              <h4><b>3 - </b>Donation</h4>
              <p> Your blood can give someone a second chance at life. Join a community of heroes committed to making a difference. Together, we can transform lives, one donation at a time!</p>
             
            </div>
          </div>

          <div className="col-md-3 col-sm-6 vd">
            <div className="bkjiu">
              <img src="assets/images/gallery/g4.jpg" alt="Save Life" />
              <h4><b>4 - </b>Save Life</h4>
              <p> Every donation plays a vital role in supporting surgeries, treating cancer patients, and aiding accident victims. Your blood can give someone a second chance at life. Join a community of heroes.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    {/* BLOG SECTION */}

    
    <div id="blog" className="blog-container container-fluid">
      <div className="container">
        <div className="session-title row">
          <h2>Latest Blog</h2>
          </div>

        {/* Bootstrap Carousel */}
        <div className="card-container">
      {/* Smarteye News Card */}
      <div className="card" style={{ margin: "2em" }}>
        <img src="assets/images/blog/blog_01.jpg" alt="Smarteye News" />
        <h3>Information about Blood Donation</h3>
        <Link to="/smarteye-news">
          <button>Read More</button>
        </Link>
      </div>

      {/* Apple Launch Card */}
      <div className="card" style={{ margin: "2em" }}>
        <img src="assets/images/blog/blog_02.jpg" alt="Apple Launch" />
        <h3>Benifits of Blood donation</h3>
        <Link to="/apple-launch">
          <button>Read More</button>
        </Link>
      </div>

      {/* Windows Update Card */}
      <div className="card" style={{ margin: "2em" }}>
        <img src="assets/images/blog/blog_03.jpg" alt="Windows Update" />
        <h3>Why Blood Donation is important?</h3>
        <Link to="/windows-update">
          <button>Read More</button>
        </Link>
      </div>
    </div>
       
      </div>
    </div>


    </div>
  );
}

export default Home;
