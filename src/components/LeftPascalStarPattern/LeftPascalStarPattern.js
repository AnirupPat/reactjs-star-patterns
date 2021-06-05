const LeftPascalStarPattern = () => {
  const n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n-1; j++) {
      string += ' ';
    }

    // to print stars
    for (let k = 1; k <= i; k++) {
      string += "*";
    }
    string += "\n";
  }

  for(let i = 2; i <= n; i++) {
    for(let j = 1; j < i; j++) {
        string += " ";
    }
      for(let k = i; k <= n; k++) {
          string += "*";
        }
      string += "\n";
  }

  console.log(string);
  return <div>{string}</div>;
};

export default LeftPascalStarPattern;
