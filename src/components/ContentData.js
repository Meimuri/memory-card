import React from "react";
import { useContentData } from "./GameContext";

export function ContentData() {
    const { updateCards, randomCards } = useContentData();

    return randomCards.map((card) => {
        return (
            <React.Fragment key={card.id}>
                <img
                    onClick={updateCards()}
                    className="card"
                    alt=""
                    id={card.id}
                    src={`assets/images/${card.name}.webp`}
                />
            </React.Fragment>
        );
    });
}
