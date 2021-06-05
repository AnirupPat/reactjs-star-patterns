import './App.css';
import LeftTriangleStarPattern from './components/LeftTriangleStarPattern/LeftTriangleStarPattern';
import RightTriangleStarPattern from './components/RightTriangleStarPattern/RightTriangleStarPattern';
import SquarePatterns from './components/SquarePatterns/SquarePatterns';

function App() {
  return (
    <div>
      <SquarePatterns />
      <RightTriangleStarPattern />
      <LeftTriangleStarPattern />
    </div>
      
  );
}

export default App;
