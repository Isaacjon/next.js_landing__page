import Image from "next/image";
import style from "./footerbottomcomponent.module.scss";

function FooterBottomComponent() {
  const pageTitles = ["payment options", "mobile app"];

  const payments = [
    {
      img: require("../../../pages/images/main-section/visa.svg"),
    },
    {
      img: require("../../../pages/images/main-section/mastercard.svg"),
    },
    {
      img: require("../../../pages/images/main-section/paypal.svg"),
    },
    {
      img: require("../../../pages/images/main-section/paysafecard.svg"),
    },
    {
      img: require("../../../pages/images/main-section/sofort.svg"),
    },
  ];

  const apps = [
    {
      img: require("../../../pages/images/main-section/google-play.svg"),
    },
    {
      img: require("../../../pages/images/main-section/app-store.svg"),
    },
  ];

  return (
    <div className={style.footerBottom}>
      <div className="container">
        <div className={style.content}>
          <div className={style.div}>
            <h1 className={style.Title}>{pageTitles[0]} </h1>
            <div className={style.imgWrapper}>
              {payments.map((item, idx) => {
                return (
                  <div className={style.image} key={idx}>
                    <Image src={item.img} alt="image" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.div}>
            <h1 className={style.Title}>{pageTitles[1]}</h1>
            <div className={style.imgWrapper}>
              {apps.map((item, idx) => {
                return (
                  <div className={style.image} key={idx}>
                    <Image src={item.img} alt="image" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottomComponent;
