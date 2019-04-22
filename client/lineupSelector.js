function getPlayersByPosition (squad, position) {
    return squad.filter(player => {
        return player["position"] == position
    })
}

function randomizePlayers(players) {
    var currentIndex = players.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = players[currentIndex];
        players[currentIndex] = players[randomIndex];
        players[randomIndex] = temporaryValue;
    }
    return players
}

// function selectStarters (players, numberOfPlayersWanted) {
//     return players.slice(0, numberOfPlayersWanted)
// }

// function pickAStartingEleven (squad, def, mid, fw){
//     return {
//         Manager: getPlayersByPosition(squad, "Manager"),
//         Goalkeeper: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "GK")) , 1),
//         Defenders: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "DF")) , def),
//         Midfielders: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "MF")) , mid),
//         Forwards: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "FW")) , fw)
//     }
// }

function selectPlayersByPosition (players, numberOfPlayersWanted) {
    return players.slice(0, numberOfPlayersWanted)
}

function getStartingEleven (team, newFormationArr, callback) {

    let dfNeeded = parseInt(newFormationArr[0])
    let mfNeeded = parseInt(newFormationArr[1])
    let fwNeeded = parseInt(newFormationArr[2])

    let gk = selectPlayersByPosition(randomizePlayers(getPlayersByPosition(team, "GK")) , 1)
    let df = selectPlayersByPosition(randomizePlayers(getPlayersByPosition(team, "DF")) , dfNeeded)
    let mf = selectPlayersByPosition(randomizePlayers(getPlayersByPosition(team, "MF")) , mfNeeded)
    let fw = selectPlayersByPosition(randomizePlayers(getPlayersByPosition(team, "FW")) , fwNeeded)

    callback(gk, df, mf, fw)
}

// function getNewFormation (newFormationArr, callback) {
    
//     let df = parseInt(newFormationArr[0])
//     let mf = parseInt(newFormationArr[1])
//     let fw = parseInt(newFormationArr[2])

//     console.log("Getting new formation: ", df, mf, fw)
//     console.log(team)
//     callback(df, mf, fw)
// }

module.exports = {
    getPlayersByPosition: getPlayersByPosition,
    randomizePlayers: randomizePlayers,
    // selectStarters: selectStarters,
    // pickAStartingEleven: pickAStartingEleven,
    // getNewFormation,
    getStartingEleven

}