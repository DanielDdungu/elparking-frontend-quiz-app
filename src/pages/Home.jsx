import { Link } from "react-router-dom";
import Card from "../components/layout/Card";

function Home() {
  return (
    <Card className="justify-center">
      <p> WELCOME TO ELPARKING FRONT-END TEST</p>
      <div className="card-actions">
        <Link to="/setting">
          <button className="btn btn-primary btn-active">START</button>
        </Link>
      </div>
    </Card>
  );
}

export default Home;
