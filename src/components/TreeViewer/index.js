import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import StopIcon from "@mui/icons-material/Stop";
const TreeViewer = ({ setPage }) => {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        height: "500px",
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      <TreeItem
        nodeId="first_view"
        label={
          <div className="text-white leading-[19px] text-[16px] font-[700] font-['Inter']">
            Бот №1
          </div>
        }
        sx={{ marginBottom: "25px" }}
      >
        <TreeItem
          nodeId="general_setting"
          label={
            <div className="flex m-1">
              <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                Общие настройки
              </div>
            </div>
          }
          onClick={() => {
            setPage("general_setting");
          }}
        />
        <TreeItem
          nodeId="trading_mode"
          label={
            <div className="flex m-1">
              <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                Торговые режимы
              </div>
            </div>
          }
        >
          <TreeItem
            nodeId="over_under"
            label={
              <div className="flex m-1">
                <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                  Over / Under
                </div>
              </div>
            }
            onClick={() => {
              setPage("over_under");
            }}
          />
          <TreeItem
            nodeId="higher_lower"
            label={
              <div className="flex m-1">
                <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                  Higher / Lower
                </div>
              </div>
            }
            onClick={() => {
              setPage("higher_lower");
            }}
          />
          <TreeItem
            nodeId="odd_even"
            label={
              <div className="flex m-1">
                <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                  Odd / Even
                </div>
              </div>
            }
            onClick={() => {
              setPage("odd_even");
            }}
          />
          <TreeItem
            nodeId="rise_fall"
            label={
              <div className="flex m-1">
                <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                  Rise / Fall
                </div>
              </div>
            }
            onClick={() => {
              setPage("rise_fall");
            }}
          />
          <TreeItem
            nodeId="digit_differs"
            label={
              <div className="flex m-1">
                <div className="text-white leading-[19px] text-[16px] font-[400] font-['Inter']">
                  Digit Differs
                </div>
              </div>
            }
            onClick={() => {
              setPage("digit_differs");
            }}
          />
        </TreeItem>
      </TreeItem>
      <TreeItem
        nodeId="second_view"
        label={
          <div className="text-white leading-[19px] text-[16px] font-[700] font-['Inter']">
            Бот №2
          </div>
        }
        sx={{ marginBottom: "25px" }}
      ></TreeItem>
      <TreeItem
        nodeId="third_view"
        label={
          <div className="text-white leading-[19px] text-[16px] font-[700] font-['Inter']">
            Бот №3
          </div>
        }
        sx={{ marginBottom: "25px" }}
      ></TreeItem>
      <TreeItem
        nodeId="fourth_view"
        label={
          <div className="text-white leading-[19px] text-[16px] font-[700] font-['Inter']">
            Бот №4
          </div>
        }
        sx={{ marginBottom: "25px" }}
      ></TreeItem>
    </TreeView>
  );
};
export default TreeViewer;
