import { Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Button from "./Button";

const Confirmation = () => {
  const { user } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { number } = event.target.elements;
    console.log(number.value);
  };

  const credidentials = {
    postal_number: "103-0011",
    home_address: "東京都中央区日本橋大伝馬町１２ー１２",
    phone: "999-9999-9999",
    homephone: false,
    phone_address: "te@st.com",
    kyc: "some_beautiful_selfie",
  };

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <p>
          内容にお間違いなければ、
          <br />
          登録ボタンを押してください。
        </p>
        <hr />
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>郵便番号</label>
              <p>{credidentials.postal_number}</p>
            </li>
            <li>
              <label>住所</label>
              <p>{credidentials.home_address}</p>
            </li>
            <li>
              <label>携帯番号</label>
              <p>{credidentials.phone}</p>
            </li>
            <li>
              <label>ご自宅電話番号</label>
              <p>{credidentials.homephone ? "登録済み" : "登録無し"}</p>
            </li>
            <li>
              <label>携帯アドレス</label>
              <p>{credidentials.phone_address ? "登録済み" : "登録無し"}</p>
            </li>
            <li>
              <label>本人確認資料</label>
              <p>{credidentials.kyc}</p>
            </li>
          </ul>
          <Button>登録</Button>
        </form>
      </div>
    );
  }
};

export default Confirmation;
