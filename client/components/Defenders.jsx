import React from 'react'

// import lineupSelector from '../lineupSelector'
import Player from './Player'

class Defenders extends React.Component { 

    constructor(props) {
        super(props)
    }

//   componentWillMount() {
//     this.getStartingDefenders()
//   }

//   getStartingDefenders() {
//     let team = this.props.team
//     let numOfStarters = this.props.numOfStarters

//     //get all the Defenders and randomize them
//     let allDefenders = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "DF"))
//     let startingDefenders = lineupSelector.selectStarters(allDefenders, numOfStarters)

//     this.setState({
//       defenders: startingDefenders
//     })
//   }

    render() {
        if(this.props.defenders) {
            return (
                <div className="pitch-area" id="defenders">
                {this.props.defenders.map((defender, i) => <Player player={defender}  key={i}/>)}
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Defenders