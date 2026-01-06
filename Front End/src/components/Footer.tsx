import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌾 CropRecommend</h3>
            <p>AI-powered crop recommendation system for smart agriculture</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/predict">Predict</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p className="contact-name">Isuru Marasinghe</p>
            <div className="contact-links">
              <a href="mailto:isurmarasinghe781@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                isurmarasinghe781@gmail.com
              </a>
              {/* <a href="tel:+94765732444" className="contact-link">
                <span className="contact-icon">📱</span>
                +94 76 573 2444
              </a> */}
              <a href="https://isuru781.netlify.app" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">🌐</span>
                isuru781.netlify.app
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 CropRecommend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
