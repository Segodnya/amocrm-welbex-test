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
          <li className={cl.leadItemMob}>Skype аудит</li>
          <li className={cl.leadItemMob}>Dashboard</li>
          <li className={cl.leadItemMob}>30 виджетов</li>
          <li className={cl.leadItemMob}>Месяц аmoCRM</li>
          <li className={cl.leadItemPC}>
            <h3>Виджеты</h3>
            <p>30 готовых решений</p>
          </li>
          <li className={cl.leadItemPC}>
            <h3>Dashboard</h3>
            <p>с показателями вашего бизнеса</p>
          </li>
          <li className={cl.leadItemPC}>
            <h3>Skype Аудит</h3>
            <p>отдела продаж и&nbsp;CRM системы</p>
          </li>
          <li className={cl.leadItemPC}>
            <h3>35 дней</h3>
            <p>использования CRM</p>
          </li>
        </ul>
        <button>Получить консультацию</button>
      </div>
    </main>
  );
};

export default Main;
