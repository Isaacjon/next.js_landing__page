
import Image from 'next/image'
import style from '../../styles/header-content_left.module.scss'

function Header_content__left() {

  const title = 'Cheap call to the UK from Australia'
  const sub = 'No contract, no rate, pay per minute. Start your free call now'
  const imgSrc = [{
    img1: require('../../../pages/images/header-section/play-button.svg'),
    img2: require('../../../pages/images/header-section/free-icon.svg'),
  }]
  const rating = 5
  const ratingInfo = [
    {
      number: '3169',
      text: 'review'
    },
    {
      number: '20%',
      text: 'extra credit for free'
    }
  ]

  return (
    <div className={style.wrap}>
      <h1 className={style.title}> {title} </h1>
      <p className={style.subtitle}>{sub} </p>
      <div className={style.play}>
        <Image src={imgSrc[0].img1} alt="image" className={style.image} />
        <span>See how it works</span>
      </div>
      <div className={style.wrapper}>
        <div className={style.box}>
          <p className={style.star}>
            {
              Array(rating)
                .fill()
                .map((star,index) => (
                  <span key={index}>&#9733;</span>
                ))}

            {/* {rating.map((rate, index) => {
          return (
            <li key={index}>
              {rating}
            </li>
          )
        })} */}
          </p>
          <div className={style.info}>
            <span>{ratingInfo[0].number}</span>
            <span>{ratingInfo[0].text}</span>
          </div>
        </div>
        <div className={style.box}>
          <Image src={imgSrc[0].img2}  alt="image"/>
          <div className={style.info}>
            <span>{ratingInfo[1].number}</span>
            <span>{ratingInfo[1].text}</span>
          </div>
        </div>
      </div>

    </div>


  )


}

export default Header_content__left