/* eslint-disable camelcase */
import React from 'react'
import WhatsInTheBox from '../WhatsInTheBox/WhatsInTheBox'
import TheScience from '../TheScience/TheScience'
import ComparisonGrid from '../ComparisonGrid/ComparisonGrid'
import HealthIcons from '../HealthIcons/HealthIcons'

import Guarantee from '../Guarantee/Guarantee'
import Testimonials from '../Testimonials/Testimonials'
import './ProductAttributes.css'


//pineapple

import p5 from '../../images/PImgs/pineapplesticker1.png'
import p6 from '../../images/PImgs/pineapplesticker2.png'
import p7 from '../../images/PImgs/pineapplesticker3.png'

//orange

import o5 from '../../images/OImgs/orangesticker1.png'
import o6 from '../../images/OImgs/orangesticker2.png'
import o7 from '../../images/OImgs/orangesticker3.png'

//blue raspberry

import b5 from '../../images/BImgs/blue rasberrysticker1.png'
import b6 from '../../images/BImgs/blue rasberrysticker2.png'
import b7 from '../../images/BImgs/blue rasberrysticker3.png'

//mango

import m5 from '../../images/MImgs/mangosticker1.png'
import m6 from '../../images/MImgs/mangosticker2.png'
import m7 from '../../images/MImgs/mangosticker3.png'

import s5 from '../../images/SImgs/strawberrysticker1.png'
import s6 from '../../images/SImgs/strawberrysticker2.png'
import s7 from '../../images/SImgs/strawberrysticker3.png'

//Watermelon

import w5 from '../../images/WImgs/watermelonsticker1.png'
import w6 from '../../images/WImgs/watermelonsticker2.png'
import w7 from '../../images/WImgs/watermelonsticker3.png'

/*const images = {
  '0': [p5, p6, p7],
  '1': [o5, o6, o7],
  '2': [s5, s6, s7],
  '3': [b5, b6, b7],
  '4': [w5, w6, w7],
  '5': [m5, m6, m7],
}*/

const images = {
  'f072d25a-39e6-52b0-99d2-96664069b555':[p5, p6, p7],
  '1404fd14-5139-5132-8e12-2778fbd54378':[b5, b6, b7],
  '329a6077-c9cb-505d-b941-39d63cbee7f8':[m5, m6, m7]
}
export default ({id}) => (
  
  <>
    {console.log(id)}
    <WhatsInTheBox packetImages={images[id]} />
    <TheScience />
    <div style = {{backgroundImage:'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'}}>
    <ComparisonGrid />
    </div>
    {/*<Testimonials version={'product-page'} />*/}
    <div style ={{backgroundImage:'linear-gradient(45deg, #fff1eb 0%, #ace0f9 100%)'}}>
    <Guarantee />
    </div>
    <div style ={{backgroundImage:'linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)', height:'100%'}}>
    <HealthIcons />
    </div>
  </>
)

/*
<div className = 'ingredients-title'>
    <h2>Active Ingredients</h2>
  </div>
  
  <div className="product-info">
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Electrolytes</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        These essential minerals are depleted when you experience dehydration. Since water does not have an adequate supply of electrolytes to replenish them in a timely manner, it is imperative to employ the correct proportion of H₂O with a variety of these minerals. We use a well-tested, research based formula including 5 varieties of electrolytes to ensure maximum rehydration.  

        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>DHM (Dihydromyricetin)</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Dihydromyricetin (or DHM) is an extract from the Japanese Raisin Tree that has been used for centuries as an anti-alcohol herb and hangover cure in Korean and Chinese traditional medicine. Recent studies suggest that DHM could lower your blood alcohol level, help your body metabolize alcohol faster, and protect your liver from damage and disease.

        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Milk Thistle (Silymarin)</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Studies on silymarin suggest that it may detoxify some of the harmful compounds in alcohol, thus protecting your liver. Plus, it acts as an antioxidant, neutralizing harmful free radicals that are produced as your body metabolizes alcohol. Additionally, silymarin may turn off the inflammatory signals activated by alcohol.

        </Typography>
      </AccordionDetails>
    </Accordion>
    
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Vitamins</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        A combination of Vitamin C, B6, and B12 help support a variety of metabolic functions as well as promoting proper sleep, a better mood, and more productivity when you’re awake. 
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Chamomile</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Chamomile has been used for centuries to decrease inflammation, help gastrointestinal distress, relieve muscle fatigue, and promote relaxation.         
        </Typography>
      </AccordionDetails>
    </Accordion>*/
