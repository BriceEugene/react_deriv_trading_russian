import React from "react";
import TreeViewer from "../../components/TreeViewer";
// import { Outlet } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Toolbar = ({ setPage }) => {
  return (
    <div className="w-1/5 min-w-[300px] bg-[#2F303A] h-full px-10 pt-[70px]">
      <div className="pl-1 text-white leading-[33px] text-[22px] font-[500] font-['Poppins'] w-full text-center mb-[115px]">
        На главную
      </div>
      <div className="pl-1 text-white leading-[19px] text-[16px] font-[600] font-['Poppins'] w-full mb-[20px]">
        БОТЫ
      </div>
      <TreeViewer setPage={setPage} />
      <button className="bg-[#8A079F] w-full py-[13px]  text-center flex items-center justify-center gap-2">
        <AddCircleOutlineIcon />
        <div className="font-[600] text-[22px] leading-[27px] font-['Inter']">
          Создать новый
        </div>
      </button>
    </div>
  );
};
export default Toolbar;
