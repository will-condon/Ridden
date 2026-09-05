import "./Chip.css";

function Chip({label}) {
  return (
    <div className="chip">
      <span className="chip-label">{label}</span>
    </div>
  );
}

export default Chip;