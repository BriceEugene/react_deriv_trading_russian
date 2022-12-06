import React from "react";

function createData(color, content) {
  return { color, content };
}

const rows = [
  createData("green", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("blue", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("green", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("blue", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("red", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("blue", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("red", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("blue", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("blue", "27-Nov-22/03:33:37 - Profit $4.98"),
  createData("darkmagenta", "Setting has been changed!"),
];
const ProcessDetail = () => {
  return (
    <div className="w-full">
      {rows.map((row, index) => (
        <>
          <span style={{ color: `${row.color}` }}>{row.content}</span>
          <br />
        </>
      ))}
    </div>
  );
};
export default ProcessDetail;
