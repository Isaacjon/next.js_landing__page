import Image from 'next/image'
import style from '../../styles/bottom-line.module.scss'

function BottomLine() {
  const data = [
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: 'No contract, no hidden costs'
    },
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: 'Your credit never expires'
    },
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: 'Trusted and secure SSL connection'
    },
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: 'Easy top up by PayPal or card'
    },
  ]

  return (
    <div className={style.background__color}>
      <div className='container'>
        <div className={style.flex}>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.box}>
              <Image src={item.img} alt='image' />
              <p className={style.text}>
                {item.text}
              </p>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default BottomLine