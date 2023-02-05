import React from "react";
import "./resetbutton.css";

export function ResetButton({resetGame}) {
    return (
        <button className="resetbutton" onClick={resetGame}>Reset Board</button>
    )
}
