import React from 'react';

const WindowsUpdate = () => {
  return (
    <div>
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
                    <a href="#" style={{ color: 'white' }}>Donate</a>
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
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <img 
        src="assets/images/blog/blog_03.jpg" 
        alt="Windows Update" 
        style={{ 
          width: '40%', 
          height: 'auto', 
          borderRadius: '10px',
          marginRight: '20px'  // Spacing between the image and text
        }} 
      />
      <div style={{ 
        flex: '1',
        textAlign: 'left' 
      }}>
        <h2 style={{ 
          fontSize: '2em', 
          margin: '0 0 20px 0', 
          color: '#333' 
        }}>Why Blood Donation is important?</h2>
        <p style={{ 
          fontSize: '1.1em', 
          lineHeight: '1.6', 
          color: '#555' 
        }}>
          Donating blood is crucial because it directly helps save lives and supports the health care system. Every day, countless patients need blood transfusions due to surgeries, accidents, cancer treatments, and various medical conditions such as anemia or blood disorders. Blood cannot be manufactured, so the supply relies entirely on voluntary donations. Regular blood donations ensure that hospitals have enough supply to meet the constant demand, especially in emergencies. Additionally, donating blood promotes the donor’s health by encouraging the production of new blood cells, reducing iron levels, and providing a free health check-up. By donating blood, you contribute to a life-saving cause and help maintain the well-being of countless individuals in need.
          </p>
      </div>
    </div>
    </div>
  );
};

export default WindowsUpdate;
