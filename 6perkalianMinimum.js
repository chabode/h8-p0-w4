function digitPerkalianMinimum(angka){
    var result = []
    for (var i = 1; i<=angka; i++){
        var string = ''
        var total = 0
        var flag = false
        if(angka%i === 0){
            total = angka/i
            string += i
            string += total
        }else {
            flag = true
        }
        if (!flag){
            result.push(string)
        }
    }
    var panjangMin = Infinity
    for (var j = 0; j<result.length; j++){
        if(result[j].length < panjangMin) panjangMin = result[j].length
    }
    return panjangMin
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2