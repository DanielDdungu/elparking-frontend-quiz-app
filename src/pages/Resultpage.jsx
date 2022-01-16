import { handleScoreChange } from "../Redux/Action";
import { handleAmountChange } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import Card from "../components/layout/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Resultpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);
  const { amount_of_question } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(10));
    navigate("/");
  };

  return (
    <Card>
      <div className="card text-center shadow-2xl h-screen bg-base-100  w-10/12">
        <div className="card-body">
          <h2 className="card-title">FINAL RESULTS</h2>
          <p>
            Your final score is {score} out of {amount_of_question}.
          </p>
          <div className="justify-center card-actions">
            <button className="btn btn-primary" onClick={handleBackToSettings}>
              BACK TO SETTINGS
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Resultpage;
