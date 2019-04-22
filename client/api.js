import request from 'superagent'

const Url1 = 'https://apifootball.com/api/?action=get_H2H&firstTeam=Manchester+United&secondTeam='
const Url2 = '&APIkey=caf6136cd1a96055d04a2a8c6050e9c03e8e8ef12214d777382400b437430372'

export function getRecentResults(callback) {
    request
    .get(Url1 + "Arsenal" + Url2)
    .end((err, res) => {
        let results = res.body.firstTeam_lastResults
        callback(results)
    })
}

export function getHeadToHeadResults(opponent, callback) {
    request
    .get(Url1 + opponent + Url2)
    .end((err, res) => {
        let results = res.body.firstTeam_VS_secondTeam
        callback(results)
    })
}

