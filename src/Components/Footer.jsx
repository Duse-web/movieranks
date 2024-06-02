
const Footer = () => {
    return(
        <div>
            <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4 style={{color:'#f4e04d'}}>About FilmTopiaRanks</h4>
                    <p>Welcome to FilmTopiaRanks, your ultimate destination for movie rankings, reviews, and recommendations. Explore our vast collection of movies across various genres and discover your next favorite film.</p>
                </div>
                <div className="footer-section">
                    <h4 style={{color:'#f4e04d'}} >Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/action">Action</a></li>
                        <li><a href="/comedy">Comedy</a></li>
                        <li><a href="/romance">Romance</a></li>
                        <li><a href="/horror">Horror</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 style={{color:'#f4e04d'}} >Contact Information</h4>
                    <p>Email: filmtopia@gmial.com</p>
                    <p>Phone: +256 757901273</p>
                    <p>Address: Sadam Rd, Kampala, Plot 443</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 FilmTopiaRanks. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/prince%20vesta"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/@princevesta1"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/its.me.trevor707"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;