import { Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Button from "./Button";

const Reception = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <p>受付番号を入力ください。</p>
        <form>
          <div>
            <input type="text" name="number" />
          </div>
          <Link to="/passcode"><Button>次へ</Button></Link>
        </form>
      </div>
    );
  }
};

export default Reception;
