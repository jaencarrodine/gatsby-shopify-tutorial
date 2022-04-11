import React from 'react'
import Grid from '@mui/material/Grid'
import {Image} from 'semantic-ui-react'
import { motion } from "framer-motion";
import './Benefits.css'

//imgs
import check from '../../images/check.png'
import bg from '../../images/bg/br.jpeg'
import save from '../../images/save.png'
import headache from '../../images/headache.png'
import wakeUp from '../../images/wake-up.png'
import cheers from '../../images/cheers.png'
import { duration } from '@mui/material';

export default function Benefits() {

  const container = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
       staggerChildren:.4,
       duration:2,
      }
    }
  }

  const item = {
    offscreen: {
        opacity: 0,
        y:50,
      },
    onscreen: { 
      y:0,
      opacity: 1,
      transition:{
        duration:1,
      }
    },
    
  }
  return (
    
    <motion.div
      className="benefits"
      variants={container}
    >
      {/*style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}*/}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}  >
          <motion.div className="benefits-block" variants = {item}>
            <div className="benefits-block-image">
              <img className="block-image" src={save} size="small" />
            </div>
            <div className="benefits-block-text">
              <div className="benefit-head">Save time and money</div>
              <div className="benefit-text">
              Skip the last-second pharmacy runs. Bender lasts as longer than 7 bottles of Pedialyte, costs you 75% less, and gets delivered right to your door.
              </div>
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} >
          <motion.div className="benefits-block" variants = {item}>
            <div className="benefits-block-image">
              <img className="block-image" src={headache} size="small" />
            </div>
            <div className="benefits-block-text">
              <div className="benefit-head">Skip the morning headache</div>
              <div className="benefit-text">
                Bender super-hydrates your system so that you wake up feeling
                refreshed and headache free.
              </div>
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} >
          <motion.div className="benefits-block" variants = {item}>
            <div className="benefits-block-image">
              <img className="block-image" src={wakeUp} size="small" />
            </div>
            <div className="benefits-block-text">
              <div className="benefit-head">Wake up feeling rested</div>
              <div className="benefit-text">
                Our formula contains supplements that assist you in
                accomplishing a deeper REM sleep cycle to ensure you have an
                easy, breezy morning.{' '}
              </div>
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} >
          <motion.div className="benefits-block" variants = {item}>
            <div className="benefits-block-image">
              <img className="block-image" src={cheers} size="small" />
            </div>
            <div className="benefits-block-text">
              <div className="benefit-head">
                Don't treat hangovers, prevent them
              </div>
              <div className="benefit-text">
                Bender is designed to stop hangovers in their tracks, not just
                treat them after the damage is already done.
              </div>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  )
}
