import Image from "next/dist/client/image"
import style from './download.module.scss'

function Download() {
  const data = [
    {
      title: 'MyTello app for iOS and Android',
      sub: 'As well as using our dial-in number, you can also call international directly from your smartphone using our free app. It automatically filters your international contacts, so you can simply call with a tap',
      list: [
        {
          text: 'Free to download for iOS and Android',
          img: require('../../../pages/images/main-section/checked-icon.svg')
        },
        {
          text: 'Filters and shows all international contacts',
          img: require('../../../pages/images/main-section/checked-icon.svg')
        },
        {
          text: 'One tap to call',
          img: require('../../../pages/images/main-section/checked-icon.svg')
        },
        {
          text: 'See your live balance and call information',
          img: require('../../../pages/images/main-section/checked-icon.svg')
        },
      ],
      srcImg: [
        require('../../../pages/images/main-section/google-play.svg'),
        require('../../../pages/images/main-section/app-store.svg'),
      ],
      mainImg: require('../../../pages/images/main-section/iphone-icon.svg')
    }
  ]

  return (
    <section className={style.download}>
      <div className='container'>
        <div className={style.wrapper}>
          <div className={style.content}>
            <div className={style.main__text}>
              <h1 className={style.main__title}>{data[0].title} </h1>
              <p className={style.main__sub}>{data[0].sub} </p>
            </div>
            <div className={style.text__list}>
              {data[0].list.map((li, idx) => {
                return (
                  <div key={idx} className={style.text__wrapper}>
                    <div className={style.wow}>
                      <Image src={li.img} alt='image' />
                    </div>
                    <span>{li.text}</span>
                  </div>
                )
              })}
            </div>
            <div className={style.src__apps}>
              <Image src={data[0].srcImg[0]} alt='image' />
              <Image src={data[0].srcImg[1]} alt='image' />
            </div>
          </div>
          <div className={style.image}>
            <Image src={data[0].mainImg} alt="image" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Download