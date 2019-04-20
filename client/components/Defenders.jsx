import React from 'react'

import lineupSelector from '../lineupSelector'
import Player from './Player'

class Defenders extends React.Component { 

  constructor(props) {
    super(props);
    this.setState({
      defenders: '',
    })
  }

  componentWillMount() {
    console.log("DefendersWillMount")
    this.getStartingDefenders()
  }

  getStartingDefenders() {
    let team = this.props.team
    let numOfStarters = this.props.numOfStarters

    //get all the Defenderss and randomize them
    let allDefenders = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "DF"))

    let startingDefenders = lineupSelector.selectStarters(allDefenders, numOfStarters)
    
    console.log(startingDefenders)

    this.setState({
      defenders: startingDefenders
    })
  }

  render() {
    return (
        <div className="pitch-area" id="defenders">
        {this.state.defenders.map((defender, i) => <Player player={defender}  key={i}/>)}
        </div>
    )
  }
}

export default Defenders