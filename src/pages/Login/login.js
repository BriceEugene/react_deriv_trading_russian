import React, { useState } from "react";
import "./login.scss";
import { useMediaQuery } from "@mui/material";
import { Store } from "react-notifications-component";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  //
};
Modal.setAppElement("#root");
const Login = () => {
  const [token, setToken] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const mobile = useMediaQuery("(max-width:850px)");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function validateToken(token) {
    if (token == "admin") {
      localStorage.setItem("role", "admin");
      window.location.href = "/home";
    } else if (token == "user") {
      localStorage.setItem("role", "user");
      window.location.href = "/home";
    } else {
      Store.addNotification({
        title: "Warning!",
        message: "Please enter valid token!",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
          showIcon: true,
        },
      });
    }
  }
  return (
    <div className="h-full w-full bg-[#1E1E1E] flex flex-row justify-center items-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
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
                onClick={closeModal}
              >
                Закрыть
              </button>
            </div>
            <div className="text-black text-[20px] leading-4 font-semibold font-['Normal']">
              Уже есть аккаунт?
            </div>
          </div>
          <div className="text-black text-[14px] leading-4 font-extralight font-['Normal'] opacity-80 mb-[30px] ">
            У вас имеется существующий аккаунт в Deriv.com?
          </div>
          <div className="flex items-center gap-2 mb-[15px]">
            <input type="checkbox" name="checkbox" />
            <div className="text-black text-[12px] leading-4 font-semibold font-['Normal']">
              Больше не показывать это сообщение
            </div>
          </div>
          <div
            className={
              !mobile
                ? "flex items-center w-full justify-center gap-10 "
                : "flex flex-col items-center w-full justify-center"
            }
          >
            <button className="py-[11px] px-[35px] bg-[#B44343] rounded-[20px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center">
              НЕТ, СОЗДАТЬ АККАУНТ
            </button>
            <button className="py-[11px] px-[40px] bg-black rounded-[20px] text-white text-[14px] leading-4 font-semibold font-['Normal'] mt-3 flex justify-center">
              ДА, АВТОРИЗОВАТЬСЯ
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex bg-white w-[800px] h-[550px] rounded-[10px] py-[25px] max-[850px]:w-11/12">
        {!mobile ? (
          <div className="flex w-1/2 h-full px-[53px] pt-[40px] pb-[15px] flex flex-col items-center border-r-2 border-[#E1E1E1]">
            <div className="header mb-[30px]">
              Нажмите, чтобы начать автоматический трейдинг
            </div>
            <div className="logo w-[250px] h-[250px]">
              <img src="assets/png/logo.png" alt="logo" />
            </div>
            <div className="footer px-5 mb-[12px]">
              Бесплатные автоматизированные торговые боты для Deriv.com Нажмите
              здесь, чтобы начать
            </div>
            <div className="w-full">
              {/* <button className="sign_up" onClick={openModal}>
                НЕТ ТОКЕНА? СОЗДАТЬ АККАУНТ
              </button> */}
              <button
                className="py-[11px] bg-[#B44343] rounded-[20px] text-white text-sm leading-4 font-semibold font-['Normal'] mt-3 flex justify-center w-full"
                onClick={openModal}
              >
                НЕТ ТОКЕНА? СОЗДАТЬ АККАУНТ
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex w-1/2 h-full px-[53px] pt-[5px] pb-[15px] flex-col items-center max-[850px]:w-full max-[850px]:px-[20px]">
          <div className="w-[115px] h-[115px] mb-[44px] max-[850px]:mb-[20px]">
            <img src="assets/png/binary_com.png" alt="binary_com" />
          </div>
          <div className="flex flex-row items-center gap-2 mb-[40px] max-[850px]:mb-[20px]">
            <img
              src="assets/png/YouTube.png"
              className="w-[35px] h-[35px]"
              alt="YouTube"
            />
            <img
              src="assets/png/telegram.png"
              className="w-[35px] h-[35px]"
              alt="telegram"
            />
          </div>
          <div className="text-black text-xs leading-4 font-semibold font-['Normal']">
            Авторизоваться через аккаунт
          </div>
          <div className="w-full">
            <button className="py-[11px] bg-black rounded-[10px] flex justify-center w-full">
              <img
                className="h-[17px] w-25"
                src="assets/png/logo_deriv_btn.png"
                alt="deriv_btn"
              />
            </button>
          </div>
          <div className="text-black text-sm leading-4 font-semibold font-['Normal'] my-[30px]">
            ИЛИ
          </div>
          <div className="w-full flex">
            <div className="text-black text-xs leading-4 font-semibold font-['Normal'] flex">
              Ввести API токен
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-[300px] h-[40px] bg-[#ECECEC] text-black max-[850px]:w-full"
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <button
              className="py-[11px] bg-black rounded-[20px] text-white text-sm leading-4 font-normal font-['Normal'] mt-3 flex justify-center w-full"
              onClick={() => {
                validateToken(token);
              }}
            >
              ВОЙТИ
            </button>
          </div>
          {mobile ? (
            <div className="w-full">
              <button
                className="py-[11px] bg-[#B44343] rounded-[20px] text-white text-sm leading-4 font-semibold font-['Normal'] mt-3 flex justify-center w-full"
                onClick={openModal}
              >
                НЕТ ТОКЕНА? СОЗДАТЬ АККАУНТ
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
