function cariModus(arr){
    var result = []
    for (var i = 0; i<arr.length; i++){
        var flag = false
        for (var j = 0; j<result.length; j++){
            if (result[j][0] === arr[i]){
                result[j][1]++
                flag = true
            }   
        }
        if(!flag){
            result.push([arr[i], 1])
        }
    }
    if (result.length === 1 || result.length === arr.length){
        return -1
    }
    for (var k =1; k<result.length; k++){
        for (var l=0; l<k; l++){
            if (result[k][1] > result[l][1]){
                var temp = result[k]
                result[k] = result[l]
                result[l] = temp
            }
        }
    }
    return result[0][0]
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1