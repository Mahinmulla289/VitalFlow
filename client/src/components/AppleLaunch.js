import React from 'react';

const AppleLaunch = () => {
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
      <img src="assets/images/blog/blog_02.jpg" alt="Smarteye News" style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.heading}>Benifits of Blood donation</h2>
        <p style={styles.paragraph}><ul>
  <li>
    <strong>Saves Lives</strong>
    <p>The primary benefit is that it saves lives. Donated blood is used in surgeries, for accident victims, cancer patients, and those with blood disorders.</p>
  </li>
  <li>
    <strong>Improves Heart Health</strong>
    <p>Donating blood regularly helps reduce iron levels in the body, which can lower the risk of heart disease by preventing excess iron from accumulating.</p>
  </li>
  <li>
    <strong>Stimulates Blood Cell Production</strong>
    <p>The body produces new red blood cells after donation, which can improve circulation and overall blood health.</p>
  </li>
  <li>
    <strong>Lowers Risk of Cancer</strong>
    <p>Lower iron levels from regular donations may also reduce the risk of certain types of cancer, such as liver, lung, colon, and throat cancers.</p>
  </li>
  
  
</ul>
</p>
      </div>
    </div>
    </div>
  );
};

export default AppleLaunch;
