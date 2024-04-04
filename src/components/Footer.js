import { Link } from 'react-router-dom';

import './styles/Footer.css'; // Assuming you have a css file for styling your Footer.
import logo from './home.png'; // update with the location of your logo file
import Button from './Button.js';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='logo-container'>
                    <img src={logo} alt='Logo' className='footer-logo' />
                </div>

                <div className='footer-links'>
                    <div className='link-group'>
                        <h4>Product</h4>
                        <p><Link to="/features">Features</Link></p>
                        <p><Link to="/pricing">Pricing</Link></p>
                    </div>
                    
                    <div className='link-group'>
                        <h4>Resources</h4>
                        <p><Link to="/blog">Blog</Link></p>
                        <p> <Link to="/user-guides">User Guides</Link></p>
                        <p><Link to="/webinars">Webinars</Link></p>
                    </div>

                    <div className='link-group'>
                        <h4>Company</h4>
                        <p><Link to="/about">About Us</Link></p>
                        <p><Link to="/contact">Contact Us</Link></p>
                    </div>
                </div>

                <form className='subscribe-form'>
                    <label htmlFor='email'>Subscribe to our newsletter</label>
                    <input type='email' id='email' />
                    <Button color="slateblue" text="Subscribe" onClick={() => console.log('Button clicked')} />
                </form>
            </div>

            <hr className='footer-divider' />
            
            <div className='footer-bottom'>
                <p>Privacy · Terms · Sitemap</p>
                <div className='socials'>
                    {/* Replace # with your social links */}
                    <a href='https://www.facebook.com/'><i className='fab fa-facebook-f'>Facebook</i></a>
                    <a href='https://twitter.com/'><i className='fab fa-x'>X</i></a>
                    <a href='https://www.instagram.com/'><i className='fab fa-instagram'>instagram</i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;