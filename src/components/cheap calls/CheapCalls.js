
import Image from 'next/image'
import style from './cheapcalls.module.scss'

function CheapCalls() {

  const btn = 'View more'
  const pageSub = 'Read more answers to common questions on making cheap calls to Thailand. In this guide we cover calling codes, rates, and how mytello works.'
  const pageTitle = 'Learn more about cheap calls to UK'

  const more = [
    {
      img: require('../../../pages/images/main-section/quest-mark.svg'),
      name: 'How can I make cheap calls to UK?',
      text: 'mytello uses dial-in numbers to reduce the cost of calling internationally. For example, if you have a relative in UK, instead of calling their phone number you would call a dial-in number within your country. Your call would then be connected to your relative in UK. The result is much cheaper calls to UK from your landline and mobile phone'
    },
    {
      img: require('../../../pages/images/main-section/quest-mark.svg'),
      name: 'What is the UK calling code?',
      text: 'The calling code (also known as the dialling code) for UK is +66 or 0066. Good to know, but with mytello you’ll never have to remember this, as we use a simple landline number to connect you to UK. You dial the dial in number, we connect you to UK and you save money on call costs. To learn more about calling codes, check out the International Telecommunication Union (ITU) website.'
    },
    {
      img: require('../../../pages/images/main-section/quest-mark.svg'),
      name: 'What is the prefix for UK?',
      text: 'The prefix (also known as the calling code or dialling code) for UK is +66 or 0066. Once you’ve set up your free mytello account, enter the number you’re calling in UK, including the prefix, and we’ll use a local dial-in number to save you up to 90% on each call'
    },

  ]

  return (
    <section className={style.cheapCalls}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle} </h1>
            <p className={style.subtitle}>{pageSub} </p>
          </div>
          <div className={style.cards}>
            {more.map((item, index) => {
              return (
                <div className={style.card} key={index}>
                  <div className={style.card__top}>
                    <div className={style.image__box}>
                      <Image src={item.img} alt='image' />
                    </div>
                    <div className={style.textBox}>
                      <h3 className={style.cardTitle}>{item.name} </h3>
                    </div>
                  </div>
                  <div className={style.card__bottom}>
                    <p className={style.bottomSubtitle}>
                      {item.text}</p>
                  </div>
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

export default CheapCalls