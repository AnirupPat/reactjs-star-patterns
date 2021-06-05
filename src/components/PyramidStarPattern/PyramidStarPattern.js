const PyramidStarPattern = () => {
  const n = 5;
  const a = 9;
  let string = "";
  for (let i = 0; i < n; i++) {
    var sPos = Math.ceil(a / 2) - i; 
    for (let j = 1; j <= a; j++) {
      if (j >= sPos && j < sPos+(i * 2 + 1)) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
  return <div>{string}</div>;
};

export default PyramidStarPattern;
