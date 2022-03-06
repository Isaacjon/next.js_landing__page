
import Image from 'next/image'
import style from './faqs.module.scss'

function Faqs() {

  const pageTitle = 'FAQs'
  const nothing = ''

  const faqs = [
    {
      title: 'General',
      qa: [
        {
          question: 'How to call UK from Australia?',
          sign: '+',
          answer: ''
        },
        {
          question: 'Can I use while I\’m abroad with my mobile phone (roaming)?',
          sign: '-',
          answer: `No. That doesn't work, you can only call abroad from your country (the country of your sim card).`,
        },
        {
          question: 'How to call UK from Australia?',
          sign: '+',
          answer: ''
        },
      ],
    },
    {
      title: 'Payment',
      qa: [
        {
          question: 'How to call UK from Australia?',
          sign: '+',
          answer: ''
        },
        {
          question: 'Can I use while I\’m abroad with my mobile phone (roaming)?',
          sign: '-',
          answer: `No. That doesn't work, you can only call abroad from your country (the country of your sim card).`,
        },
        {
          question: 'How to call UK from Australia?',
          sign: '+',
          answer: ''
        },
      ],
    },
    {
      title: 'Pricing',
      qa: [
        {
          question: 'How to call UK from Australia?',
          sign: '+',
          answer: ''
        },
        {
          question: '',
          sign: '',
          answer: ``,
        },
        {
          question: '',
          sign: '',
          answer: ''
        },
      ],
    },


  ]

  const clicked = false

  return (
    <section className={style.faqs}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle}
             </h1>
          </div>
          <div className={style.cards}>
            {faqs.map((item, idx) => {
              return (
                <div className={style.card} key={idx}>
                  <h3 className={style.cardTitle}>{item.title}</h3>
                  <div className={style.qaBox}>
                    
                    {/* item */}
                    <div
                      className={style.qa}
                      style={{ display: item.qa[0].question ? 'block' : 'none' }}
                    >
                      <h4 className={style.question}>
                        {item.qa[0].question}
                      
                      </h4>
                      <span className={style.sign}>{item.qa[0].sign} </span>
                    </div>
                    {/*  */}

                    {/* item */}
                    <div
                      className={style.qa}
                      style={{ display: item.qa[1].question ? 'block' : 'none' }}
                    >
                      <h4 className={style.question}>
                        {item.qa[1].question}
                      </h4>
                      <span className={style.sign}>{item.qa[1].sign} </span>
                      <p className={style.answer} >{item.qa[1].answer}</p>
                    </div>
                    {/*  */}

                    {/* item */}
                    <div
                      className={style.qa}
                      style={{ display: item.qa[2].question ? 'block' : 'none' }}

                    >
                      <h4 className={style.question}>
                        {item.qa[2].question}
                      </h4>
                      <span className={style.sign}>{item.qa[2].sign} </span>
                      <p className={style.answer}>{item.qa[2].answer}</p>
                    </div>
                    {/*  */}

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

export default Faqs