import Image from 'next/image'
import style from './footer.module.scss'
import FooterBottomComponent from './FooterBottomComponent'

function Footer() {

  const firstCard = [
    {
      title: 'Logo',
      subtitle: 'By using mytello you can make cheap calls to the UK. Our service works from any landline or mobile phone, without changing your contract.  ',
      img: require('../../../pages/images/main-section/footer-bottom.svg')
    }
  ]

  const secondCard = [
    {
      title: 'Menu',
      sub:
        ['Imprint',
          'Terms',
          'Privacy Policy',
          'Money-back guarantee',
          'mytello countries',
          'Blog',
        ]

    },
    {
      title: 'our top countries',
      sub:
        [
          'Cheap calls to Malta',
          'Cheap calls to Croatia',
          'Cheap calls to the Netherlands',
          'Cheap calls to Great Britain',
        ]
    },
    {
      title: 'Content',
      sub:
        [
          'Rates landline & mobile',
          'Free test',
          'FAQ',
          'iOS and Android App',
          'Cheap calls',
          'How can I make cheap calls to UK?',
          'What is the UK calling code?',
          'What is the prefix for UK?',
          'Is mytello a calling card for UK?',
          'Can I make calls to UK?',
          'How many people call UK with mytello?',
          '100% customer satisfaction',
        ]
    },
  ]



  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.content}>
          {firstCard.map((card, idx) => {
            return (
              <div className={style.firstCard} key={idx}>
                <h3 className={style.cardTitle}>
                  {card.title}
                </h3>
                <p className={style.cardSubtitle}>
                  {card.subtitle}
                </p>
                <div className={style.cardImg}>
                  <Image src={card.img} alt='image' />
                </div>
              </div>
            )
          })}

          {secondCard.map((card, idx) => {
            return (
              <ul className={style.secondCard} key={idx}>
                <h3 className={style.cardTitle}>
                  {card.title}
                </h3>
                {card.sub.map((sub, idx) => {
                  return (
                      <li key={idx} className={style.cardSubtitle}>{sub}</li>
                  )
                })}
              </ul>
            )
          })}

        </div>
      </div>
      <FooterBottomComponent />
    </footer>
  )
}

export default Footer