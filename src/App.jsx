import Tag from './components/Tag.jsx';
import PrimaryButton from './components/PrimaryButton.jsx';
import RouteInfoInput from './components/RouteInfoInput';

function App() {
  return (
    <div className="app">
      <h1>Ridden</h1>
      <Tag label="Hazard" />
      <PrimaryButton label="Submit"></PrimaryButton>
      <RouteInfoInput title='Bike & Tyres' const tags={['MTB', 'Road', 'Gravel',]} placeholder='What tyres did you use and what size were they?' ></RouteInfoInput>
    </div>
  );
}

export default App;