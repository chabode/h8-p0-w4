function ubahHuruf(kata){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var newString = ''
    for (var i = 0; i<kata.length; i++){
        for (var j = 0; j<alphabet.length; j++){
            if (kata[i] === 'z'){
                newString += 'a'
            } else if (kata[i]===alphabet[j]){
                newString += alphabet[j+1]
            }
        }
    }
    return newString
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu