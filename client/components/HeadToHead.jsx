import React from 'react'

class HeadToHead extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        let results = this.props.results
        console.log(results)
        if(this.props.results){
        return (
            <div className="head-to-head">
                <h3>Head to Head vs. OPPONENT</h3>
                <ul>
                    {results.map((result, i) => {
                        return  <li key={i}>
                        <div className="results-header">
                            {result.league_name}({result.match_date}): 
                        </div>
                        <br/>
                        {result.match_hometeam_name} {result.match_hometeam_score} : {result.match_awayteam_score} {result.match_awayteam_name}</li>
                    })}
                </ul>

                <div className="corners">
                    <div className="bottom-left-corner"></div>
                    <div className="bottom-right-corner"></div>
                </div>
            </div>
        )
        }else {
            return <div></div>
        }

    }
}   

export default HeadToHead