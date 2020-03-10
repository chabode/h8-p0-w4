function shoppingTime (memberId, money){
    var items =[
        ['Sepatu Stactatu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    if(memberId === ''|| !memberId){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    var obj = {}
    obj.memberId = memberId
    obj.money = money
    var result = []
    if (money >= items[items.length-1][1]) {
        for (var i = 0; i<items.length; i++){
            var flag = false
            if(money >= items[i][1]){
                for (var j = 0; j<result.length; j++){
                    if(result[j][0]===items[i][0]){
                        result[j][1]++
                        money -= items[i][1]
                        flag = true
                    }
                }
                if(!flag){
                    result[j]=[]
                    result[j].push(items[i][0],1)
                    money -= items[i][1]
                }
            }
        }
    } else {
        return 'Mohon maaf, uang tidak cukup'
    }
    obj.listPurchased = result
    obj.changeMoney = money

    return obj
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime());