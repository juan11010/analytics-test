import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div>
      <label> Home screen</label>
      <div>
        <button onClick={() => navigateToSignUp()}>Move</button>
      </div>
    </div>
  );
};
export default Home;
