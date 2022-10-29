import { Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import styled from "styled-components";
import NextButton from "./NextButton";
import Input from "./Input";

const StyledUL = styled.ul`
  padding: 0px 30px 0px 50px;

  li {
    width: 100%;
    height: 40px;
    text-align: left;
  }
  li div {
    text-align: left;
  }
  li div:first-child {
    width: 140px;
    float: left;
  }
`;

const Passcode = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <p>
          現状の登録内容です。
          <br />
          お間違いなければ暗証番号を入力し、
          <br />
          「次へ」をタップしてお進みください。
        </p>
        <hr />
        <form>
          <StyledUL>
            <li>
              <div>お名前</div>
              <div>三菱　太郎</div>
            </li>
            <li>
              <div>生年月日</div>
              <div>1919年8月15日</div>
            </li>
            <li>
              <div>店番</div>
              <div>001</div>
            </li>
            <li>
              <div>店名</div>
              <div>本店</div>
            </li>
            <li>
              <div>口座番号</div>
              <div>1234567</div>
            </li>
            <li>
              <div>
                <label>暗証番号</label>
              </div>
              <Input type="password" name="number" />
            </li>
          </StyledUL>
          <Link to="/change">
            <NextButton>次へ</NextButton>
          </Link>
        </form>
      </>
    );
  }
};

export default Passcode;
