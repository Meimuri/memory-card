import React, { useState, useEffect, useContext } from "react";

export const GameContext = React.createContext();

export function useContentData() {
    return useContext(GameContext);
}

export function GameProvider({ children }) {
    const [cards, setCards] = useState([
        {
            id: "1",
            name: "Magician",
            chosen: 0,
        },
        {
            id: "2",
            name: "Priestess",
            chosen: 0,
        },
        {
            id: "3",
            name: "Empress",
            chosen: 0,
        },
        {
            id: "4",
            name: "Emperor",
            chosen: 0,
        },
        {
            id: "5",
            name: "Hierophant",
            chosen: 0,
        },
        {
            id: "6",
            name: "Lovers",
            chosen: 0,
        },
        {
            id: "7",
            name: "Chariot",
            chosen: 0,
        },
        {
            id: "8",
            name: "Justice",
            chosen: 0,
        },
        {
            id: "9",
            name: "Hermit",
            chosen: 0,
        },
        {
            id: "10",
            name: "Fortune",
            chosen: 0,
        },
        {
            id: "11",
            name: "Strength",
            chosen: 0,
        },
        {
            id: "12",
            name: "Hanged_Man",
            chosen: 0,
        },
        {
            id: "13",
            name: "Death",
            chosen: 0,
        },
        {
            id: "14",
            name: "Temperance",
            chosen: 0,
        },
        {
            id: "15",
            name: "Devil",
            chosen: 0,
        },
        {
            id: "16",
            name: "Tower",
            chosen: 0,
        },
        {
            id: "17",
            name: "Star",
            chosen: 0,
        },
        {
            id: "18",
            name: "Moon",
            chosen: 0,
        },
        {
            id: "19",
            name: "Sun",
            chosen: 0,
        },
        {
            id: "20",
            name: "Judgement",
            chosen: 0,
        },
        {
            id: "21",
            name: "Fool",
            chosen: 0,
        },
    ]);

    const [randomCards, setRandomCards] = useState([]);

    const [score, setScore] = useState({
        currentScore: 0,
        bestScore: 0,
    });

    useEffect(() => {
        const sorted = [...cards].sort(() => Math.random() - 0.5);
        setRandomCards(sorted);
    }, [cards]);

    const updateCards = () => (e) => {
        e.preventDefault();

        const cardID = e.target.id;
        const data = cards.find((card) => card.id === cardID);

        if (data.chosen === 0) {
            setScore((previousScore) => {
                return {
                    ...previousScore,
                    currentScore: previousScore.currentScore + 1,
                };
            });

            const newArray = cards.map((card) => {
                if (card.id === cardID) {
                    return { ...card, chosen: 1 };
                } else {
                    return card;
                }
            });
            setCards(newArray);
        } else {
            const topScore =
                score.bestScore > score.currentScore
                    ? score.bestScore
                    : score.currentScore;

            setScore({
                currentScore: 0,
                bestScore: topScore,
            });

            const newSet = cards.map((card, i) => ({
                ...card,
                chosen: 0,
            }));

            setCards(newSet);
        }
    };

    return (
        <GameContext.Provider
            value={{ cards, updateCards, randomCards, score }}
        >
            <div className="container">{children}</div>
        </GameContext.Provider>
    );
}
