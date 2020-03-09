function fpb(angka1, angka2) {
    // var angka1 = 24
    // var angka2 = 36
    var result2 = []

    for (var j = 1; j<=angka2; j++){
        if (angka1%j === 0 && angka2%j === 0){
            result2.push(j)
        }

    }
    return result2[result2.length-1]
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1