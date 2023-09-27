import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/");
  };
  return (
    <div>
      <header>
        <form>
          <div>
            <div>
              <input placeholder="UserName" />
            </div>
            <div>
              <input placeholder="Password" />
            </div>
            <div>
              <button>Sign Up</button>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <button onClick={() => moveHome()} style={{ color: "black" }}>
                Move back
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};
export default Signup;
