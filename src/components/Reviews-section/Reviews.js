import style from './reviews.module.scss'
import Image from 'next/image'

function Reviews() {
  const title = 'What our customers tell about us'
  const rating = 5
  const cardRating = 4
  const reviews__data = [
    {
      title: 'Excellent',
      img: require('../../../pages/images/header-section/reviews-icon.svg'),
    }
  ]
  const cards = [
    {
      key: 1,
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      name: 'Jane Cooper',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus',
      date: '20.06.2021'
    },
    {
      key: 2,
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      name: 'Jane Cooper',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus',
      date: '20.06.2021'
    },
    {
      key: 3,
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      name: 'Jane Cooper',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pretium facilisis lacus',
      date: '20.06.2021'
    },
  ]

  return (
    <section className={style.section__ourCustomers}>
      <div className='container'>
        <h1 className={style.section__title}>
          {title}
        </h1>
        <div className={style.section__statistics}>
          <p className={style.subtitlesFirst}>
            <span className={style.subtitle}>
              {reviews__data[0].title}
            </span>
            <span className={style.stars}>
              {Array(rating)
                .fill()
                .map((start, index) => (
                  <span key={index}>&#9733;</span>
                ))}
            </span>
          </p>

          <div className={style.numbersCenter}>
            <p>
              <span className={style.number}>4.73</span>
              <span className={style.text}>average</span>
            </p>
            <p>
              <span className={style.number}>3169</span>
              <span className={style.text}>reviews</span>
            </p>
          </div>

          <div className={style.iconLast}>
            <Image src={reviews__data[0].img} alt='image' />
          </div>

        </div>

        {/* cards wrapper*/}
        <section className={style.card__wrapper}>
          {cards.map((card, index) => {
            return (
              <div className={style.card} key={card.key} >

                <div className={style.top}>
                  <Image src={card.img} alt='image' />
                  <div className={style.name}>
                    <span className={style.card__name}>{card.name}</span>
                    <div className={style.card__stars}>
                      {Array(cardRating)
                        .fill()
                        .map((star, index) => (
                          <span key={index}>&#9733;</span>
                        ))}
                      &#9734;
                    </div>
                  </div>
                </div>
                <div className={style.bottom}>
                  <p className={style.subtitle}>
                    {card.sub}
                  </p>
                  <span className={style.date}>{card.date} </span>
                </div>
              </div>
            )
          })}

        </section>




      </div>
    </section>
  )
}

export default Reviews