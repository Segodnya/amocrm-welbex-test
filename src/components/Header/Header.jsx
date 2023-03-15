import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <header>
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
      </ul>
    </header>
  );
};

export default Header;
