const ReversedPyramidStarPattern = () => {
    const n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        // to print spaces...
        string += ' ';
        
      }
      // to print stars...
      for(let k = 0; k <= (n*2)-i*2; k++) {
        string += "*";
      }
      
      string += "\n";
    }
    console.log(string);
    return <div>{string}</div>;
  };
  
  export default ReversedPyramidStarPattern;
  