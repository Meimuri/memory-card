import React from "react";
import { useContentData } from "./GameContext";

export function Header() {
    const { score } = useContentData();
    return (
        <div className="header">
            <div className="header-name-score">
                <div className="header-name">The Arcana Memory Game</div>
                <div className="header-score">
                    <div className="header-score-current">
                        Current: {score.currentScore}
                    </div>
                    <div className="header-score-best">
                        Best: {score.bestScore}
                    </div>
                </div>
            </div>
            <div className="header-instruction">
                Get points by clicking on an image but don't click on any more
                than once!
            </div>
        </div>
    );
}
