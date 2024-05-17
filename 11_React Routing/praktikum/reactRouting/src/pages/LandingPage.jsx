import React  from "react";
import '../styles/LandingPage.css';
import heroImage from "../assets/hero-img.png";
import { Link } from "react-router-dom";

export default function landingPage () {
    return (
        <>
            <nav className="navbar">
                <a href="#" className="navbar-logo">
                    Simple Header
                </a>
                <div className="navbar-nav">
                    {/* <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">FAQs</a>
                    <a href="#">About</a> */}
                    <Link to="/createProduct">Create Product</Link>
                </div>
            </nav>
            <section id="home" className="home">
                <div className="row">
                    <div className="content">
                        <h2>Better Solutions For Your Busines</h2>
                        <p>We are team of talented designer making website with Bootstrap</p>
                        <div className="cta">
                            <a href="href" className="cta-1">Get Started</a>
                            <a href="href" className="cta-2"> Watch Video</a>
                        </div>
                    </div>
                    <div className="home-img">
                        <img src={heroImage} alt="image" />
                    </div>
                </div>
            </section>
            <section className="our-newsletter">
                <div className="newsletter">
                    <h3>Join Our Newsletter</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
                        maiores sed deserunt velit error nobis, doloribus explicabo
                        eos.Eligendi, architecto?
                    </p>
                    <form action="" className="form-mail">
                        <input
                            className="input"
                            type="email"
                            name="mail"
                            id="mail"
                            placeholder="Your Email"
                        />
                        <a href="#" className="submit">
                            <button>Get Started</button>
                        </a>
                    </form>
                </div>
            </section>
            <section id="contact" className="contact">
                <div className="arsha">
                    <h3>ARSHA</h3>
                    <p>
                        A108 Adam Street
                        <br />
                        New York, NY 535022
                        <br />
                        United States
                        <br />
                        <br />
                        <br />
                        Phone: +1 5589 55488 55
                        <br />
                        Email: info@example.com
                        <br />
                    </p>
                </div>
                <div className="links">
                    <h3>Useful Link</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#terms-service">Term of Services</a>
                    <a href="#privacy-policy">Privacy Policy</a>
                </div>
                <div className="services">
                    <h3>Our Services</h3>
                    <a href="#">Web Design</a>
                    <a href="#">Web Development</a>
                    <a href="#">Product Management</a>
                    <a href="#">Marketing</a>
                    <a href="#">Graphic Design</a>
                </div>
                <div className="social">
                    <h3>Our Social Network</h3>
                    <p>Follow our social media</p>
                    <a href="">
                        <i data-feather="instagram" />
                    </a>
                    <a href="">
                        <i data-feather="facebook" />
                    </a>
                    <a href="">
                        <i data-feather="mail" />
                    </a>
                    <a href="">
                        <i data-feather="linkedin" />
                    </a>
                    <a href="">
                        <i data-feather="twitter" />
                    </a>
                </div>
            </section>
            <footer>
                <div className="content">
                    <p>Copyright Hanafi. All rights deserved</p>
                    <p>Made by humman on earth</p>
                </div>
            </footer>
        </>
    )
}