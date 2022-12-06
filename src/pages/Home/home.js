import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ReactCountryFlag from "react-country-flag";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Modal from "react-modal";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    borderRadius: "10px",
  },
};
const exitModalStyles = {
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
const Home = () => {
  const API_token = "tx0s93aPdECd2na";
  const mobile = useMediaQuery("(max-width:800px)");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [exitIsOpen, setExitIsOpen] = useState(false);
  const [userid, setUserId] = useState(null);
  const [authData, setAuthData] = useState(null);
  const [balance, setBalance] = useState(null);
  const role = localStorage.getItem("role");
  const ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=33900");
  const send = (message, callback) => {
    waitForConnection(function () {
      ws.send(message);
      if (typeof callback !== "undefined") {
        callback();
      }
    }, 1000);
  };

  const waitForConnection = (callback, interval) => {
    if (ws.readyState === 1) {
      callback();
    } else {
      // optional: implement backoff for interval here
      setTimeout(function () {
        waitForConnection(callback, interval);
      }, interval);
    }
  };
  useEffect(() => {
    if (role) {
      ws.onopen = function (evt) {
        console.log("connected");
        send(JSON.stringify({ authorize: API_token }));
        // send(JSON.stringify({ balance: 1, account: "VRTC7108535" }));
      };
      ws.onmessage = (msg) => {
        var data = JSON.parse(msg.data);
        setAuthData(data);
      };
    }
  }, []);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeExitModal() {
    setExitIsOpen(false);
  }
  function login() {
    window.location.href = "/login";
  }
  return (
    <div className="w-screen h-screen bg-white flex">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="min-w-[250px] bg-[#2F303A] h-full flex flex-col items-center px-[45px] py-[35px]">
          <div className="w-full mb-[30px]">
            <div className="text-white text-[16px] leading-7 font-semibold font-['Inter']">
              ВЫБРАТЬ АККАУНТ
            </div>
          </div>
          <div className="w-full mb-[50px]">
            {role === null && (
              <button
                className="text-white text-[16px] leading-7 font-normal font-['Inter']"
                onClick={login}
              >
                <LogoutIcon style={{ width: "20px", height: "18px" }} />
                Логин
              </button>
            )}
            {role == "user" && (
              <>
                <button
                  className="text-white text-[16px] leading-7 font-normal font-['Inter'] flex gap-1 items-center hover:bg-black w-full"
                  onClick={() => {
                    setRealUser(false);
                    setVirtualUser(true);
                    closeModal();
                  }}
                >
                  <div className="w-[20px] h-[20px] bg-white"></div>
                  VRTC7099432 - USD
                </button>
                <button
                  className="text-white text-[16px] leading-7 font-normal font-['Inter'] flex gap-1 items-center hover:bg-black w-full"
                  onClick={() => {
                    setRealUser(true);
                    setVirtualUser(false);
                    closeModal();
                  }}
                >
                  <div className="w-[20px] h-[20px] bg-white"></div>
                  CR1123121 - USD
                </button>
              </>
            )}
            {role == "admin" && (
              <>
                <button
                  className="text-white text-[16px] leading-7 font-normal font-['Inter'] flex gap-1 items-center hover:bg-black w-full"
                  onClick={() => {
                    setRealUser(true);
                    closeModal();
                  }}
                >
                  <div className="w-[20px] h-[20px] bg-white"></div>
                  CR1123121 - USD
                </button>
              </>
            )}
          </div>
          <div className="w-full">
            <div className="text-white text-[16px] leading-7 font-semibold font-['Inter'] mb-[24px]">
              ВЫБРАТЬ ЯЗЫК
            </div>
            <div className="flex gap-2 mb-[10px]">
              <button className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                <ReactCountryFlag
                  countryCode="RU"
                  svg
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "100px",
                    marginRight: "10px",
                  }}
                  title="RU"
                />
                Русский
              </button>
            </div>
            <div className="flex gap-2 mb-[70px]">
              <button className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                <ReactCountryFlag
                  countryCode="UZ"
                  svg
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "100px",
                    marginRight: "10px",
                  }}
                  title="UZ"
                />
                O’zbek
              </button>
            </div>
            <div className="text-white text-[16px] leading-7 font-semibold font-['Inter'] mb-[24px]">
              ПОДДЕРЖКА
            </div>
            <button className="flex gap-2 mb-[10px] flex items-center">
              <div className="rounded-[20px] bg-white text-black flex items-center justify-center p-px">
                <TelegramIcon />
              </div>
              <div className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                Telegram
              </div>
            </button>
            <button className="flex gap-2 mb-[110px] flex items-center">
              <div className="rounded-[20px] bg-white text-black flex items-center justify-center p-px">
                <YouTubeIcon />
              </div>
              <div className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                Youtube
              </div>
            </button>
            {role == "admin" && (
              <button className="flex gap-2 mb-[10px] flex items-center w-full bg-[#8A079F] py-[5px] text-white">
                <AdminPanelSettingsIcon />
                <div className="text-white text-[22px] leading-7 font-semibold font-['Inter'] flex items-center">
                  Admin Only
                </div>
              </button>
            )}
            <button
              className="flex gap-2 mb-[10px] flex items-center text-white w-full hover:bg-[#077B9F] w-full bg-[#077B9F] py-[5px]"
              onClick={() => {
                setExitIsOpen(true);
              }}
            >
              <LogoutIcon />
              <div className="text-white text-[22px] leading-7 font-semibold font-['Inter'] flex items-center">
                Выход
              </div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={exitIsOpen}
        onRequestClose={closeExitModal}
        style={exitModalStyles}
        contentLabel="Example Modal"
      >
        <div
          className={
            !mobile ? "w-[700px] flex flex-col" : "flex flex-col w-[310px]"
          }
        >
          <div className="w-full flex flex-col mb-[13px]">
            <div className="flex justify-end">
              <button
                className="text-black text-[12px] leading-4 font-semibold font-['Normal']"
                onClick={closeExitModal}
              >
                Закрыть
              </button>
            </div>
            <div className="text-black text-[20px] leading-4 font-semibold font-['Normal']">
              Вы уверены, что хотите выйти?
            </div>
          </div>
          <div className="text-black text-[14px] leading-4 font-extralight font-['Normal'] opacity-80 mb-[30px] ">
            При этом будут удалены все настройки и токен, вы будете
            перенаправлены на страницу входа
          </div>
          <div className="flex items-center w-full justify-center gap-10">
            <button
              className={
                mobile
                  ? "py-[11px] px-[35px] bg-[#B44343] rounded-[20px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center"
                  : "py-[11px] px-[100px] bg-[#B44343] rounded-[20px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center"
              }
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
            >
              ДА
            </button>
            <button
              className={
                mobile
                  ? "py-[11px] px-[35px] bg-black rounded-[20px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center"
                  : "py-[11px] px-[100px] bg-black rounded-[20px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center"
              }
              onClick={() => {
                closeExitModal();
              }}
            >
              НЕТ
            </button>
          </div>
        </div>
      </Modal>
      {!mobile && (
        <div className="w-1/4 min-w-[330px] bg-[#2F303A] h-full flex flex-col items-center px-[45px] py-[35px]">
          <div className="w-full h-[100px] bg-[#D9D9D9] px-3 py-[6px] flex flex-row items-center justify-between mb-[35px]">
            <div>
              <img
                src="assets/png/home/logo.png"
                className="w-[66px] h-[66px]"
                alt="logo"
              />
              <div className="text-[#5B5B5B] text-[18px] leading-7 font-medium font-['Poppins']">
                TEZBOT
              </div>
            </div>
            <div className="h-[46px] bg-[#94BCEB] px-[15px] rounded-[20px] py-[11px] flex items-center justify-center">
              <div className="text-[#6D6D6D] text-[16px] leading-7 font-medium font-['Poppins']">
                @tezbot_trade
              </div>
            </div>
          </div>
          <div className="w-full mb-[30px]">
            <div className="text-white text-[16px] leading-7 font-semibold font-['Inter']">
              ВЫБРАТЬ АККАУНТ
            </div>
          </div>
          <div className="w-full mb-[50px]">
            {role === null && (
              <button
                className="text-white text-[16px] leading-7 font-normal font-['Inter']"
                onClick={login}
              >
                <LogoutIcon style={{ width: "20px", height: "18px" }} />
                Логин
              </button>
            )}
            {authData &&
              authData.authorize.account_list.map((item, id) => {
                return (
                  <button
                    className="text-white text-[16px] leading-7 font-normal font-['Inter'] flex gap-1 items-center hover:bg-black w-full"
                    key={id}
                    onClick={() => {
                      send(
                        JSON.stringify({ authorize: API_token })
                        // JSON.stringify({
                        //   balance: 1,
                        //   account: "VRTC7108535",
                        //   // authorize: API_token,
                        // })
                      );
                      ws.onmessage = (msg) => {
                        var data = JSON.parse(msg.data);
                        if (data["msg_type"] === "authorize") {
                          console.log(data);
                          send(
                            JSON.stringify({
                              balance: 1,
                              account: "VRTC7108535",
                              // authorize: API_token,
                            })
                          );
                          ws.onmessage = (msg) => {
                            let result = JSON.parse(msg.data);
                            console.log(result);
                            setBalance(result);
                          };
                        }
                      };
                      setUserId(id);
                    }}
                  >
                    <div className="w-[20px] h-[20px] bg-white"></div>
                    {item.loginid} - {item.currency}
                    {/* VRTC7099432 - USD */}
                  </button>
                );
              })}
            {role == "admin" && (
              <>
                <button
                  className="text-white text-[16px] leading-7 font-normal font-['Inter'] flex gap-1 items-center hover:bg-black w-full"
                  onClick={() => {
                    setRealUser(true);
                    setVirtualUser(false);
                  }}
                >
                  <div className="w-[20px] h-[20px] bg-white"></div>
                  CR1123121 - USD
                </button>
              </>
            )}
          </div>
          <div className="w-full">
            <div className="text-white text-[16px] leading-7 font-semibold font-['Inter'] mb-[24px]">
              ВЫБРАТЬ ЯЗЫК
            </div>
            <div className="flex gap-2 mb-[10px]">
              <button className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                <ReactCountryFlag
                  countryCode="RU"
                  svg
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "100px",
                    marginRight: "10px",
                  }}
                  title="RU"
                />
                Русский
              </button>
            </div>
            <div className="flex gap-2 mb-[70px]">
              <button className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                <ReactCountryFlag
                  countryCode="UZ"
                  svg
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "100px",
                    marginRight: "10px",
                  }}
                  title="UZ"
                />
                O’zbek
              </button>
            </div>
            <div className="text-white text-[16px] leading-7 font-semibold font-['Inter'] mb-[24px]">
              ПОДДЕРЖКА
            </div>
            <button className="flex gap-2 mb-[10px] flex items-center">
              <div className="rounded-[20px] bg-white text-black flex items-center justify-center p-px">
                <TelegramIcon />
              </div>
              <div className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                Telegram
              </div>
            </button>
            <button className="flex gap-2 mb-[110px] flex items-center">
              <div className="rounded-[20px] bg-white text-black flex items-center justify-center p-px">
                <YouTubeIcon />
              </div>
              <div className="text-white text-[16px] leading-7 font-normal font-['Inter']">
                Youtube
              </div>
            </button>
            {role == "admin" && (
              <button className="flex gap-2 mb-[10px] flex items-center w-full bg-[#8A079F] py-[5px]">
                <AdminPanelSettingsIcon />
                <div className="text-white text-[22px] leading-7 font-semibold font-['Inter'] flex items-center">
                  Admin Only
                </div>
              </button>
            )}
            <button
              className="flex gap-2 mb-[10px] flex items-center w-full bg-[#077B9F] py-[5px]"
              onClick={() => {
                setExitIsOpen(true);
              }}
            >
              <LogoutIcon />
              <div className="text-white text-[22px] leading-7 font-semibold font-['Inter'] flex items-center">
                Выход
              </div>
            </button>
            <button className="flex gap-2 mb-[10px] flex items-center ">
              <ArrowBackIosIcon />
              <div className="text-white text-[14px] leading-7 font-normal font-['Inter'] flex items-center">
                Скрыть
              </div>
            </button>
          </div>
        </div>
      )}
      <div className="h-full w-full px-[60px] py-[42px] flex flex-col grid overflow-y-auto max-[800px]:py-0 max-[800px]:px-0">
        <div className="bg-[#2F303A] w-full h-[85px] flex items-center rounded-[10px] mb-[82px] px-2">
          {mobile ? (
            <div>
              <button
                className="bg-white text-black rounded-[5px] h-[30px] w-[30px] font-bold flex items-center justify-center"
                onClick={openModal}
              >
                <DensityMediumIcon />
              </button>
            </div>
          ) : (
            ""
          )}
          {role === null && (
            <div className="w-full flex justify-center">
              <div className="text-white leading-7 text-[22px] font-bold font-['Inter'] max-[800px]:text-[17px]">
                Необходима авторизация
              </div>
            </div>
          )}
          {role === "user" && (
            <div className="w-full flex justify-between max-[800px]:justify-center">
              <div>
                <div className="flex gap-2">
                  <div className="text-white leading-7 text-[18px] font-normal font-['Inter']">
                    {userid !== null &&
                      authData.authorize.account_list[userid].loginid}
                  </div>
                  {authData &&
                    (authData.authorize.is_virtual ? (
                      <div className="bg-[#A37500] px-[15px] py-[5px] rounded-[10px] text-white leading-4 text-[12px] font-semibold font-['Inter'] flex items-center">
                        Виртуальный
                      </div>
                    ) : (
                      <div className="bg-[#067D0B] px-[15px] rounded-[10px] text-white leading-4 text-[12px] font-semibold font-['Inter'] flex items-center">
                        Реальный
                      </div>
                    ))}
                </div>
                <div className="text-white leading-7 text-[22px] font-semibold font-['Inter']">
                  {balance &&
                    `${balance.balance.balance} - ${balance.balance.currency}`}
                </div>
              </div>
              {!mobile ? (
                <div className="text-white leading-5 text-[18px] font-semibold font-['Inter'] flex items-center">
                  {authData && authData.authorize.email}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
          {role === "admin" && (
            <div className="w-full flex justify-between max-[800px]:justify-center">
              <div>
                <div className="flex gap-2">
                  <div className="text-white leading-7 text-[18px] font-normal font-['Inter']">
                    CR1123121
                  </div>
                  <div className="bg-[#067D0B] px-[15px] rounded-[10px] text-white leading-4 text-[12px] font-semibold font-['Inter'] flex items-center">
                    Реальный
                  </div>
                </div>
                <div className="text-white leading-7 text-[22px] font-semibold font-['Inter']">
                  0.00 USD
                </div>
              </div>
              {!mobile ? (
                <div className="text-white leading-5 text-[18px] font-semibold font-['Inter'] flex items-center">
                  tashtrader@yandex.ru
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className="max-[800px]:px-5">
          <div className="bg-[#00A652] w-full h-[100px] px-7 flex items-center justify-between rounded-[10px] mb-[50px] max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:gap-2 max-[1100px]:py-2 max-[1100px]:h-fit">
            <div className="text-white leading-7 text-[24px] font-medium font-['Inter']">
              #1 БОТ НА БИНАРНЫЕ ОПЦИОНЫ, ВАЛЮТЫ И СЫРЬЁ
            </div>
            <button className="bg-[#ED1B24] px-[6px] py-2 text-white leading-7 text-[22px] font-bold font-['Inter'] rounded-[10px]">
              ЗАПУСТИТЬ
            </button>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[400px] px-7 flex items-center justify-center rounded-[10px] mb-[40px] ">
            <div className="text-[#4D1ED2] leading-7 text-[24px] font-medium font-['Inter']">
              #1 БОТ НА БИНАРНЫЕ ОПЦИОНЫ, ВАЛЮТЫ И СЫРЬЁ
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[100px] px-7 flex items-center justify-center rounded-[10px] mb-[40px] max-[1100px]:h-fit">
            <div className="text-[#4D1ED2] leading-7 text-[24px] font-medium font-['Inter']">
              Это блок для следующего бота. Необходимо обеспечить возможность
              добавлять такие блоки далее вниз
            </div>
          </div>
          <div className="w-full px-7 flex flex-col  justify-start rounded-[10px] mb-[40px]">
            <div className="text-black leading-7 text-[18px] font-semibold font-['Inter']">
              Disclamer
            </div>
            <div className="text-black leading-7 text-[18px] font-normal font-['Inter']">
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
export default Home;
