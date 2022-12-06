import React, { useState } from "react";
import Toolbar from "./toolbar";
import General_Setting from "./General_Setting/general_setting";
import Over_Under from "./Over_Under/over_under";
import Higher_Lower from "./Higher_Lower/higher_lower";
import Odd_Even from "./Odd_Even/odd_even";
import Rise_Fall from "./Rise_Fall/rise_fall";
import Digit_Differs from "./Digit_Differs/digit_differs";
const Admin = () => {
  const [page, setPage] = useState("");
  return (
    <div className="w-full h-full flex bg-[#EFEFEF]">
      <Toolbar setPage={setPage} />
      {page == "" && ""}
      {page == "general_setting" && <General_Setting />}
      {page == "over_under" && <Over_Under />}
      {page == "higher_lower" && <Higher_Lower />}
      {page == "odd_even" && <Odd_Even />}
      {page == "rise_fall" && <Rise_Fall />}
      {page == "digit_differs" && <Digit_Differs />}
    </div>
  );
};

export default Admin;
