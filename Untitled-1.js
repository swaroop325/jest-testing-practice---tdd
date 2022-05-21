function randomize(array) {
    let sumTotal = 0
    if (array.length === 0) {
        throw Error("Empty array")
    }
    array.forEach(element => {
        sumTotal += element.weight
    });
    let randomSelector = Math.random() * sumTotal
    let runningTotal = 0
    let result = null;
    array.forEach(item => {
        runningTotal += item.weight
        if (randomSelector < (runningTotal) && result === null) {
            result = (item.item)
        }
    })
    if (result !== null) {
        return (result)
    }else{
        throw "Unexpected error"
    }

}

module.exports = { randomize }

// randomize([{ item: "one", weight: 5}, { item: "two", weight: 3 }])