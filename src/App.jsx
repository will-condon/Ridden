import Chip from './components/Chip.jsx';
import PrimaryButton from './components/PrimaryButton.jsx';

function App() {
  return (
    <div className="app">
      <h1>Ridden</h1>
      <Chip label="Hazard" />
      <PrimaryButton label="Submit"></PrimaryButton>
    </div>
  );
}

export default App;