import React, { useState } from "react";
import "./general_setting.scss";
const General_Setting = () => {
  function handleStatus() {}
  function settingSave() {}
  const [status, setStatus] = useState("disabled");
  return (
    <div className="w-4/5 h-full bg-[#EFEFEF] px-[60px] py-[40px]">
      <div className="w-full bg-[#2F303A] px-[140px] py-[20px] rounded-[10px] text-white leading-[29px] text-[24px] font-[500] font-['Inter'] text-center mb-[30px]">
        #1 БОТ НА БИНАРНЫЕ ОПЦИОНЫ, ВАЛЮТЫ И СЫРЬЁ{" "}
      </div>
      <div className="w-full bg-white rounded-[10px] px-[15px] pt-[55px] content">
        <div className="h-5/6 overflow-y-auto">
          <div className="w-full mb-[30px]">
            <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
              Название
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-8 py-[10px] rounded-[5px] text-black bg-[#F3F3F3]"
              value="35"
              id={status == "disabled" ? "disabled" : ""}
              onChange={handleStatus}
            />
          </div>
          <div className="w-full mb-[30px]">
            <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
              Ставка по умолчанию
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-8 py-[10px] rounded-[5px] text-black bg-[#F3F3F3]"
              value="$0.35"
              id={status == "disabled" ? "disabled" : ""}
              onChange={handleStatus}
            />
          </div>
          <div className="w-full mb-[30px]">
            <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
              Цель (TP) по умолчанию
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-8 py-[10px] rounded-[5px] text-black bg-[#F3F3F3]"
              value="$35.00"
              id={status == "disabled" ? "disabled" : ""}
              onChange={handleStatus}
            />
          </div>
          <div className="w-full mb-[30px]">
            <div className="text-black leading-[24px] text-[20px] font-[500] font-['Inter'] mb-[10px]">
              Стоп (SL) по умолчанию
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-8 py-[10px] rounded-[5px] text-black bg-[#F3F3F3]"
              value="-$100.00"
              id={status == "disabled" ? "disabled" : ""}
              onChange={handleStatus}
            />
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
export default General_Setting;
