// import style from  '../../styles/components/header.module.scss'
import style from '../styles/header.module.scss'
import BottomLine from './layout/BottomLine'
import Header_content__left from './layout/Header_content__left'
import Header_content__right from './layout/Header_content__right'
import Header_Nav from './layout/Header_Nav'


function Header() {

  return (<>
    <header className={style.header}>
      <div className="container">
        <Header_Nav />
        <section className={style.header__content}>
          <div className={style.left}>
            <Header_content__left />
          </div>
          <div className={style.right}>
            <Header_content__right />
          </div>

        </section>
      </div>
    </header>
    <BottomLine />
  </>)
}

export default Header