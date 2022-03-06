
import Image from 'next/image'
import style from './countries.module.scss'

function Countries() {

  const btn = 'See all countries'
  const pageTitle = 'Other popular countries'
  const cards = [
    {
      cardAvatar: require('../../../pages/images/main-section/myTello-avatar.svg'),
      title: 'You can work with and without app',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus',
    },
    {
      cardAvatar: require('../../../pages/images/main-section/myTello-avatar.svg'),
      title: 'The person you are calling doesn\'t need internet or register with mytello',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus',
    },
    {
      cardAvatar: require('../../../pages/images/main-section/myTello-avatar.svg'),
      title: 'You can call any phone number of the world',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus',
    },

  ]
  const flags = [
    {
      img: require('../../../pages/images/main-section/canada.svg'),
      name: 'Canada',
      callTimes: '93k',
      callText: 'calls right now',
      price: '$10',
      priceText: 'per minute'
    },
    {
      img: require('../../../pages/images/main-section/germany.svg'),
      name: 'Germany',
      callTimes: '93k',
      callText: 'calls right now',
      price: '$10',
      priceText: 'per minute'
    },
    {
      img: require('../../../pages/images/main-section/usa.svg'),
      name: 'USA',
      callTimes: '93k',
      callText: 'calls right now',
      price: '$10',
      priceText: 'per minute'
    },
    {
      img: require('../../../pages/images/main-section/poland.svg'),
      name: 'Poland',
      callTimes: '93k',
      callText: 'calls right now',
      price: '$10',
      priceText: 'per minute'
    },
  ]

  return (
    <section className={style.countries}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle} </h1>
          </div>
          <div className={style.cards}>
            {flags.map((flag, index) => {
              return (
                <div className={style.card} key={index}>
                  <div className={style.card__top}>
                    <div className={style.image__box}>
                      <Image src={flag.img} alt='image' />
                    </div>
                    <div className={style.textBox}>
                      <h3 className={style.cardTitle}>{flag.name} </h3>
                      <p className={style.cardSubtitle}>
                        <span>{flag.callTimes}</span>
                        {flag.callText}</p>
                    </div>
                  </div>
                  <div className={style.card__bottom}>
                    <p className={style.bottomSubtitle}>
                      <span>{flag.price}</span>
                      {flag.priceText}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button className={style.btn}>{btn}</button>
        </div>
      </div>
    </section>
  )
}

export default Countries