import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, React } from "react";
import { fetchData } from "./functions";
import MainPage from "./pages/main_page/main_page";
import WaitingPage from "./pages/WaitingPage/WaitingPage";
import WaitingPageSaPotvrdi from "./pages/WaitingPage/WaitingPageSaPotvrdi";
import QuestionFourAnswer from "./pages/QuestionFourAnswers/QuestionFourAnswer";
import QuestionInputAnswer from "./pages/QuestionInputAnswer/QuestionInputAnswer";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Waiting" element={<WaitingPage />} />
        <Route
          path="/WaitingConfirm"
          exact
          element={<WaitingPageSaPotvrdi />}
        />
        <Route path="/Question" exact element={<QuestionFourAnswer />} />
        {/* <Route path="/Radionice" exact element={<Radionice />} />
        <Route path="/Partneri" exact element={<Partneri />} /> */}
      </Routes>
    </div>
  );
}

export default App;
