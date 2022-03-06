
import Image from 'next/image'
import style from './mytello.module.scss'

function MyTello() {

  const btn = 'Start your free call now'
  const pageTitle = 'Why choose MyTello'
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

  return (
    <section className={style.mytello}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle} </h1>
          </div>
          <div className={style.cards}>
            {cards.map((card, index) => {
              return (
                <div className={style.card} key={index}>
                  <div className={style.image__box}>
                    <Image src={card.cardAvatar} alt='image' />
                  </div>
                  <h3 className={style.cardTitle}>{card.title} </h3>
                  <p className={style.cardSubtitle}>{card.sub}</p>
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

export default MyTello