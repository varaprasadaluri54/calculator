import OutputScreenRow from "./outputScreenRow";

export default function OutputScreen(props) {
  console.log(props.answe);
  return (
    <div className="screen">
      <OutputScreenRow value={props.question} />
      <OutputScreenRow value={props.answe} />
    </div>
  );
}
