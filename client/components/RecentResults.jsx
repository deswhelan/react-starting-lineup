import React from 'react'

class Results extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        let results = this.props.recentResults

        if(results){
            return (
                <div className="recent-results-info">
                    <ul>
                        {results.map((result, i) => {return  <li key={i}>
                            <div className="results-header">
                                {result.league_name} ({result.match_date}): 
                            </div>
                            {result.match_hometeam_name} {result.match_hometeam_score} 
                            <br></br>
                            {result.match_awayteam_name} {result.match_awayteam_score} 
                            <br></br>
                        </li>})}
                    </ul>
                </div>
            )
        } else return <div></div>
    }
}   

export default Results