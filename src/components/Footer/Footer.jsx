import React from "react";
import cl from "./Footer.module.css";
import tg from "../../images/tg.svg";
import phone from "../../images/phone.svg";
import wa from "../../images/wa.svg";

const Footer = () => {
  return (
    <footer>
      <div className={cl.footerBlock}>
        <h2>О компании</h2>
        <ul>
          <li>
            <a href="/">Партнёрская программа</a>
          </li>
          <li>
            <a href="/">Вакансии</a>
          </li>
        </ul>
      </div>
      <div className={cl.footerBlock}>
        <h2>Меню</h2>
        <ul className={cl.twoColumns}>
          <li>
            <a href="/">Расчёт стоимости</a>
          </li>
          <li>
            <a href="/">Благодарность клиентов</a>
          </li>
          <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Кейсы</a>
          </li>
          <li>
            <a href="/">Виджеты</a>
          </li>
          <li>
            <a href="/">Сертификаты</a>
          </li>
          <li>
            <a href="/">Интеграции</a>
          </li>
          <li>
            <a href="/">Блог на Youtube</a>
          </li>
          <li>
            <a href="/">Наши клиенты</a>
          </li>
          <li>
            <a href="/">Вопрос / Ответ</a>
          </li>
        </ul>
      </div>
      <div className={cl.footerBlock}>
        <h2>Контакты</h2>
        <ul>
          <li className={cl.phone}>+7 555 555-55-55</li>
          <li>
            <div>
              <a href="/">
                <img src={tg} alt="telegram icon" />
              </a>
              <a href="/">
                <img src={phone} alt="phone icon" />
              </a>
              <a href="/">
                <img src={wa} alt="wa icon" />
              </a>
            </div>
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
      </div>
      <div className={cl.copyright}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;
