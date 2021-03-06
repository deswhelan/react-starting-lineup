import React from 'react'

import lineupSelector from '../lineupSelector'
import Player from './Player'

class Midfielders extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      midfielders: '',
    }
  }

  componentWillMount() {
    this.getStartingMidfielders()
  }

  getStartingMidfielders() {
    let team = this.props.team
    let numOfStarters = this.props.numOfStarters

    //get all the Midfielderss and randomize them
    let allMidfielders = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "MF"))
    let startingMidfielders = lineupSelector.selectStarters(allMidfielders, numOfStarters)

    this.setState({
      midfielders: startingMidfielders
    })
  }

  render() {
    return (
        <div className="pitch-area" id="midfielders">
        {this.state.midfielders.map((midfielder, i) => <Player player={midfielder}  key={i}/>)}
        </div>
    )
  }
}

export default Midfielders