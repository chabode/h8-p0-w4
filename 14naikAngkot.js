function naikAngkot(arrPenumpang){
    var rute = ['A','B','C','D','E','F']
    var naik = 0
    var turun = 0
    var result = []
    if (arrPenumpang.length === 0){
        return '[]'
    }
    for (var i = 0; i<arrPenumpang.length; i++){
        var obj = {}
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        for (var j = 0; j<rute.length; j++){
            if (arrPenumpang[i][1] === rute[j]){
                naik = j
            }
            if (arrPenumpang[i][2] === rute[j]){
                turun = j
            }
            var bayar = (turun - naik) * 2000
            obj.bayar = bayar
        }
        result.push(obj)
    }
    return result
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([])); //[]