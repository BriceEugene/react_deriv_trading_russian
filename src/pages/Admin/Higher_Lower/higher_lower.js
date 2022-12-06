import React, { useState } from "react";
import "./higher_lower.scss";
import Select_List from "../../../components/Select_List/select_list";
const Higher_Lower = () => {
  let first_select_items = [
    "BCE",
    "Volatility 10 (1s) Index",
    "Volatility 10 Index",
    "Volatility 25 (1s) Index",
    "Volatility 25 Index",
    "Volatility 50 (1s) Index",
    "Volatility 50 Index",
  ];
  let second_select_items = [
    "Все доступны",
    "Только 1",
    "Только 2",
    "Только 3",
    "Только 4",
    "Только 5",
    "Только 6",
  ];
  function handleStatus() {}
  function settingSave() {}
  const [status, setStatus] = useState("disabled");
  return (
    <div className="w-4/5 h-full bg-[#EFEFEF] px-[60px] py-[40px]">
      <div className="w-full bg-[#2F303A] px-[140px] py-[20px] rounded-[10px] text-white leading-[29px] text-[24px] font-[500] font-['Inter'] text-center mb-[30px]">
        #1 БОТ НА БИНАРНЫЕ ОПЦИОНЫ, ВАЛЮТЫ И СЫРЬЁ
      </div>
      <div className="w-full bg-white rounded-[10px] px-[20px] pt-[15px] content">
        <div className="h-5/6 overflow-y-auto">
          <div className="text-[#00A652] leading-[24px] text-[20px] font-[600] font-['Inter'] mb-[10px] text-center">
            Настройки режима “Higher / Lower” (Выше / Ниже)
          </div>
          <div className="h-full flex">
            <div className="w-1/2 flex flex-col">
              <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
                Доступные рынки - по группам
              </div>
              <div className="pl-[45px] pr-[180px]">
                <div className="text-black leading-[24px] text-[20px] font-[300] font-['Inter'] mb-[7px]">
                  Derived
                </div>
                <div className="mb-[7px] pl-[15px] flex items-center justify-between">
                  <span className="text-black leading-[24px] text-[20px] font-[300] font-['Inter']">
                    Baskets
                  </span>
                  <input
                    type="checkbox"
                    id="baskets"
                    name="baskets"
                    value="baskets"
                  />
                </div>
                <div className="mb-[7px] pl-[15px] flex items-center justify-between">
                  <span className="text-black leading-[24px] text-[20px] font-[300] font-['Inter']">
                    Synthetics
                  </span>
                  <input
                    type="checkbox"
                    id="synthetics"
                    name="synthetics"
                    value="synthetics"
                  />
                </div>
                <div className="mb-[7px] flex items-center justify-between">
                  <span className="text-black leading-[24px] text-[20px] font-[300] font-['Inter']">
                    Forex
                  </span>
                  <input
                    type="checkbox"
                    id="forex"
                    name="forex"
                    value="forex"
                  />
                </div>
                <div className="mb-[7px] flex items-center justify-between">
                  <span className="text-black leading-[24px] text-[20px] font-[300] font-['Inter']">
                    Stock Indices
                  </span>
                  <input
                    type="checkbox"
                    id="stock_indices"
                    name="stock_indices"
                    value="stock_indices"
                  />
                </div>
                <div className="mb-[7px] flex items-center justify-between">
                  <span className="text-black leading-[24px] text-[20px] font-[300] font-['Inter']">
                    Cryptocurrencies
                  </span>
                  <input
                    type="checkbox"
                    id="cryptocurrencies"
                    name="cryptocurrencies"
                    value="cryptocurrencies"
                  />
                </div>
                <div className="mb-[7px] flex items-center justify-between">
                  <span className="text-black leading-[24px] text-[20px] font-[300] font-['Inter']">
                    Commodities
                  </span>
                  <input
                    type="checkbox"
                    id="commodities"
                    name="commodities"
                    value="commodities"
                  />
                </div>
              </div>
              <div className="w-full mb-[30px] pr-[100px]">
                <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
                  Барьер
                </div>
                <input
                  type="text"
                  id={status == "disabled" ? "disabled" : ""}
                  className="border-slate-400 border-solid border-[1px] w-full px-8 py-[10px] rounded-[5px] text-black"
                  value="Равен входной котировке"
                  onChange={handleStatus}
                />
              </div>
              <div className="w-full mb-[30px] pr-[100px]">
                <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
                  Мартингейл мультипликатор, xN
                </div>
                <input
                  type="text"
                  id={status == "disabled" ? "disabled" : ""}
                  className="border-slate-400 border-solid border-[1px] w-full px-8 py-[10px] rounded-[5px] text-black"
                  value="6"
                  onChange={handleStatus}
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="w-full mb-[30px]">
                <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
                  Доступные рынки - выбор
                </div>
                <div
                  className="text-black h-[200px] overflow-y-auto"
                  id={status == "disabled" ? "disabled" : ""}
                >
                  <Select_List items={first_select_items} />
                </div>
              </div>
              <div className="w-full mb-[30px]">
                <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
                  Ограничения по тикам
                </div>
                <div
                  className="text-black h-[200px] overflow-y-auto"
                  id={status == "disabled" ? "disabled" : ""}
                >
                  <Select_List items={second_select_items} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full justify-center">
          {status == "disabled" ? (
            <button
              className="py-[15px] bg-[#4574EC] rounded-[4px] text-white text-[20px] leading-[24px] font-[600] font-['Inter'] mt-3 flex justify-center w-full"
              onClick={() => {
                setStatus("enabled");
              }}
            >
              ИЗМЕНИТЬ
            </button>
          ) : (
            <button
              className="py-[15px] bg-[#4574EC] rounded-[4px] text-white text-[20px] leading-[24px] font-[600] font-['Inter'] mt-3 flex justify-center w-full"
              onClick={() => {
                settingSave();
                setStatus("disabled");
              }}
            >
              СОХРАНИТЬ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Higher_Lower;
