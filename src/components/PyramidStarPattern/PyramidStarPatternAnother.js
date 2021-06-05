const PyramidStarPatternAnother = () => {
  const n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // to print spaces...
      if (j <= n - i) {
        string += " ";
      }
    }
    // to print stars...
    for (let k = 0; k < i * 2 - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return <div>{string}</div>;
};

export default PyramidStarPatternAnother;
