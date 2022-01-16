import Card from "../components/layout/Card";
import useAxios from "../API/useAxios";
import { useSelector } from "react-redux";
import Spinner from "../components/layout/Spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleScoreChange } from "../Redux/Action";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <div className="mt-20">
        <Spinner />
      </div>
    );
  }

  const handleClickAnswer = (e) => {
    e.preventDefault();
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/resultpage");
    }
  };
  return (
    <Card>
      <div className="card card-bordered  w-10/12">
        <div className="p-8 space-y-2 artboard.phone-2">
          <p className="font-medium">
            Score: {score}/{response.results.length}
          </p>
          <p className="font-medium">Question Progress {questionIndex + 1}</p>

          <progress
            className="progress progress-info w-full h-3"
            value={questionIndex + 1}
            max={amount_of_question}
          ></progress>
        </div>
        <div className="alert h-20  mx-8">
          <div className="flex-1">
            <p className=" md:text-sm">
              <span>{decode(response.results[questionIndex].question)}</span>
            </p>
          </div>
        </div>
        <form action="" className="form-control">
          <div className="my-3  px-8 h-max">
            <div className=" py-2">
              {options.map((data, id) => (
                <div key={id}>
                  <button
                    className="btn btn-primary w-full mb-2"
                    onClick={handleClickAnswer}
                  >
                    {decode(data.toLowerCase())}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex px-8 justify-between mb-3">
            <div className="">
              <button className="btn btn-error w-24 btn-sm btn-disabled">
                SKIP
              </button>
            </div>
            <div className="">
              <button className="btn btn-info w-24 btn-sm btn-disabled">
                CONFIRM
              </button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Questions;
