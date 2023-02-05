import React from "react";
import "./box.css";

export function Box({value, onClick}) {
    const style = value === "X" ? "box x" : "box o";
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}