function graduates(students){
    var obj = {}
    for(var i = 0; i< students.length; i++){
        if(obj[students[i].class] === undefined){
            obj[students[i].class] = []
        }
        var temp = 0
        for (var key in obj){
            if(key === students[i].class && students[i].score >= 75){
                obj[students[i].class].push(students[i])
            }            
        }        
    }
    for (var key in obj){
        for (var j = 0; j<obj[key].length; j++){
            delete obj[key][j].class
        }
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


console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
]));