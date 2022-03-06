
import Image from 'next/image'
import style from './about.module.scss'

function About() {

  const btn = 'Read more'
  const pageSub = `
  Mytello was founded in 2016 with the aim of becoming one of the world's leading specialist providers for international telephony. The founder and managing director Michael Schoepfer  has many years of experience in the telecommunications market.
The first version of mytello was put online together with a small team. Due to the great demand and the increasing number of users, we immediately noticed that we could solve a real problem here.

  `
  const pageTitle = 'About Us'

  const img = require('../../../pages/images/main-section/about-icon.svg')
  const imgText = 'We connect from every point on earth to more than 227 countries'


  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle} </h1>
            <p className={style.subtitle}>{pageSub} </p>
            <button className={style.btn}>{btn}</button>
          </div>
          <div className={style.wrapper}>
            <div className={style.imgWrapper}>
              <Image src={img} alt='image' className={style.aboutImg} />
            </div>
            <p>{imgText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About