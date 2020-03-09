function urutkanAbjad (str){
    var array = []
    for (var i = 0; i<str.length ; i++){
        array.push(str[i])
    }
    for (var j = 1; j<array.length; j++){
        for (var k = 0; k<j; k++){
            if (array[j] < array[k]){
                var temp = array[k]
                array[k] = array[j]
                array[j] = temp
            }
        }
    }
    var newString = ''
    for (var l = 0; l< array.length; l++){
        newString += array[l]
    }
    return newString
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'