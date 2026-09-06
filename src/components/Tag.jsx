import "./Tag.css";

function Tag({label}) {
  return (
    <div className="tag">
      <span className="tag-label">{label}</span>
    </div>
  );
}

export default Tag;