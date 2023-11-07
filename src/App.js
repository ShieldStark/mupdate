import logo from './logo.svg';
import './App.css';
import Main from './Components/Home/main'
import HoverEnlarge from './Components/Hover/HoverEnlarge';
import HoverSlider from './Components/Hover/HoverSlider';
import Sidebar from './Components/SideBar/sidebar';
import ProgessBar from './Components/progress/progressBar'
function App() {
  return (
    <div>

      {/* <h1>Hover to Enlarge</h1>
       <HoverSlider />
      <HoverEnlarge /> */}
      {/* <Sidebar/> */}
      <ProgessBar/>
      <ProgessBar/>
      <ProgessBar/>
      <ProgessBar/>
    </div>
  );
}

export default App;
