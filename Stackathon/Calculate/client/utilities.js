const getRandInt = (min, max) => {
    return String(Math.floor(Math.random() * (max - min + 1)))
}

const generateProblem = () => {
    let length = 3
    let sumArr = []
    let generated = []

    // populate array
    for (let i = 0; i < length; i++) {
        if (i < length - 1) {
            sumArr.push(getRandInt(0, 11), ' + ');
        } else {
            sumArr.push(getRandInt(0, 11));
        } 
    }
    // verify no duplicates
    if (!generated.includes(sumArr)) {
        generated.push(sumArr)
    } else {
        this.generateProblem()
    }
    console.log(sumArr)
    return sumArr;
}

export default generateProblem