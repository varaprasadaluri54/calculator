export default function OutputScreenRow(props) {
  return (
    <div className="screen-row">
      <input
        type="text"
        style={{ outline: "none" }}
        readOnly
        value={props.value}
      />
    </div>
  );
}
