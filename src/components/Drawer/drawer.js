import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import TelegramIcon from "@mui/icons-material/Telegram";

const CustomDrawer = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const list = () => (
    <div className="w-[300px] px-[22px] py-[22px] h-[500px]">
      <div className="w-full flex justify-end h-[30px] mb-[20px]">
        <button
          className="w-[18px] h-[18px] flex justify-center"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="w-full mb-[20px]">
        <button
          className="flex justify-center leading-[24px] text-[20px] font-[400] font-['Inter']"
          onClick={toggleDrawer}
        >
          Инструкции
        </button>
      </div>
      <div className="w-full mb-[20px]">
        <button
          className="flex justify-center leading-[24px] text-[20px] font-[400] font-['Inter']"
          onClick={toggleDrawer}
        >
          Создать токен
        </button>
      </div>
      <button
        className="px-2 py-1 rounded-[20px] bg-[#94BCEB] flex gap-2 w-fit"
        onClick={toggleDrawer}
      >
        <div className="w-[25px] h-[25px] flex items-center bg-white rounded-[20px]">
          <TelegramIcon />
        </div>
        <div className="text-[#6D6D6D] leading-7 text-[16px] font-medium font-['Inter']">
          tezbot_trade
        </div>
      </button>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <button onClick={toggleDrawer} className="text-white">
          <DensityMediumIcon />
        </button>
        <SwipeableDrawer
          anchor={"right"}
          open={drawer}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
export default CustomDrawer;
