const getRandInt = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)))
}

const generateProblem = () => {
    let length = 3
    let sumArr = []
    let generated = []

    // populate array
    for (let i = 0; i < length; i++) {
        if (i < length - 1) {
            sumArr.push(getRandInt(0, 11), ' + ')
        } else {
            sumArr.push(getRandInt(0, 11))
        } 
    }
    // verify no duplicates
    if (!generated.includes(sumArr)) {
        generated.push(sumArr)
    } else {
        this.generateProblem()
    }
    console.log(sumArr)
    return sumArr
}

const isAccurate = (answer) => {
    let sumArr = generateProblem()
    let sum = sumArr.filter(el => typeof(el) === 'number')
      .reduce((accum, el) => accum += el)

    if (sum === answer) {
        return true
    }
    return false
}


export default {generateProblem, isAccurate}