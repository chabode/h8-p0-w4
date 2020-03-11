function graduates(students){
    var obj = {}
    for(var i = 0; i< students.length; i++){
        if(obj[students[i].class] === undefined){
            obj[students[i].class] = []
        }
        // var temp = 0
        // for (var j = 0; j<students.length ; j++){
            // if(students[j].class === students[i].class && students[j].score >= 75)
            if(obj[students[i].class] === students[i].class && students[i].score >= 75)
            {
                console.log("i : " + i + " j : " + j)
                obj[students[i].class].push(students[j])
            }
        // }   
    }
    
    return obj
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));