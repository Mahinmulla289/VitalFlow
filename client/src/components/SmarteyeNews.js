import React from 'react';

const SmarteyeNews = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '40%',
      borderRadius: '8px',
      marginRight: '20px',
    },
    content: {
      flex: '1',
    },
    heading: {
      color: '#333',
      fontSize: '24px',
      margin: '10px 0',
    },
    paragraph: {
      color: '#555',
      lineHeight: '1.6',
    },
  };

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
    <div style={styles.container}>
      <img src="assets/images/blog/blog_01.jpg" alt="Smarteye News" style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.heading}>Information about Blood Donation</h2>
        <p style={styles.paragraph}>
        <ul>
  <li>
    <strong>Eligibility</strong>: To donate blood, donors must typically be in good health, be at least 17 or 18 years old (depending on the country), and meet certain weight and health criteria. Pregnant women and people with certain conditions may not be eligible to donate.
  </li>
  <li>
    <strong>Types of Blood Donations</strong>:
    <ul>
      <li><strong>Whole Blood Donation</strong>: The most common type, where approximately 1 pint (about 470 ml) of blood is donated.</li>
      <li><strong>Platelet Donation</strong>: Involves donating just the platelets, which are crucial for clotting, used for cancer patients or those with clotting disorders.</li>
      <li><strong>Plasma Donation</strong>: Plasma is the liquid part of blood, and this donation helps burn victims, trauma patients, and those with liver diseases.</li>
      <li><strong>Double Red Cell Donation</strong>: A donation of red blood cells, usually for trauma patients or those undergoing major surgeries.</li>
    </ul>
  </li>
  
</ul>

        </p>
      </div>
    </div>


    </div>
  );
};

export default SmarteyeNews;
