import React from "react";
import notificationicons from "../Components/Images/bell.svg"

const notyIconStyle = {
  position: "relative",
  display: "inline"
};
const notyNumStyle = {
    position: "absolute",
    right: "0px",
    backgroundColor: "#DC6677",
    color: "#000",
    padding: "0px 1px",
    borderRadius : "100%",
    fontSize: "9px",
    width: "14px",
    display: "flex",
    height: "14px",
    left: "15px",
    top: "-10px",
    alignItems: "center",
    justifyContent:"center"
};
export default function Noty({ width, color, count }) {
  return (
    <div>
      <div style={notyIconStyle}>
        {count > 0 ? <div style={notyNumStyle}>{count}</div> : null}

        <img src={notificationicons} alt="notifications" className="noti"/>
      </div>
    </div>
  );
}
