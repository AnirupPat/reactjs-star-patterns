const LeftTriangleStarPattern = () => {
    const n = 5;
    let string = "";
    for(let i = 1; i <= n; i++) {
        for(let j = n; j > 0; j--) {
            if(j > i) {
                string += ' ';
            } else {
                string += '*';
            }
            
        }
        string += '\n';
    }
    console.log(string);
    return (
        <div>{string}</div>
    );
}

export default LeftTriangleStarPattern;