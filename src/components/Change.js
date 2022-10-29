import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import FormButton from "./FormButton";
import NextButton from "./NextButton";
import styled, { css } from "styled-components";
import Input from "./Input";

const StyledUL = styled.ul`
  padding: 0px 20px 0px 50px;

  li {
    width: 100%;
    /* height: 40px; */
    text-align: left;
  }
  li label {
    display: block;
    /* float: left; */
  }
  li:last-child::marker {
    content: "※  ";
    font-size: 1.2em;
  }
`;

const Change = (props) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const vals = {};
    for (let a of event.target.elements) {
      vals[a.name] = a.value;
    }
    // console.log(vals);
    props.handleSubmit(vals);
    navigate("/confirmation");
  };

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <p>変更内容を入力ください。</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <StyledUL>
            <li>
              <label>郵便番号（ハイフン不要）</label>
              <Input type="text" name="post" style={{ height: "25px" }} />
            </li>
            <li>
              <label>住所</label>
              <Input
                type="text"
                name="address"
                style={{ height: "65px", width: "100%" }}
              />
            </li>
            <li>
              <label>携帯番号</label>
              <Input
                type="text"
                name="phone"
                style={{ height: "35px", width: "100%" }}
              />
            </li>
            <li>
              <label>ご自宅電話番号</label>
              <Input
                type="text"
                name="number"
                style={{ height: "35px", width: "100%" }}
              />
            </li>
            <li>
              <label>携帯アドレス</label>
              <FormButton style={{ width: "100%" }}>
                クリックして空メールを送信
              </FormButton>
              <div style={{ margin: "20px 0 15px" }}>
                <label
                  style={{
                    display: "inline-block",
                    float: "left",
                    width: "140px",
                  }}
                >
                  受信メールに
                  <br />
                  記載の番号を
                  <br />
                  入力ください。
                </label>
                <div
                  style={{
                    display: "table-cell",
                    "vertical-align": "middle",
                    height: "90px",
                  }}
                >
                  <Input
                    type="text"
                    name="phone_address"
                    size="15"
                    style={{ height: "35px", width: "100%" }}
                  />
                </div>
              </div>
            </li>
            <li>
              <label>本人確認書類WEB提出</label>
            </li>
            <li>
              <a
                href="https://www.jp-bank.japanpost.jp/tetuzuki/honnin/tzk_hn_index.html"
                target="_blank"
                rel="noreferrer"
              >
                当行が認めている本人確認
                <br />
                資料はコチラをご確認ください。
              </a>
            </li>
          </StyledUL>
          <p>
            表 <FormButton>ファイルを選択</FormButton>
          </p>
          <p>
            裏 <FormButton>ファイルを選択</FormButton>
          </p>
          {/* <Link to="/confirmation"> */}
          <NextButton>内容確認</NextButton>
          {/* </Link> */}
        </form>
      </>
    );
  }
};

export default Change;
