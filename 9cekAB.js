function checkAB(kata){
    var posA = []
    var posB = []
    var flag = false
    for (var i = 0; i < kata.length; i++){
        if (kata[i] === 'a'){
            posA.push(i)
        } else if (kata[i] === 'b'){
            posB.push(i)
        }
    }
    for (var j = 0; j<posA.length ; j++){
        for (var k = 0; k<posB.length; k++){
            var jarak = Math.abs(posA[j] - posB[k])
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