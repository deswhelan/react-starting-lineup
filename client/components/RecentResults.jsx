import React from 'react'

class Results extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        let results = this.props.recentResults

        if(results){
            return (
                <div className="recent-results">
                    <h3>Recent Results</h3>
                    <ul>
                        {results.map((result, i) => {return  <li key={i}>
                            <div className="results-header">
                                {result.league_name} ({result.match_date}): 
                            </div>
                            {result.match_hometeam_name} {result.match_hometeam_score} : {result.match_awayteam_score} {result.match_awayteam_name}
                        </li>})}
                    </ul>
                </div>
            )
        } else return <div></div>
    }
}   

export default Results