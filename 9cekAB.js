function checkAB(kata){
    var newStr = ''
    var posA = []
    var posB = []
    var flag = false
    // for (var i = 0; i < kata.length; i++){
    //     if(kata[i]=== " "){
    //         newStr+= ''
    //     } else {
    //         newStr += kata[i]
    //     }
    // }
    for (var j = 0; j < kata.length; j++){
        if (kata[j] === 'a'){
            posA.push(j)
        } else if (kata[j] === 'b'){
            posB.push(j)
        }
    }
    for (var k = 0; k<posA.length ; k++){
        for (var l = 0; l<posB.length; l++){
            var jarak = Math.abs(posA[k] - posB[l])
            if (jarak === 4){
                flag = true
            }
        }
    }
    return flag
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
