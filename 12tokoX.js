function countProfit(shoppers){
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ]

    if(shoppers.length === 0){
        return '[]'
    }

    var result = []
    for (var i = 0; i<listBarang.length; i++){
        var obj = {
            product : listBarang[i][0],
            shoppers : [],
            leftOver : listBarang[i][2],
            totalProfit : 0 
        }
        var totalAmt = 0
        for (var j = 0; j< shoppers.length ; j++){
            if(obj.product === shoppers[j].product && obj.leftOver >= shoppers[j].amount){
                obj.shoppers.push(shoppers[j].name)
                obj.leftOver -= shoppers[j].amount
                totalAmt += shoppers[j].amount
                obj.totalProfit = totalAmt * listBarang[i][1]
            }
        }
        result.push(obj)
    }
    return result
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([])); //[]