import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//icons 
import bloodVessel from '../../images/blood-vessel.png'
import stomach from '../../images/stomach.png'
import liver from '../../images/liver.png'
import badSleep from '../../images/bad-sleep.png'
import withdrawal from '../../images/withdrawal.png'

//css
import './Causes.css'


export default function Causes() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img className = "causes-icon-img" src = {badSleep}/>
            <div className = "causes-title">Sleep Disruption</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Although alcohol can make you sleepy, it can interfere with the deeper stages of sleep, causing you to wake up in the middle of the night and feel tired the next day.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img className = "causes-icon-img" src = {withdrawal}/>
            <div className = "causes-title">Alcohol withdrawal</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While drinking, your brain adjusts to the effects of alcohol. Mild withdrawal symptoms like nausea, headache, and restlessness can occur when these effects wear off.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img className = "causes-icon-img" src = {liver}/>
            <div className = "causes-title">Acetaldehyde</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A chemical called Acetaldehyde is produced while your body breaks down alcohol. In large amounts, Acetaldehyde can lead to symptoms like nausea and sweating.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img className = "causes-icon-img" src = {stomach}/>
            <div className = "causes-title">Digestive upset</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Consuming alcohol can irritate the lining of your stomach, leading to symptoms like nausea and vomiting.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img className = "causes-icon-img" src = {bloodVessel}/>
            <div className = "causes-title">Widening of blood vessels (vasodilatation)</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Alcohol intoxication can cause vasodilatation, which generally leads to headaches.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

