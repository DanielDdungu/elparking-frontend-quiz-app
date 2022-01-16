import PropTypes from "prop-types";

function Card({ children }) {
  //CONDITIONAL STYLING OPTION ONE
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //CONDITIONAL STYLING OPTION TWO
  return (
    <div className=" h-screen bg-slate-900 shadow-xl shadow-2x  flex flex-col items-center">
      <h1 className="card-title  font-bold mt-3">ELPARKING QUIZ TEST</h1>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
