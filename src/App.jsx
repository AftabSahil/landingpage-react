import React, { useEffect, useRef } from 'react';
import './index.css';
import 'boxicons/css/boxicons.min.css';

// For the Container Component
import temple from './assets/temple.png';
import waterfall from './assets/waterfall.png';
import beach from './assets/beach.png';
import dish from './assets/dish.png';

// For the Package Component
import img1 from './assets/img1.jpeg';
import img01 from './assets/img01.jpg';
import img02 from './assets/img02.jpg';

// For the Destination Component
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Container />
      <Package />
      <Destination />
      <Newsletter />
      <Footer />
    </div>
  );
}


export default App;

// Header Component
function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef}>
      <a href="#" className="logo">Odisha Tourism</a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#package">Package</a></li>
        <li><a href="#destination">Destination</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </header>
  );
}

// Home Component
function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Quick Escape <br />Travel</h1>
        <p>"Your Journey, Our Passion <br />Where Every Mile Smiles!"</p>
        <a href="#" className="home-btn">Lets go now...</a>
      </div>
    </section>
  );
}

// Container Component
function Container() {
  return (
    <section className="container">
      <div className="text">
        <h2>Start Your Vacation <br />With Lots of Services</h2>
      </div>
      <div className="row-items">
      <ContainerBox imgSrc={temple} title="Temples Tours" properties="110 properties" />
      <ContainerBox imgSrc={waterfall} title="Waterfall Tours" properties="70 properties" />
      <ContainerBox imgSrc={beach} title="Beaches Tours" properties="215 properties" />
      <ContainerBox imgSrc={dish} title="Food Tours" properties="110 properties" />

      </div>
    </section>
  );
}

function ContainerBox({ imgSrc, title, properties }) {
  return (
    <div className="container-box">
      <div className="container-img">
        <img src={imgSrc} alt={title} className="small-img" />
      </div>
      <h4>{title}</h4>
      <p>{properties}</p>
    </div>
  );
}

// Package Component
function Package() {
  return (
    <section className="package" id="package">
      <div className="title">
        <h2>Our Upcoming <br /> Tour Package</h2>
      </div>
      <div className="package-content">
      <PackageBox imgSrc={img1} price="₹5999" location="Kalijia Island" duration="4hr-5hr" />
      <PackageBox imgSrc={img01} price="₹8999" location="Mayurbanjh" duration="8hr-9hr" />
      <PackageBox imgSrc={img02} price="₹3999" location="Chilika Lake" duration="6hr-7hr" />

      </div>
    </section>
  );
}

function PackageBox({ imgSrc, price, location, duration }) {
  return (
    <div className="box">
      <div className="thum">
        <img src={imgSrc} alt={location} />
        <h3>{price}</h3>
      </div>
      <div className="dest-content">
        <div className="location">
          <h4>{location}</h4>
          <p>{duration}</p>
        </div>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <a href="#" key={i}><i className='bx bxs-star'></i></a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Destination Component
function Destination() {
  const destinations = [
    { imgSrc: img2, title: 'Jaganath Temple', location: 'Puri' },
    { imgSrc: img5, title: 'Puri Golden Beach', location: 'Puri' },
    { imgSrc: img3, title: 'Konark Sun Temple', location: 'Puri' },
    { imgSrc: img4, title: 'Dhauli Hill Shanti Stupa', location: 'Bhubneshwar' },
    { imgSrc: img6, title: 'Lingraj Temple', location: 'Bhubneshwar' },
    { imgSrc: img7, title: 'Sanaghagra Waterfall', location: 'Keonjhar' },
  ];
  

  return (
    <section className="destination" id="destination">
      <div className="title">
        <h2>Our Most Popular <br />Destination!!</h2>
      </div>
      <div className="destination-content">
        {destinations.map((dest, index) => (
          <div className="col-content" key={index}>
            <img src={dest.imgSrc} alt={dest.title} />
            <h5>{dest.title}</h5>
            <p>{dest.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Newsletter Component
function Newsletter() {
  return (
    <section className="newsletter">
      <div className="news-text">
        <h2>Stay Connected with Us</h2>
        <p>We'll Love To Hear From You Again</p>
      </div>
      <div className="send">
        <form>
          <input type="email" placeholder="Write Your Email" required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <section id="contact">
      <div className="footer">
        <div className="main">
          <FooterList title="Quick Links" items={['About Us', 'Terms & Conditions', 'Privacy Policy', 'Help', 'Tour']} />
          <FooterList title="Support Us" items={['Feedbacks', 'Tell Your Friends', 'Help', 'Tour']} />
          <FooterList title="Contact Info" items={['123 abc 21st Street', 'Bhubneshwar BBSR 123456', '+(91)-1234-567-890', 'Aftabsahil81@gmail.com', '+(91)-1234-567-890']} />
          <div className="list">
            <h4>Connect</h4>
            <div className="social">
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="end-text">
        <p>Copyright&copy; 2023 Sahil Aftab. All rights reserved.</p>
      </div>
    </section>
  );
}

function FooterList({ title, items }) {
  return (
    <div className="list">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
      </ul>
    </div>
  );
}
