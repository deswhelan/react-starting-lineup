import React from 'react'

import lineupSelector from '../lineupSelector'
import Player from './Player'

class Forwards extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      forwards: '',
    }
  }

  componentWillMount() {
    this.getStartingForwards()
  }

  getStartingForwards() {
    let team = this.props.team
    let numOfStarters = this.props.numOfStarters

    //get all the Forwardss and randomize them
    let allForwards = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "FW"))
    let startingForwards = lineupSelector.selectStarters(allForwards, numOfStarters)

    this.setState({
      forwards: startingForwards
    })
  }

  render() {
    return (
        <div className="pitch-area" id="Forwards">
        {this.state.forwards.map((midfielder, i) => <Player player={midfielder}  key={i}/>)}
        </div>
    )
  }
}

export default Forwards