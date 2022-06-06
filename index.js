function findMatching(drivers, string){
    const answer = drivers.filter(driversName => driversName.toLowerCase () === string.toLowerCase())
    return answer
}

function fuzzyMatch(drivers, string){
    const answer = drivers.filter(driversName => driversName.startsWith(string))
    return answer
}

function matchName(drivers, name){
    return drivers.filter(function(hometown){
      return hometown.name === name
    })
  }