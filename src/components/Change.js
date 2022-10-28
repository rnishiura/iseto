import { Navigate, Link, Form } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Button from "./Button";
import styled from "styled-components";

const Change = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <p>変更内容を入力ください。</p>
        <hr />
        <form>
          <ul>
            <li>
              <label>郵便番号（ハイフン不要）</label>
              <input type="text" name="post" />
            </li>
            <li>
              <label>住所</label>
              <input type="text" name="address" />
            </li>
            <li>
              <label>携帯番号</label>
              <input type="text" name="phone" />
            </li>
            <li>
              <label>ご自宅電話番号</label>
              <input type="text" name="number" />
            </li>
            <li>
              <p>携帯アドレス</p>
              <FormButton>クリックして空メールを送信</FormButton>
              <p>
                <label>受信メールに記載の番号を入力ください。</label>
                <input type="text" name="phone-address" />
              </p>
            </li>
            <li>
              <label>本人確認書類WEB提出</label>
              <p>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  ※ 当行が認めている本人確認書類はコチラをご確認ください。
                </a>
              </p>
              <p>
                表 <FormButton>ファイルを選択</FormButton>
              </p>
              <p>
                裏 <FormButton>ファイルを選択</FormButton>
              </p>
            </li>
          </ul>
          <Link to="/confirmation">
            <Button>内容確認</Button>
          </Link>
        </form>
      </div>
    );
  }
};

const FormButton = styled.button`
  margin: 0px;
  padding: 0px;
  width: 170px;
  height: 60px;
  color: #26c;
  font-size: 15px;
  background: #2df;
  border: 1px #26c solid;
  border-radius: 100px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
`;

export default Change;
