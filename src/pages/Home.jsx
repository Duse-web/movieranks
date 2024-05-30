import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <h1>FILM TOPIA RANKS</h1>
        <div className='cover-one'>
            <img src="https://t4.ftcdn.net/jpg/06/01/65/49/360_F_601654907_FgISykN0GQp39MfRAlgg3IBmLDVIZYYk.jpg" alt="Aquaman movie scene" />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
