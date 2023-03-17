import React from "react";
import cl from "./Header.module.css";
import logo from "../../images/logo.svg";
import welbex from "../../images/welbex.svg";
import tg from "../../images/tg.svg";
import phone from "../../images/phone.svg";
import wa from "../../images/wa.svg";

const Header = () => {
  return (
    <header>
      <div className={cl.logoDiv}>
        <div className={cl.logoMain}>
          <img className={cl.logoImg} src={logo} alt="welbex logo" />
          <img className={cl.logoImgText} src={welbex} alt="welbex logo text" />
        </div>
        <div className={cl.logoDesc}>
          <p className={cl.logoDescText}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
      </div>
      <ul className={cl.links}>
        <li>
          <a className={cl.link} href="/">
            Услуги
          </a>
        </li>
        <li>
          <a className={cl.link} href="/">
            Виджеты
          </a>
        </li>
        <li>
          <a className={cl.link} href="/">
            Интеграции
          </a>
        </li>
        <li>
          <a className={cl.link} href="/">
            Кейсы
          </a>
        </li>
        <li>
          <a className={cl.link} href="/">
            Сертификаты
          </a>
        </li>
      </ul>
      <div className={cl.contacts}>
        <p className={cl.phone}>+7 555 555-55-55</p>
        <div className={cl.socials}>
          <a href="/">
            <img className={cl.social} src={tg} alt="telegram logo" />
          </a>
          <a href="/">
            <img className={cl.social} src={phone} alt="phone logo" />
          </a>
          <a href="/">
            <img className={cl.social} src={wa} alt="whatsapp logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
