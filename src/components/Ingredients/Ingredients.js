import React from 'react'
import {useState, useEffect} from 'react'
//images
import milkThistle from '../../images/milk-thistle-s.jpeg'
import mangoG from '../../images/bg/mango-gradient.jpeg'
import buttonbg from '../../images/btn-bg.png'
//css
import './Ingredients.css'

const ingredientDetails = [
  {
    name: 'DHM',
    subname: `(Dihydromyricetin)`,
    subheader: `To break down alcohol's toxic byproducts`,
    description: `When you consume alcohol, the body breaks it down into smaller chemicals until all byproducts are eliminated completely. However, one of these chemicals is Acetaldehyde, which can be 20 times more toxic than alcohol. Dihydromyricetin works hard to support the liver in breaking down the toxic chemical acetaldehyde as quickly as possible, thus minimizing its harmful effects.`,
  },
  {
    name: 'Milk Thistle',
    subname: `(Silymarin)`,
    subheader: `To protect your liver`,
    description: `Studies on Milk Thistle suggest that it can detoxify some of the harmful compounds in alcohol, thus protecting your liver. Plus, it acts as an antioxidant, neutralizing harmful free radicals produced as your body metabolizes alcohol. Additionally, Milk Thistle can help turn off the inflammatory signals activated by alcohol, helping prevent headaches caused by vasodilation.`,
  },
  {
    name: 'Electrolytes',
    subname: ``,
    subheader: `For pre-hydration`,
    description: `Since there's no way to directly combat the dehydrating effects of alcohol. It's crucial to pre-hydrate your body before you drink heavily. We use a well-tested, research-based formula including 5 varieties of electrolytes to ensure maximum hydration.`,
  },
  {
    name: 'GABA',
    subname: ``,
    subheader: `To improve sleep quality`,
    description: `Alcohol has sedative effects that can induce feelings of relaxation and sleepiness. Still, the consumption of alcohol - especially in excess - causes the suppression of REM sleep. This decreases overall sleep quality leading to feeling grogginess and fatigue the next day.
        Studies have shown that consuming a combination of GABA and L-theanine before bed can increase REM sleep substantially.`,
  },
  {
    name: 'L-Theanine',
    subname: ``,
    subheader: `To improve sleep quality`,
    description: `Alcohol has sedative effects that can induce feelings of relaxation and sleepiness. Still, the consumption of alcohol - especially in excess - causes the suppression of REM sleep. This decreases overall sleep quality leading to feeling grogginess and fatigue the next day.
        Studies have shown that consuming a combination of GABA and L-theanine before bed can increase REM sleep substantially.`,
  },
  {
    name: 'DHM',
    subname: `(Dihydromyricetin)`,
    subheader: `To protect you liver and prevent withdrawal symptoms`,
    description: `Your body's battle against Acetaldehyde and the other harmful compounds in alcohol truly starts once you're asleep. This second dose of DHM and Milk Thistle helps support and protects your liver. At the same time, it rids your body of Acetaldehyde, ensuring all toxic compounds are eliminated from your body by the morning.
        `,
  },
  {
    name: 'Milk Thistle',
    subname: `(Silymarin)`,
    subheader: `To protect you liver and prevent withdrawal symptoms`,
    description: `Your body's battle against Acetaldehyde and the other harmful compounds in alcohol truly starts once you're asleep. This second dose of DHM and Milk Thistle helps support and protects your liver. At the same time, it rids your body of Acetaldehyde, ensuring all toxic compounds are eliminated from your body by the morning.
        `,
  },
  {
    name: 'More Electrolytes',
    subname: ``,
    subheader: `For super-hydration`,
    description:
      'Post-game super-hydrates your system when you need it most, right before bed.',
  },
  {
    name: 'Chamomile',
    subname: ``,
    subheader: `To prevent nausea and upset stomach`,
    description: `Chamomile has been used for centuries to decrease inflammation, help gastrointestinal distress, relieve muscle fatigue, and promote relaxation. Consuming it in the morning ensures that any lingering nausea or headache is eliminated, so you're ready to attack the day.`,
  },
  {
    name: 'Caffeine',
    subname: `(From Guarana)`,
    subheader: `For an energy boost`,
    description: `Bender contains just the right amount of caffeine to give your day the kickstart it needs. The caffeine in Plan-B comes from Guarana, a Brazillian plant native to the Amazon basin. Guarana is rich in antioxidants has been shown to improve focus and even enhance your ability to learn and remember.`,
  },
  {
    name: 'Electrolytes',
    subname: `(A final dose)`,
    subheader: 'For Rehydration',
    description: `Did you know you lose about one liter of water each night just from humidity in your breath? Plan-B helps you start your day hydrated with the optimal balance of electrolytes.`,
  },
]

export default function Ingredients() {
  const [selectedIngredient, setSelectedIngredient] = useState(1)

  function handleClick(ingredient) {
    setSelectedIngredient(ingredient)
  }
  return (
    <div className="ingredients-main">
      <div className="ingredients-section-text">
        <div className="ingredients-header">Naturally Sourced Ingredients</div>
        <div className="ingredients-text">
          Our formulas contain a unique blend of ingredients that eliminate all
          of your hangover symptoms. Tap on any of the ingredient names to learn
          more:
        </div>

        <div className="ingredients-section-1">
          <div className="ingredients-col">
            <div className="ingredients-col-header">Pre-Game</div>
            <div className="ingredients-col-sep"></div>
            <div
              className="ingredient"
              onClick={() => handleClick(0)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              DHM
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(1)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Milk Thistle
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(2)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Electrolytes
            </div>
          </div>
          <div className="ingredients-col">
            <div className="ingredients-col-header">Post-Game</div>

            <div className="ingredients-col-sep"></div>
            <div
              className="ingredient"
              onClick={() => handleClick(3)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              GABA
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(4)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              L-Theanine
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(5)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              DHM{' '}
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(6)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Milk Thistle
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(7)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Electrolytes
            </div>
          </div>
          <div className="ingredients-col">
            <div className="ingredients-col-header">Plan-B</div>
            <div className="ingredients-col-sep"></div>
            <div
              className="ingredient"
              onClick={() => handleClick(8)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Chamomile
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(9)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Natural Caffeine
            </div>
            <div
              className="ingredient"
              onClick={() => handleClick(10)}
              style={{backgroundImage: `url(${buttonbg})`}}
            >
              Electrolytes
            </div>
          </div>
        </div>
      </div>
      <div className="ingredients-section">
        
        <div className="ingredient-description">
          <div className="desc-upper">
            <div className="desc-name">
              <div className="ingredient-description-header">
                {ingredientDetails[selectedIngredient].name}
              </div>
              <div className="ingredient-description-subname">
                {ingredientDetails[selectedIngredient].subname}
              </div>
            </div>
            <div className="ingredient-description-subheader">
              {ingredientDetails[selectedIngredient].subheader}
            </div>
          </div>

          <div className="ingredient-description-text">
            {ingredientDetails[selectedIngredient].description}
          </div>
        </div>
      </div>
    </div>
  )
}
