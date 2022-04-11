import React from 'react'
import {useEffect, useState} from 'react'
import { motion, Variants } from "framer-motion";

//components
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Benefits from '../components/Benefits/Benefits'
import Formulas from '../components/Formulas/Formulas'
import Ingredients from '../components/Ingredients/Ingredients'
import ComparisonGrid from '../components/ComparisonGrid/ComparisonGrid'
import PriceRow from '../components/PriceRow/PriceRow'
import Flavors from '../components/Flavors/Flavors'
import Guarantee from '../components/Guarantee/Guarantee'
import Testimonials from '../components/Testimonials/Testimonials'
import {Link} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lottie from 'react-lottie'
import MediaQuery from 'react-responsive'
//images
import headerImg from '../images/3-4websitev8.png'
import animationData from '../images/11264-swipe-up-arrows.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



//gradients
// pink - 'linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)' 
// blue - 'linear-gradient(45deg, #fff1eb 0%, #ace0f9 100%)'
// green - 'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'

const StoreIndex = ({location}) => {
  const [priceState, setPriceState] = useState()

  useEffect(() => {
    genPrice()
  }, [])

  function genPrice() {
    let storedPrice = localStorage.getItem('price')
    //console.log(storedPrice)
    if (storedPrice === null) {
      let price = randomPrice()
      localStorage.setItem('price', price)
      setPriceState(price)
    } else {
      setPriceState(storedPrice)
    }
  }

  function randomPrice() {
    let int = Math.floor(Math.random() * 3)
    let prices = [19.99, 24.99, 29.99]
    return prices[int]
  }

  const backgroundVariants = {
    offscreen:{
      
      
    },
    onscreen:{
      
      backgroundImage: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
      transition: {
        duration: .4,
        ease: 'easeInOut',
      }
    }

  }

  const backgroundVariantsV2 = {
    offscreen:{
      
    },
    onscreen:{
      
      backgroundImage: 'linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)',
      transition: {
        duration: .4,
        ease: 'easeInOut',
      }
    }
  }

  const fadeInVariant={
    offscreen: {
      opacity: 0,
      
    },

    onscreen:{
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }
  const backgroundVariantsV3 = {
    offscreen:{
        opacity:0
    },
    onscreen:{
      opacity:1,
      backgroundImage: 'linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)',
      transition: {
        duration: .4,
        ease: 'easeInOut',
      }
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <>
      
      <SEO title={'Bender'} />
      <motion.div 
        
        className = 'home-page-container'
      >

        <motion.div 
          className = 'section-scroll' 
          animate = {{
            backgroundImage:['linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)','linear-gradient(45deg, #fff1eb 0%, #ace0f9 100%)','linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            yoyo: Infinity,
        
          }}
        >
          <div className= 'home-page-header-wrap'>
      
          <Header location = {location} />
       

            <div className="home-page-header">
             
              <div className="header-text">
                <h1 className="title">
                  Creating a hangover-free world, one Bender at a time.
                </h1>
                <div className="subtitle">
                  Meet the clean ingredient electrolyte formula that's the hangover
                  "cheat code" you've been looking for.
                </div>

                <Link style={{textDecoration: 'none'}} to="/products">
                  <div className="buy-button">SHOP NOW</div>
                </Link>
              </div>
              <div className="header-image-div">
                <img
                  className="header-img"
                  src={headerImg}
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            
              <div className = 'lottie-header-div'>
                  <Lottie options={defaultOptions} height={100} width={100} />
              </div>
           
            
          </div>
        </motion.div>
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} variants = {backgroundVariants} className="section-scroll" 
        >
          <Benefits />
        </motion.div>

        <motion.div  initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants = {backgroundVariantsV3} 
          className="section-scroll"
        >
          <Formulas />
        </motion.div>

        <div className="section-scroll">
          <Ingredients />
        </div>
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} variants = {backgroundVariantsV2} className="section-scroll" 
        >
          <PriceRow price={priceState} />
        </motion.div>

        <motion.div className="section-scroll"
        initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} variants = {backgroundVariantsV3} >
          <ComparisonGrid />
        </motion.div>


        <div className="section-scroll" style= {{height:'auto', scrollSnapAlign:'center'}} >
        <Flavors />
        </div>
        <motion.div initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} variants = {backgroundVariantsV2} className="section-scroll" 
        >
          <Guarantee />
        </motion.div>
        {/*}
        <motion.div className="section-scroll"
        initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} variants = {backgroundVariantsV3} >

        <Testimonials version={'landing-page'} />
        
        </motion.div>
        */}
        <div className="section-scroll" style = {{height:'auto', backgroundImage:'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'}}>
          <Footer />
        </div>
      </motion.div>
      
    </>
  )
}

export default StoreIndex