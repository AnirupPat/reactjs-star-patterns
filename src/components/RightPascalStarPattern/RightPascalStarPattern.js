
const RightPascalStarPattern = () => {
    const n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
      
      
      // to print stars
      for(let k = 1; k <= i; k++) {
        string += "*";
      }
      string += "\n";
    }

    for(let i = n-1; i >= 1; i--) {
        for(let j = 1; j <= i; j++) {
            string += "*";
        }
        
        string += "\n";
    }
    
    
  
    console.log(string);
    return <div>{string}</div>;
  };
  
  export default RightPascalStarPattern;
  