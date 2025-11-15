import React from "react";

const Cover = () => {
  const coverItems = [
    "Доставка по всей России бесплатно",
    "Официально зарегистрированное юридическое лицо",
    " Оформление и оплата заказа как в магазине",
    "Только сертифицированные товары из каталога POIZON",
    "Доставили более 10 000 посылок за 3 года",
  ];
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto ">
        <div className="flex justify-between py-6.25 px-14">
          <div className="max-w-[600px] flex flex-col gap-5">
            <h1 className="mt-12.5 text-5xl/[62px] font-bold">
              Оригинальные товары от POIZON
            </h1>
            <ul className="flex flex-col gap-4">
              {coverItems.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-text text-lg font-medium list-disc list-inside"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="./src/assets/images/poizonBox.png" alt="poizonBox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
