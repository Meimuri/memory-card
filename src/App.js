import React from "react";
import { GameProvider } from "./components/GameContext";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
    return (
        <GameProvider>
            <Header></Header>
            <Content></Content>
        </GameProvider>
    );
}

export default App;
