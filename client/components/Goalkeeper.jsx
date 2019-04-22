import React from 'react'

// import lineupSelector from '../lineupSelector'
import Player from './Player'

class Goalkeeper extends React.Component { 

  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //   this.getStartingGoalKeeper()
  // }

  // getStartingGoalKeeper() {
  //   let team = this.props.team

  //   //get all the goalkeepers and randomize them
  //   let allGoalkeepers = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "GK"))

  //   let startingGoalkeeper = lineupSelector.selectStarters(allGoalkeepers, 1)
    
  //   this.setState({
  //     goalkeeper: startingGoalkeeper[0]
  //   })
  // }

  render() {
    if(this.props.goalkeeper) {
        return (
            <div className="pitch-area" id="goalkeeper">
            {this.props.goalkeeper.map((goalkeeper, i) => <Player player={goalkeeper}  key={i}/>)}
            </div>
        )
    } else {
        return <div></div>
    }
}
}

export default Goalkeeper