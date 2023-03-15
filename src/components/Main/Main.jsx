import React from "react";
import cl from "./Main.module.css";

const Main = () => {
  return (
    <main className={cl.main}>
      <div className={cl.hero}>
        <h1 className={cl.heroTitle}>
          Зарабатывайте больше <span className={cl.accent}>с WELBEX</span>
        </h1>
        <p className={cl.heroText}>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={cl.lead}>
        <h2 className={cl.leadTitle}>
          Вместе с <span className={cl.accent}>бесплатной консультацией</span> мы дарим:
        </h2>
        <ul className={cl.leadList}>
          <li className={cl.leadItem}>Skype аудит</li>
          <li className={cl.leadItem}>Dashboard</li>
          <li className={cl.leadItem}>30 виджетов</li>
          <li className={cl.leadItem}>Месяц аmoCRM</li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
