import React, { useEffect, useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LabTabs from "../../components/Tab/labtab";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CustomDrawer from "../../components/Drawer/drawer";
import Modal from "react-modal";
import CheckIcon from "@mui/icons-material/Check";
import StopIcon from "@mui/icons-material/Stop";
import "./bot.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");
const Bot = () => {
  const [number, setNumber] = useState(1);
  const mobile = useMediaQuery("(max-width:800px)");
  const [settingOpen, setSettingOpen] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [processSuccess, setProcessSuccess] = useState(false);
  const [processStatus, setProcessStatus] = useState("success");
  const [play, setPlay] = useState(false);

  function openSettingModal() {
    setSettingOpen(true);
  }
  function closeSettingModal() {
    setSettingOpen(false);
  }
  function settingSave() {
    closeSettingModal();
    openSaveModal();
  }
  function openSaveModal() {
    setSaveModal(true);
  }
  function closeSaveModal() {
    setSaveModal(false);
  }
  function openProcessModal() {
    setProcessSuccess(true);
  }
  function closeProcessModal() {
    setProcessSuccess(false);
  }
  function handleSettingStatus() {}
  function handleStatus() {}
  return (
    <div className="w-screen h-screen bg-[#1E1E1E] flex px-[70px] py-[40px] grid overflow-y-auto max-[800px]:px-[30px]">
      <Modal
        isOpen={settingOpen}
        onRequestClose={closeSettingModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[700px] flex flex-col">
          <div className="w-full flex flex-col mb-[13px]">
            <div className="flex justify-start">
              <button
                className="text-black text-[12px] leading-4 font-semibold font-['Normal']"
                onClick={closeSettingModal}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col mb-[25px]">
            <div className="leading-[24px] text-[20px] font-light font-['Inter'] mb-1">
              Начальная ставка ($) :
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-3 py-1 rounded-[5px]"
              value="0.35"
              onChange={handleSettingStatus}
            />
          </div>
          <div className="w-full flex flex-col mb-[25px]">
            <div className="leading-[24px] text-[20px] font-light font-['Inter'] mb-1">
              Цель - Take Profit ($) :
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-3 py-1 rounded-[5px]"
              value="35"
              onChange={handleSettingStatus}
            />
          </div>
          <div className="w-full flex flex-col mb-[25px]">
            <div className="leading-[24px] text-[20px] font-light font-['Inter'] mb-1">
              Стоп - Stop Loss ($) :
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-3 py-1 rounded-[5px]"
              value="100"
              onChange={handleSettingStatus}
            />
          </div>
          <div className="w-full flex flex-col mb-[25px]">
            <div className="leading-[24px] text-[20px] font-light font-['Inter'] mb-1">
              Рынок :
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-3 py-1 rounded-[5px]"
              disabled
              value="Volatility Index 100"
              onChange={handleSettingStatus}
            />
          </div>
          <div className="w-full flex flex-col mb-[25px]">
            <div className="leading-[24px] text-[20px] font-light font-['Inter'] mb-1">
              Режим торговли :
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-3 py-1 rounded-[5px]"
              disabled
              onChange={handleSettingStatus}
              value="Only Rise"
            />
          </div>
          <div className="w-full flex flex-col mb-[25px]">
            <div className="leading-[24px] text-[20px] font-light font-['Inter'] mb-1">
              Продолжительность :
            </div>
            <input
              type="text"
              className="border-slate-400 border-solid border-[1px] w-full px-3 py-1 rounded-[5px]"
              value="1 tick"
              disabled
              onChange={handleSettingStatus}
            />
          </div>
          <div className="flex items-center w-full justify-center gap-10">
            <button
              className="py-[11px] px-[35px] bg-[#4574EC] rounded-[4px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center w-full"
              onClick={() => {
                settingSave();
              }}
            >
              СОХРАНИТЬ
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={saveModal}
        onRequestClose={closeSaveModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[400px] h-[300px] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col mb-[25px]">
            <div className="w-full text-center text-[#37B587]">
              <CheckIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="leading-[60px] text-[50px] font-normal font-['Inter'] mb-5 text-center">
              Настройки
            </div>
            <div className="leading-[29px] text-[24px] font-normal font-['Inter'] mb-1 text-center">
              Ваши настройки сохранены!
            </div>
          </div>
          <div className="flex items-center w-full justify-center">
            <button
              className="py-[11px] px-[35px] bg-[#4574EC] rounded-[4px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center"
              onClick={closeSaveModal}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={processSuccess}
        onRequestClose={closeProcessModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[400px] h-[300px] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col mb-[25px]">
            <div className="w-full text-center">
              {processStatus == "success" ? (
                <CheckIcon sx={{ fontSize: 60, color: "#37B587" }} />
              ) : (
                <CloseIcon sx={{ fontSize: 60, color: "red" }} />
              )}
            </div>
            <div className="leading-[60px] text-[50px] font-normal font-['Inter'] mb-5 text-center">
              {processStatus == "success" && "Поздравляем!"}
              {processStatus == "unconnected" && "Потеряно соединение"}
              {processStatus == "error" && "Увы:("}
            </div>
            <div className="leading-[29px] text-[24px] font-normal font-['Inter'] mb-1 text-center">
              {processStatus == "success" && "Ваша цель $5.00 была достигнута!"}
              {processStatus == "error" && "Сработал стоп-лосс -$10.00"}
              {processStatus == "unconnected" &&
                "Проверьте Интернет подключение"}
            </div>
          </div>
          <div className="flex items-center w-full justify-center">
            <button
              className="py-[11px] px-[35px] bg-[#4574EC] rounded-[4px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center"
              onClick={closeProcessModal}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex w-full flex-col">
        <div className="header w-full flex justify-between h-[50px] mb-[50px] max-[1100px]:mb-[30px]">
          {!mobile ? (
            <>
              <div className="text-white leading-7 text-[22px] font-bold font-['Inter']">
                К списку ботов
              </div>
              <div className="flex gap-10">
                <button className="text-white leading-7 text-[18px] font-normal font-['Inter']">
                  Инструкции
                </button>
                <button className="text-white leading-7 text-[18px] font-normal font-['Inter']">
                  Создать токен
                </button>
              </div>
              <button className="px-2 py-1 rounded-[20px] bg-[#94BCEB] flex gap-2">
                <div className="w-[25px] h-[25px] flex items-center bg-white rounded-[20px]">
                  <TelegramIcon />
                </div>
                <div className="text-[#6D6D6D] leading-7 text-[16px] font-medium font-['Inter']">
                  tezbot_trade
                </div>
              </button>
            </>
          ) : (
            <>
              <div className="text-white leading-7 text-[22px] font-bold font-['Inter']">
                На главную
              </div>
              <CustomDrawer />
            </>
          )}
        </div>
        <div className="body w-full mb-[60px] max-[1100px]:mb-[0]">
          <div className="w-full flex h-[60px] gap-8 max-[1100px]:flex-col max-[1100px]:h-fit max-[1100px]:gap-4 mb-[35px] max-[1100px]:mb-[20px]">
            <div className="bg-[#187DF3] rounded-[10px] w-1/4 py-[6px] flex flex-col items-center justify-center max-[1100px]:w-full">
              <div className="text-white leading-7 text-[20px] font-semibold font-['Inter']">
                $10 000.00
              </div>
              <div className="text-white leading-7 text-[20px] font-normal font-['Inter']">
                Ваш баланс
              </div>
            </div>
            <div className="bg-[#B78400] rounded-[10px] w-1/4 py-[6px] flex flex-col items-center justify-center max-[1100px]:w-full">
              <div className="text-white leading-7 text-[20px] font-semibold font-['Inter']">
                $0.00 (0.00%)
              </div>
              <div className="text-white leading-7 text-[20px] font-normal font-['Inter']">
                Прибыль / Убыток
              </div>
            </div>
            <div className="bg-[#D9D9D9] rounded-[10px] w-1/4 px-[20px] py-[6px] flex items-center justify-between max-[1100px]:w-full">
              <div className="flex items-center flex-col">
                <div className="text-[#00A652] leading-7 text-[20px] font-semibold font-['Inter']">
                  $35.00
                </div>
                <div className="text-[#00A652] leading-7 text-[20px] font-normal font-['Inter']">
                  Цель (TP)
                </div>
              </div>
              <div className="flex items-center flex-col justify-center">
                <div className="text-[#ED1B24] leading-7 text-[20px] font-semibold font-['Inter']">
                  -$100.00
                </div>
                <div className="text-[#ED1B24] leading-7 text-[20px] font-normal font-['Inter']">
                  Стоп (SL)
                </div>
              </div>
            </div>
            <div className="bg-[#984848] rounded-[10px] w-1/4 py-[6px] flex flex-col items-center justify-center max-[1100px]:w-full">
              <div className="text-white leading-7 text-[20px] font-semibold font-['Inter']">
                $0.35
              </div>
              <div className="text-white leading-7 text-[20px] font-normal font-['Inter']">
                Макс. колебания баланса
              </div>
            </div>
          </div>
          <div className="w-full flex h-[50px] gap-8 max-[1100px]:flex-col max-[1100px]:h-fit max-[1100px]:gap-4 mb-[60px] max-[1100px]:mb-[30px]">
            <div className="rounded-[10px] w-1/4 py-[6px] flex flex-col items-start max-[1100px]:w-full">
              <div
                className="pl-1 text-white leading-[19px] text-[16px] font-normal font-['Inter']"
                id={play ? "disabled" : null}
              >
                Режим торговли
              </div>
              <select
                name="cars"
                className="bg-[#1E1E1E] w-full"
                id={play ? "disabled" : null}
              >
                <option value="volvo" className="font-normal">
                  Only Rise
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="rounded-[10px] w-1/4 py-[6px] flex flex-col items-start max-[1100px]:w-full">
              <div
                className="pl-1 text-white leading-[19px] text-[16px] font-normal font-['Inter']"
                id={play ? "disabled" : null}
              >
                Рынок
              </div>
              <select
                name="cars"
                className="bg-[#1E1E1E] w-full"
                id={play ? "disabled" : null}
              >
                <option value="volvo" className="font-normal">
                  Volatility 100 Index
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="rounded-[10px] w-1/4 py-[6px] flex flex-col items-start max-[1100px]:w-full">
              <div
                className="pl-1 text-white leading-[19px] text-[16px] font-normal font-['Inter']"
                id={play ? "disabled" : null}
              >
                Продолжительность
              </div>
              <select
                name="cars"
                className="bg-[#1E1E1E] w-full"
                id={play ? "disabled" : null}
              >
                <option value="volvo" className="font-normal">
                  Тики
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="p-0 rounded-[10px] w-1/4 flex items-start max-[1100px]:w-full flex items-center">
              <div
                className="bg-[#828389] w-full rounded-[10px] flex items-center"
                id={play ? "disabled" : null}
              >
                <button
                  className="pl-2 -mt-2 text-white leading-[19px] text-[40px] font-thin font-['Inter'] flex justify-center items-center"
                  onClick={() => {
                    setNumber((number) => number - 1);
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-full h-full bg-[#828389] text-center text-[30px]"
                  value={number}
                  onChange={handleStatus}
                />
                <button
                  className="pl-2 text-white leading-[19px] text-[25px] font-extrabold font-['Inter'] flex justify-center items-center pr-2"
                  onClick={() => {
                    setNumber((number) => number + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex h-[45px] justify-center gap-8 max-[1100px]:h-fit max-[1100px]:gap-4 max-[1100px]:flex-col items-center">
            {!play ? (
              <>
                <button
                  className="px-[15px] py-[13px] bg-[#4A5FD3] rounded-[6px] text-white leading-[19px] text-[16px] font-normal font-['Inter'] flex items-center gap-2 w-[170px]"
                  onClick={openSettingModal}
                >
                  <SettingsSuggestIcon /> НАСТРОЙКИ
                </button>
                <button
                  className="px-[15px] py-[13px] bg-[#40E13D] rounded-[6px] text-white leading-[19px] text-[16px] font-normal font-['Inter'] flex items-center gap-2 w-[170px]"
                  onClick={() => {
                    setPlay(true);
                  }}
                >
                  <PlayArrowIcon /> ЗАПУСТИТЬ
                </button>
              </>
            ) : (
              <button
                className="px-[15px] py-[13px] bg-[#E41B1B] rounded-[6px] text-white leading-[19px] text-[16px] font-normal font-['Inter'] flex items-center gap-2 w-[170px]"
                onClick={() => {
                  setPlay(false);
                  openProcessModal();
                }}
              >
                <StopIcon /> ОСТАНОВИТЬ
              </button>
            )}
          </div>
        </div>
        <div className="w-full text-white max-[1100px]:hidden">
          <div className="bg-white w-full h-[50px] rounded-t-[10px] leading-[29px] font-light text-[24px] text-black flex items-center px-5 font-['Inter']">
            Торговая активность
          </div>
          <div className="w-full mb-2">
            <LabTabs />
          </div>
          <div className="w-full px-1 flex flex-col">
            <div className="leading-[15px] text-[#DBDBDB] text-[12px] text-black font-semibold font-['Inter']">
              Disclamer
            </div>
            <div className="leading-[15px] text-[#DBDBDB] text-[12px] text-black font-normal font-['Inter']">
              Deriv предлагает сложные производные инструменты, такие как
              опционы и контракты на разницу («CFD»). Эти продукты могут
              подходить не для всех клиентов, и торговля ими подвергает вас
              риску. Пожалуйста, убедитесь, что вы понимаете следующие риски,
              прежде чем торговать продуктами Deriv: а) вы можете потерять часть
              или все деньги, которые вы вложили в сделку, б) если ваша сделка
              включает конвертацию валюты, обменные курсы повлияют на вашу
              прибыль или убыток. Вы никогда не должны торговать на заемные
              деньги или на деньги, которые вы не можете позволить себе
              потерять.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bot;
