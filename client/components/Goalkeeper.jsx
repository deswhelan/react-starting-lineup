import React from 'react'

import lineupSelector from '../lineupSelector'

class Goalkeeper extends React.Component { 

  constructor(props) {
    super(props);
    this.setState({
      goalkeeper: ''
    })
  }

  componentWillMount() {
    this.getStartingGoalKeeper()
  }

  getStartingGoalKeeper() {
    let team = this.props.team

    //get all the goalkeepers and randomize them
    let allGoalkeepers = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "GK"))

    let startingGoalkeeper = lineupSelector.selectStarters(allGoalkeepers, 1)
    
    this.setState({
      goalkeeper: startingGoalkeeper[0]
    })
  }

  render() {
    return (
      <div className="pitch-area" id="goalkeepers">
        <div className="player">
          <a className = "player-link"><img className="img-circle" src={this.state.goalkeeper["picture"]} alt=""/></a>
          <p className="img-text">{this.state.goalkeeper["surname"]}</p>
        </div>
      </div>
    )
  }
}

export default Goalkeeper