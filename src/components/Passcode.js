import { Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Button from "./Button";

const Passcode = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <p>
          現状の登録内容です。
          <br />
          お間違いなければ暗証番号を入力し、
          <br />
          「次へ」をタップしてお進みください。
        </p>
        <hr />
        <form>
          <ul>
            <li>お名前　三菱　太郎</li>
            <li>生年月日　1919年8月15日</li>
            <li>店番　001</li>
            <li>店名　本店</li>
            <li>口座番号　1234567</li>
            <li>
              <label>暗証番号</label>
              <input type="text" name="number" />
            </li>
          </ul>
          <Link to="/change">
            <Button>次へ</Button>
          </Link>
        </form>
      </div>
    );
  }
};

export default Passcode;
