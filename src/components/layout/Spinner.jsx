import spinner from "../assets/spinner.gif";
function Spinner() {
  return (
    <div className=" w-100 mt-200">
      <img
        width={180}
        className="text-center mx-auto mt-200"
        src={spinner}
        alt="Loadding..."
      />
    </div>
  );
}

export default Spinner;
