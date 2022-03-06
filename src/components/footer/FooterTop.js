import Image from 'next/image'
import style from './footertop.module.scss'

function FooterTop() {

  const pageTitle = 'You can count on us'
  const pageSubtitle = 'We\'re here to help from day one, with 24/7 outstanding support, backed up by a money back guarantee. This is the beginning of a beautiful friendship.'
  const pageImg = require('../../../pages/images/main-section/footer-top.svg')
  return (
    <div className={style.footerTop}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>
              {pageTitle}
            </h1>
            <p className={style.subtitle}>
              {pageSubtitle}
            </p>
            <button className={style.btn}>Start your free call now</button>
          </div>
          <div className={style.imageBox}>
            <Image src={pageImg} alt='image' className={style.img}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop