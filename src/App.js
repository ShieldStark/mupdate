import logo from './logo.svg';
import './App.css';
import Main from './Components/Home/main'
import HoverEnlarge from './Components/Hover/HoverEnlarge';
import HoverSlider from './Components/Hover/HoverSlider';
function App() {
  return (
    <div>
      <h1>Hover to Enlarge</h1>
      <HoverSlider />
      <HoverEnlarge />
    </div>
  );
}

export default App;
