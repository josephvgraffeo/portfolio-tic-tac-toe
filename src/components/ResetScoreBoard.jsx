import React from "react";
import "./resetscoreboard.css";

export function ResetScoreBoard({resetScore}) {
    return (
        <button className="resetscore" onClick={resetScore}>Reset Score</button>
    )
}