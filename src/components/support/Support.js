import style from './support.module.scss'
import Image from 'next/image'


function Support() {

  const pageTitle = 'Still have a question?'
  const pageSub = 'If you have any questions, please do not hesitate to contact us.'

  const cards = [
    {
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      title: `support@mytello.com`,
      sub: 'Send us an e-mail and we\’ll respond'
    },
    {
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      title: 'Fast customer support 24x7',
      sub: 'We have a live chat to help you'
    },
  ]

  return (
    <section className={style.support}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>
              {pageTitle}
            </h1>
            <p className={style.sub}>
              {pageSub}
            </p>
          </div>
          <div className={style.cards}>
            {cards.map((item, idx) => {
              return (
                <div className={style.card} key={idx}>
                  <div className={style.cardImg}>
                    <Image src={item.img} alt='image' />
                  </div>
                  <div className={style.cardTexts}>
                    <h3 className={style.cardTitle}>
                      {item.title}
                    </h3>
                    <p className={style.cardSub}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support