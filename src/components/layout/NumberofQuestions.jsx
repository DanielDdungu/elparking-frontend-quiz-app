import { useDispatch } from "react-redux";
import { handleAmountChange } from "../../Redux/Action";
const NumberofQuestions = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };
  return (
    <div className="form-control pt-4">
      <label className="label">
        <span className="label-text">Number Of Questions</span>
      </label>
      <input
        type="number"
        placeholder="10"
        className="input disabled"
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberofQuestions;
