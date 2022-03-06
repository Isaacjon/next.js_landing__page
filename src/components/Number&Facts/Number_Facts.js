import React from 'react'
import style from './number_facts.module.scss'

function Number_Facts() {
  const texts = ['Numbers and facts', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus, cursus blandit. Odio eleifend orci nibh mattis ullamcorper fringilla.',]
  const cards = [
    {
      cardText: '93k',
      text: 'New numbers every year'
    },
    {
      cardText: '21m',
      text: 'Telephony minutes per year'
    },
    {
      cardText: '217,000',
      text: 'Customers in 217 countries'
    },
  ]

  return (
    <section className={style.number__facts}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{texts[0]} </h1>
            <p className={style.sub}>{texts[1]}</p>
          </div>
          <div className={style.cards}>
            {cards.map((card, index) => {
              return (
                <div className={style.card} key={index}>
                  <div className={style.number}>
                    <span>{card.cardText}</span>
                  </div>
                  <p className={style.cardSubtitle}>{card.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Number_Facts