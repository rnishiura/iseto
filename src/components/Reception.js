import { Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import NextButton from "./NextButton";
import Input from "./Input";

const Reception = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <p>受付番号を入力ください。</p>
        <form>
          <div style={{ margin: "20px 0 40px" }}>
            <Input
              type="tel"
              name="number"
              style={{ height: "40px", width: "250px", "text-align": "center", "font-size": "25px"}}
            />
          </div>
          <Link to="/passcode">
            <NextButton>次へ</NextButton>
          </Link>
        </form>
      </>
    );
  }
};

export default Reception;
