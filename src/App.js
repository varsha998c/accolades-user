import "./App.css";
import "./assets/css/style.css";
import { styled } from "styled-components";
import "./assets/css/slider.css";
import MainRouter from "./components/routing/routes/MainRouter";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
