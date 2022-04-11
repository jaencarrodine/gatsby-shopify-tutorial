import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import pregame from '../../images/pregame.png'
import postgame from '../../images/post-game.png'
import planb from '../../images/plan-b.png'





//css
import './Stepper.css'
const steps = [
  {
    label: 'The Defense: Pre-game',
    subtitle: `Just like your 9th-grade health teacher used to say - Always use protection. The pre-game formula is your first line of defense against the pain and suffering you have always experienced after a hard night out.`,
    img: pregame,
    sections:[
        {
            header: <div className="stepper-section-header"><strong>DHM (Dihydromyricetin)</strong> - To break down Acetaldehyde</div>,
            body:'When you consume alcohol, the body breaks it down into smaller chemicals until all byproducts are eliminated completely. However, one of these chemicals is Acetaldehyde, which can be 20 times more toxic than alcohol. Dihydromyricetin works hard to support the liver in breaking down the toxic chemical acetaldehyde as quickly as possible, thus minimizing its harmful effects.',
            body2:''

        },
        {
            header: <div className="stepper-section-header"><strong>Milk Thistle (Silymarin)</strong> - To prevent vasodilatation</div>,
            body:<>'Studies on Milk Thistle suggest that it can detoxify some of the harmful compounds in alcohol, thus protecting your liver. Plus, it acts as an antioxidant, neutralizing harmful free radicals produced as your body metabolizes alcohol<a href = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3959115/'> (source)</a>. Additionally, Milk Thistle can help turn off the inflammatory signals activated by alcohol<a href ='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6155865/'> (source)</a>, helping prevent headaches caused by vasodilation.</>,
            body2:''

        },
        {
            header: <div className="stepper-section-header"><strong>Electrolytes</strong> - For pre-hydration</div>,
            body:`Since there's no way to directly combat the dehydrating effects of alcohol. It's crucial to pre-hydrate your body before you drink heavily. We use a well-tested, research-based formula including 5 varieties of electrolytes to ensure maximum hydration.`,
            body2:''

        },
    ]
  },
  {
    label: 'The last shot of the night: Post-game',
    subtitle: 'Once the damage has been done, it becomes essential to give your body the fuel it needs to have a restful night and minimize the damages.',
    img: postgame,
    sections:[
        {
            header: <div className="stepper-section-header"><strong>GABA + L-theanine</strong> - To improve sleep quality</div>,
            body:<>Alcohol has sedative effects that can induce feelings of relaxation and sleepiness. Still, the consumption of alcohol - especially in excess - causes the suppression of REM sleep. This decreases overall sleep quality leading to feeling grogginess and fatigue the next day. Studies have shown that consuming a combination of GABA and L-theanine before bed can increase REM sleep substantially <a href = 'www.ncbi.nlm.nih.gov/pmc/articles/PMC6366437'>(Source)</a>.</>,
            body2:''

        },
        {
            header: <div className="stepper-section-header"><strong>A second dose of DHM and Milk Thistle </strong> - Protects your liver and prevents withdrawal</div>,
            body:`Your body's battle against Acetaldehyde and the other harmful compounds in alcohol truly starts once you're asleep. This second dose of DHM and Milk Thistle helps support and protects your liver. At the same time, it rids your body of Acetaldehyde, ensuring all toxic compounds are eliminated from your body by the morning.`,
            body2:''

        },
        {
            header: <div className="stepper-section-header"><strong>More Electrolytes</strong> - For super-hydration </div>,
            body:`Post-game super-hydrates your system when you need it most, right before bed. `,
            body2:''

        },
    ]
  },
  {
    label: 'The morning boost: Plan-B',
    subtitle:`After a hard night filled with regret and poor decision-making, you have no option but to resort to Plan-B. No, not that type of plan-B. Our "morning-after" drink will have you feeling 100% in no time, ready to attack the day.`,
    img: planb,
    sections:[
        {
            header: <div className="stepper-section-header"><strong>Chamomile</strong> - To prevent nausea and digestive upset</div>,
            body:`Chamomile has been used for centuries to decrease inflammation, help gastrointestinal distress, relieve muscle fatigue, and promote relaxation. Consuming it in the morning ensures that any lingering nausea or headache is eliminated, so you're ready to attack the day.`,
            body2:''
        },
        {
            header: <div className="stepper-section-header"><strong>Naturally occurring caffeine</strong> - For an energy boost</div>,
            body:'Bender contains just the right amount of caffeine to give your day the kickstart it needs. The caffeine in Plan-B comes from Guarana, a Brazillian plant native to the Amazon basin. Guarana is rich in antioxidants has been shown to improve focus and even enhance your ability to learn and remember.',
            body2:''

        },
        {
            header: <div className="stepper-section-header"><strong>A final does of Electrolytes</strong> - For rehydration</div>,
            body:`Did you know you lose about one liter of water each night just from humidity in your breath? Plan-B helps you start your day hydrated with the optimal balance of electrolytes.`,
            body2:''

        },
    ]
  },
];



export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSetStep = (index) => {
        console.log('setting step to', index)
        setActiveStep(index);
    }



  

  return (
    <Box sx={{ maxWidth: '100%'}}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label} value = {index} >
            <StepLabel onClick = {() => handleSetStep(index)} className = 'sl'> 
              <div className = 'stepper-step-label'>{step.label}</div>
            </StepLabel>
            <StepContent>
                <div className = "stepper-main" >
                    <img className = 'stepper-img' src = {step.img}/>

                    <div className = 'stepper-section-container'>
                        <div className = 'stepper-subtitle'>
                            {step.subtitle}
                        </div>
                        {step.sections.map((section,index) =>{
                            let mt = index > 0 ? '30px' : ''

                            return(
                                <div className = 'stepper-section' style={{marginTop: mt}}>
                                
                                    {section.header}
                                    
                                    <div className = 'stepper-section-body'>
                                        {section.body}
                                    </div>
                                    <div className = 'stepper-section-body2'>
                                        {section.body2}
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                     Next
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
    </Box>
  );
}