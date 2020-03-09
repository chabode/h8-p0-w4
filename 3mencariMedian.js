function cariMedian(array) {
    // you can only write your code here!
    if(array.length%2 === 0){
        var medianIndex = Math.floor(array.length/2)
        var median = (array[medianIndex-1]+array[medianIndex])/2
        return median
    } else {
        medianIndex = Math.floor(array.length/2)
        median = array[medianIndex]
        return median
    }
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
      