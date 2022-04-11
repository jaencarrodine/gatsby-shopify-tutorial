import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'
import './Footer.css'
import ig from '../../images/instagram-icon.png'
import twitter from '../../images/twitter-icon.png'
import tiktok from '../../images/tik-tok-icon.png'
import facebook from '../../images/facebook-icon.png'
import logo from '../../images/logo.png'
import MediaQuery from 'react-responsive'
import mangoG from '../../images/bg/mango-gradient.jpeg'
const twitterLink = (
  <a href="https://twitter.com/thebenderdrink" alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/TheBenderDrink" alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:support@bender.buzz" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <div style ={{display:'flex', flexDirection:'column', backgroundImage:'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'}} >
  <div className = 'footer-container' >
    <div className = 'footer-column'>
      <div className = 'footer-header'>Company</div>
      <Link to = '/terms-and-conditions' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'>Terms &amp; conditions</Link>
      <Link to = '/privacy-policy' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'>Privacy Policy</Link>
      <Link to = '/fda-disclaimer' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'>FDA Disclaimer</Link>
    </div>
    <div className = 'footer-column'>
      <div className = 'footer-header'>Support</div>
      <Link to = '/shipping-policy' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'>Shipping</Link>
      <Link to = '/' style = {{textDecoration:'none', color:'black'}} className = 'fsooter-link'>Returns &amp; Refunds</Link>
      <Link to = '/contact' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'>Contact Us</Link>
    </div>
    <div className = 'footer-column'>
      <div className = 'footer-header'>Social</div>
      <Link to = 'https://www.instagram.com/thebenderdrink/' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'><img src = {ig} className = 'footer-social-icon' />Instagram</Link>
      <Link to = 'https://www.facebook.com/TheBenderDrink' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'><img src = {facebook} className = 'footer-social-icon' />Facebook</Link>
      <Link to = 'https://www.tiktok.com/@thebenderdrink' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'><img src = {tiktok} className = 'footer-social-icon' />TikTok</Link>
      <Link to = 'https://twitter.com/TheBenderDrink' style = {{textDecoration:'none', color:'black'}} className = 'footer-link'><img src = {twitter} className = 'footer-social-icon' />Twitter</Link>
    </div>
    <MediaQuery minWidth = {601}>
      <div className = 'footer-logo'>
        <img src = {logo} className = 'footer-logo-image' />
      </div>
    </MediaQuery>
  </div>
  <MediaQuery maxWidth = {600}>
    <div className = 'footer-logo' style = {{width:'100%', display:'flex', alignItems:'center', padding:'5px'}}>
        <img src = {logo} className = 'footer-logo-image' />
      </div>
  </MediaQuery> 
  </div>
)

export default Footer
