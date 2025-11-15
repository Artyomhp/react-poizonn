import React from "react";

const Header = () => {
  const menuItem = [
    "Одежда",
    "Обувь",
    "Аксессуары",
    "Калькулятор стоимости",
    "Помощь",
    "Подобрать размер",
  ];
  return (
    <div className="mt-3.75 border-b border-border bg-white/50">
      <div className="container mx-auto  ">
        <div className="flex items-center justify-between py-3.75">
          <div className="flex items-center mr-18.75">
            <img
              width={50}
              height={35}
              src="./src/assets/images/logo.svg"
              alt="logo"
            />
          </div>
          <ul className="flex gap-15 mr-auto">
            {menuItem.map((item, index) => (
              <li key={index} className="text-lg font-normal text-gray-text">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-10 ml-auto">
            <div className="flex items-center">
              <img src="./src/assets/images/icons/cart.svg" alt="cart" />
            </div>
            <div className="px-5.75 py-4.25 flex items-center gap-2.5 rounded-[15px] bg-btn-tg font-inter">
              <div>
                <img
                  className="w-7.5 h-5"
                  src="./src/assets/images/logo-white.svg"
                  alt="logo"
                />
              </div>
              <div>
                <div className="flex flex-col ">
                  <span className="text-base text-white font-semibold">
                    Наш телеграм канал
                  </span>
                  <span className="text-[13px] text-white">
                    Telegram web app
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
