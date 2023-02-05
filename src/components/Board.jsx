import React from "react";
import { Box } from "./Box.jsx"
import "./board.css";

export function Board({board, onClick}) {
    return (
        <div className="board">
            {board.map((value, index) => {
                return <Box value={value} onClick={() => value === "" && onClick(index)}/>
            })}
        </div>
    )
}