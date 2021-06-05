import './App.css';
import DiamondStarPattern from './components/DiamondStarPattern/DiamondStarPattern';
import DownwardTriangleStarPattern from './components/DownwardTriangleStarPattern/DownwardTriangleStarPattern';
import LeftTriangleStarPattern from './components/LeftTriangleStarPattern/LeftTriangleStarPattern';
import PyramidStarPattern from './components/PyramidStarPattern/PyramidStarPattern';
import PyramidStarPatternAnother from './components/PyramidStarPattern/PyramidStarPatternAnother';
import ReversedPyramidStarPattern from './components/ReversedPyramidStarPattern/ReversedPyramidStarPattern';
import RightTriangleStarPattern from './components/RightTriangleStarPattern/RightTriangleStarPattern';
import SquarePatterns from './components/SquarePatterns/SquarePatterns';

function App() {
  return (
    <div>
      <SquarePatterns />
      <RightTriangleStarPattern />
      <LeftTriangleStarPattern />
      <DownwardTriangleStarPattern />
      <PyramidStarPatternAnother />
      <ReversedPyramidStarPattern />
      <DiamondStarPattern />
    </div>
      
  );
}

export default App;
