// import style from '../styles/header.module.scss'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { navLinks, register } from "../../data.js"
import style from '../../styles/header-nav.module.scss'



function Header_Nav() {
  const [active, setActive] = useState(false) 

  const burger = require('../../../pages/images/header-section/burger-menu.svg')

  { }
  return (
    <nav className={style.header__nav}>
      <div className={style.wrap}>
        
      <div className={`${style.burger__div} ${active ? style.active : 'nnot active'}`}
      onClick={() => setActive(!active)} 
      >
        <Image src={burger} alt="menu" className={style.burger__image} id={style.burger} />
      </div>
        <div className={style.header__logo_div}>
          <h3 className={style.logo}>Logo</h3>
        </div>

      <ul className={`${style.header__menu} ${active ? style.active : 'nnot active'}`}>

        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path} passHref>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
      </div>


      <ul className={style.header__register}>
        {register.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path} passHref >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>


    </nav>
  )
}

export default Header_Nav