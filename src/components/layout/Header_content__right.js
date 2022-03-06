
import Image from 'next/image'
import { useState } from "react"
import style from '../../styles/header-content__right.module.scss'

function Header() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1, number: '$1', }, { id: 2, number: '$5', }, { id: 3, number: '$10', }, { id: 4, number: '$20', },]
  })

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] })
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return style.active
    } else {
      return ''
    }
  }


  const [active, setActive] = useState(false)


  const discounts = [
    {
      number: '$1',
      key: 1
    },
    {
      number: '$5',
      key: 2
    },
    {
      number: '$10',
      key: 3
    },
    {
      number: '$20',
      key: 4
    },
  ]
  const boxContent = [
    {
      img: require('../../../pages/images/header-section/telephone-icon.svg'),
      price: `20c`,
      priceText: ' / per minute',
      title: 'for landline',
    },
    {
      img: require('../../../pages/images/header-section/mobile-phone.icon.svg'),
      price: `10c`,
      priceText: ' / per minute',
      title: 'for mobile',
    },
  ]

  return (
    <div className={style.right}>



      {/*  */}
      <div className={`${style.wrapper} ${!active ? style.active : 'nnot active'}`}

      >
        {/* box one */}
        <h3
          onClick={() => setActive(!active)}

        >
          PRICE PER MINUTE
        </h3>

        <div className={`${style.active} ${style.box__wrapper} ${style.active} `}>
          {boxContent.map((box, index) => {
            return (
              <div className={style.box} key={index}>
                <div className={style.image}>
                  <Image src={box.img} alt='image' />
                </div>
                <div className={style.texts}>
                  <p>
                    <span>{box.price}</span>
                    <span>{box.priceText}</span>
                  </p>
                  <span className={style.bottomText}>{box.title}</span>
                </div>
              </div>
            )
          })}
        </div>

        <p className={style.btn_title}>Start your free call now</p>
        <button className={style.btn}>Call now</button>

      </div>


      {/* second div */}
      <div className={`${style.wrapper} ${active ? style.active : 'nnot active'}`}
      >
        {/* box one */}
        <h3
          onClick={() => setActive(!active)}

        >
          MINUTES PER PRICE
          </h3>

        <div className={style.spec__div}>
          <h3 className={style.spec__title}>Save up to 10% with more than $10</h3>

          <div className={style.wrap__discounts}>
            {appState.objects.map((item, index) => {
              return (
                <li


                  key={index}
                  className={toggleActiveStyles(index)}
                  onClick={() => toggleActive(index)}
                >
                  {item.number}</li>
              )
            })}

          </div>

        </div>

        <div className={style.box__wrapper}>
          {boxContent.map((box, index) => {
            return (
              <div className={style.box} key={index}>
                <div className={style.image}>
                  <Image src={box.img} alt='image' />
                </div>
                <div className={style.texts}>
                  <p>
                    <span>20 min</span>
                    <span></span>
                  </p>
                  <span className={style.bottomText}>{box.title}</span>
                </div>
              </div>
            )
          })}
        </div>

        <p className={style.btn_title}>Start your free call now</p>
        <button className={style.btn}>Call now</button>

      </div>


    </div >

    // {
    //   navLinks.map((link, index) => {
    //     return (
    //       <li key={index}>
    //         <Link href={link.path} passHref>
    //           {link.name}
    //         </Link>
    //       </li>
    //     )
    //   })
    // }

  )
}

export default Header