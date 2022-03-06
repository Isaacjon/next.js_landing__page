import React from 'react'
import Image from 'next/image'
import style from './howitworks.module.scss'

function HowItWorks() {
  const arrowImg = {
    img: require('../../../pages/images/main-section/arrow-img.svg')
  }
  const dataCards = [
    {
      img: require('../../../pages/images/main-section/avatar.svg'),
      id: 1,
      title: 'Sign up',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',

    },
    {
      img: require('../../../pages/images/main-section/avatar.svg'),
      id: 2,
      title: 'Call for free',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',

    },
    {
      img: require('../../../pages/images/main-section/avatar.svg'),
      id: 3,
      title: 'Add credit',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',

    },
  ]
  return (
    <section className={style.how}>
      <div className="container">
        <div className={style.content}>
          <h1 className={style.how__title}>How it works</h1>
          <div className={style.card__wrap}>
            <div className={style.card__real__wrap}>
              {dataCards.map((card, index) => {
                return (
                  <div className={style.card} key={index}>
                    {/* {console.log('i gave idx to key but says={Warning: Each child in a list should have a unique "key" prop.} ')} */}
                    <div className={style.img__div}>
                      <Image src={card.img} alt="image" />
                    </div>
                    <div className={style.text__div}>
                      <h1 className={style.text__title}>
                        <span>0{card.id}</span>
                        {card.title}
                      </h1>
                      <p className={style.text__sub}>
                        {card.sub}
                      </p>
                    </div>
                    <div className={style.arrow__div}>
                      <Image src={arrowImg.img} alt="image" />
                    </div>
                  </div>

                )
              })}

              <div className={style.card}>

                <div className={style.text__div}>
                  <h1 className={style.text__title}>
                    Get started right now
                  </h1>
                  <button className={style.btn}>
                    Start your free call now
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
