import React from 'react';
import Nav from '../Components/Nav';
import ImageSlider from '../Components/ImageSlider';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <section class="hero-section">
  <div class="hero-content">
    <h1>Welcome to FilmTopia</h1>
    <p>Discover and rank the best movies of all time!</p>
    
    <a href="/action" class="cta-button">Get Started</a>
  </div>
</section>
        <p style={{ padding: '10px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', color: '#333', fontSize: '16px', lineHeight: '1.6' }}>
  Welcome to <span style={{ fontWeight: 'bold', color: '#f4e04d' }}>FilmTopiaRanks</span>, a cinematic haven where movies are ranked according to film lovers across the globe. Navigating our user-friendly platform, you'll dive into a treasure trove of movies across different genres and time periods. <span style={{ fontStyle: 'italic' }}>FilmTopiaRanks</span> isn't just a website (well, technically it is), but it's also a thriving community where your opinions matter. Whether you're in search of the latest blockbuster, a hidden gem, or our exclusive category for love movies, witness the magic of romance on the silver screen.
</p>

        <ImageSlider/>
        <section className="movie-categories-section">
            <h2 className="section-title">Movie Categories</h2>
            <p>Explore our wide selection of movie categories to find your next favorite film. From action-packed adventures to heartwarming comedies, we have something for everyone. 
              Dive into the world of cinema and discover endless entertainment possibilities.</p>
            <div className="category-list">
                <div className="category">
                    <img src="https://www.lhsimprint.com/wp-content/uploads/2022/03/Dune-Review.jpeg" alt="Action" className="category-image" />
                    <a href='/action'>
                    <h3 className="category-title">Action</h3>
                    </a>
                    <p><strong>1. Dune<br/>
                    2. The Bee Keeper<br/>
                    3. Land of Bad<br/>
                    4. Captain Miller<br/>
                    5. Cult Killer</strong></p>
                </div>
                <div className="category">
                    <img src="https://www.comingsoon.net/wp-content/uploads/sites/3/2024/05/Evolve-1.jpg" alt="Comedy" className="category-image" />
                    <a href='/comedy'>
                    <h3 className="category-title">Comedy</h3>
                    </a>
                    <p><strong>1. Fall Guy<br/>
                    2. Back That Year Up<br/>
                    3. Keeda Cola<br/>
                    4. Friday<br/>
                    5. The Johnson</strong></p>
                </div>
                <div className="category">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/mv5bymyxmwrlyzetzmzkmy00mzq1lwi2yjktzmexmtlim2rjztazxkeyxkfqcgdeqxvyodiyoteymzyat-v1-65cb9942e462d.jpg" alt="Romance" className="category-image" />
                    <a href='/romance'>
                    <h3 className="category-title">Romance</h3>
                    </a>
                    <p><strong>1. No Hard Feelings<br/>
                    2. Love at First Sight<br/>
                    3. The Noel Diary<br/>
                    4. Love Again<br/>
                    5. Hello, Goodbye, and Everything in Between </strong></p>
                </div>
                <div className="category">
                    <img src="https://wired.me/wp-content/uploads/2023/10/346850-evil-dead-franchise.jpg" alt="Horror" className="category-image" />
                    <a href='/horror'>
                    <h3 className="category-title">Horror</h3>
                    </a>
                    <p><strong>1. Talk To Me<br/>
                    2. Scream VI<br/>
                    3.  Totally Killer<br/>
                    4. Evil Dead Rise<br/>
                    5. Saw X</strong></p>
                </div>
            </div>
        </section>
        <section className="featured-movies-section">
            <h2 className="section-title">Featured Movies</h2>
            <div className="featured-movies-container">
                {/* Featured Movie 1 */}
                <div className="featured-movie">
                    <img src="https://i.ytimg.com/vi/L0ENX5z97k0/hqdefault.jpg" alt="Movie 1" className="movie-poster" />
                    <div className="movie-details">
                        <h3 className="movie-title">The Conspiracy</h3>
                        <p className="movie-description">Stephen Dorff, Val Kilmer, Jessica Gilsig, and Stephen McHattie star in this two-part mini-series inspired by the 1984 comic book series of the same name (which was later adapted into a popular video game by Ubisoft Entertainment). 
                        A young man with no recollection of the past is discovered in a forest, the only clue to his past being a tattoo that reads "XIII." Subsequently accused of assassinating the president, the man embarks on a desperate quest to discover his true identity and expose the conspirators 
                        attempting to use him as a scapegoat for a crime he didn't commit.</p>
                    </div>
                </div>
                {/* Featured Movie 2 */}
                <div className="featured-movie">
                    <img src="https://i.imgur.com/5gzDvby.png?ympg" alt="Movie 2" className="movie-poster" />
                    <div className="movie-details">
                        <h3 className="movie-title">Movie Title 2</h3>
                        <p className="movie-description">Statham's character is named Adam Clay, an MMA upgrade of Clint Eastwood's The Man with No Name. We don't know anything about Adam except that he lives out in the country raising bees and selling their honey, 
                        and that he's played by Statham, which means he's no ordinary beekeeper. His best friend is an older woman named Eloise Parker (Phylicia Rashad), who lives in the farmhouse near his and rents him space in her barn. According to Adam, 
                        Eloise is the only person who ever took care of him. Eloise makes the terrible mistake of responding to a phishing scam from a data mining company that empties her bank account as well as the account of a nonprofit she helped found, leading to tragedy. 
                        Adam trades his beekeeper uniform for commando gear and disguises, and works his way up the criminal food chain, doing what the law won't.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Home;
