function changeMe (arr){
    var obj = {}
    if (arr.length === 0){
        return '[]'
    }
    for (var i=0; i<arr.length; i++){
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        if(isNaN(arr[i][3]) || arr[i][3] > 2020){
            obj.age = 'Invalid birth year'
        } else {
            obj.age = 2020 - arr[i][3]
        }
    console.log( i+1 + '. ' + obj.firstName + ' ' + obj.lastName)
    console.log(obj)
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""