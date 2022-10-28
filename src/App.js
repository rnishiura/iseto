import React from "react";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";
import Reception from "./components/Reception";
import Passcode from "./components/Passcode";
import Change from "./components/Change";
import Confirmation from "./components/Confirmation";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: #66f;
  * {
    margin: 0px;
    padding: 0px;
  }

  h1 {
    margin: 0px;
    padding: 0px;
  }
  h1 img {
    width: 100%;
    margin: 0px;
  }
  h2 {
    width: 100%;
    height: 50px;
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;
    border: white 3px dotted;
  }
`;

const App = () => {
  return (
    <AuthProvider>
      <Wrapper>
        <Header>
          <h1>
            <img src="iseto.png" alt="イセトー銀行" />
          </h1>
          <h2>登録内容変更フォーム</h2>
        </Header>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/reception" element={<Reception />} />
            <Route path="/passcode" element={<Passcode />} />
            <Route path="/change" element={<Change />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </AuthProvider>
  );
};

export default App;
