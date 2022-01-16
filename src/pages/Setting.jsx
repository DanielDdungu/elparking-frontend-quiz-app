import Form from "../components/layout/Form";
import Card from "../components/layout/Card";
import NumberofQuestions from "../components/layout/NumberofQuestions";
import useAxios from "../API/useAxios";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/layout/Spinner";

const Setting = () => {
  const { response, loading, error } = useAxios({ url: "/api_category.php  " });
  console.log(response);

  //GO TO NEXT PAGES
  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }
  const selectDifficulty = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const selectType = [
    { id: "multiple", name: "Multiple Choice" },

    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //NEXT PAGE
    navigate("/question");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit} className="p-8 card bg-base-200 w-10/12">
        <div>
          <NumberofQuestions />
          <Form options={response.trivia_categories} label={"Category"} />
          <Form options={selectDifficulty} label={"Difficulty"} />
          <Form options={selectType} label={"Type"} />
        </div>
        <div className="pt-3" align="center">
          <button className="btn btn-primary btn-active w-40" type="submit">
            START
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Setting;
