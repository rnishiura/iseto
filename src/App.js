import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import Login from "./components/Login";
import Reception from "./components/Reception";
import Passcode from "./components/Passcode";
import Change from "./components/Change";
import Confirmation from "./components/Confirmation";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Wrapper>
        <Header>
          <h1>
            <img src="iseto.png" alt="イセトー銀行" />
          </h1>
          <hr />
          <h2>登録内容変更フォーム</h2>
          <hr />
        </Header>
        <BrowserRouter>
          <ContentWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/reception" element={<Reception />} />
              <Route path="/passcode" element={<Passcode />} />
              <Route path="/change" element={<Change />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </ContentWrapper>
        </BrowserRouter>
      </Wrapper>
    </AuthProvider>
  );
};

export default App;
