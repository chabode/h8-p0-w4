function highestScore(students){
    var obj = {}
    for(var i = 0; i< students.length; i++){
        if(obj[students[i].class] === undefined){
            obj[students[i].class] = {}
        }
        var temp = 0
        for (var j = 0; j<students.length ; j++){
            if(students[j].class === students[i].class){
                if (temp < students[j].score){
                    temp = students[j].score
                    obj[students[i].class].name = students[j].name
                    obj[students[i].class].score = temp
                }
            }
        }
    }
    
    return obj
}

console.log(highestScore([
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

console.log(highestScore([
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