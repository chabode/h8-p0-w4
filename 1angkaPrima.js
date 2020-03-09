function angkaPrima(num){
    var result = []
    // var num = 23
    
    for (var i = 1; i<=num; i++){
      if (num%i === 0){
        result.push(i)
      }
    }
    
    if(result.length === 2){
        return true
    } else {
        return false    
    }
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false