import React from 'react'

import postgame from '../../images/post-game.png'

const pg = {
  label: 'The last shot of the night: Post-game',
  subtitle:
    'Once the damage has been done, it becomes essential to give your body the fuel it needs to have a restful night and minimize the damages.',
  img: postgame,
  sections: [
    {
      header: (
        <div className="stepper-section-header">
          <strong>GABA + L-theanine</strong> - To improve sleep quality
        </div>
      ),
      body: (
        <>
          Alcohol has sedative effects that can induce feelings of relaxation
          and sleepiness. Still, the consumption of alcohol - especially in
          excess - causes the suppression of REM sleep. This decreases overall
          sleep quality leading to feeling grogginess and fatigue the next day.
          Studies have shown that consuming a combination of GABA and L-theanine
          before bed can increase REM sleep substantially{' '}
          <a href="www.ncbi.nlm.nih.gov/pmc/articles/PMC6366437">(Source)</a>.
        </>
      ),
      body2: '',
    },
    {
      header: (
        <div className="stepper-section-header">
          <strong>DHM (Dihydromyricetin)</strong> - To break down Acetaldehyde -
          Preventing nausea, alcohol withdrawal, and digestive upset.{' '}
        </div>
      ),
      body:
        'When you consume alcohol, the body breaks it down into smaller chemicals until all byproducts are eliminated completely. However, one of these chemicals is Acetaldehyde, which can be 20 times more toxic than alcohol. Dihydromyricetin works hard to support the liver in breaking down the toxic chemical acetaldehyde as quickly as possible, thus minimizing its harmful effects.',
      body2: '',
    },
    {
      header: (
        <div className="stepper-section-header">
          <strong>Milk Thistle (Silymarin)</strong> - To prevent headaches and
          inflammation
        </div>
      ),
      body: (
        <>
          'Studies on Milk Thistle suggest that it can detoxify some of the
          harmful compounds in alcohol, thus protecting your liver. Plus, it
          acts as an antioxidant, neutralizing harmful free radicals produced as
          your body metabolizes alcohol
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3959115/">
            {' '}
            (source)
          </a>
          . Additionally, Milk Thistle can help turn off the inflammatory
          signals activated by alcohol
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6155865/">
            {' '}
            (source)
          </a>
          , helping prevent headaches caused by vasodilation.
        </>
      ),
      body2: '',
    },
    {
      header: (
        <div className="stepper-section-header">
          <strong>Electrolytes</strong> - For super-hydration{' '}
        </div>
      ),
      body: `Post-game super-hydrates your system when you need it most, right before bed. We use a well-tested, research-based formula including 5 varieties of electrolytes to ensure maximum hydration.`,
      body2: '',
    },
  ],
}

export default function postGame() {
  return (
    <div className="stepper-main">
      <img className="stepper-img" src={pg.img} />

      <div className="stepper-section-container">
        <div className="stepper-subtitle">{pg.subtitle}</div>

        {pg.sections.map((section, index) => {
          let mt = index > 0 ? '30px' : ''

          return (
            <div className="stepper-section" style={{marginTop: mt}}>
              {section.header}

              <div className="stepper-section-body">{section.body}</div>
              <div className="stepper-section-body2">{section.body2}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
