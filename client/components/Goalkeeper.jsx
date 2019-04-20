import React from 'react'
// import { Link } from 'react-router-dom'

import lineupSelector from '../lineupSelector'

class Goalkeeper extends React.Component { 

  constructor(props) {
    super(props);
    this.setState({
      goalkeeper: ''
    })
  }

  componentWillMount() {
    console.log("goalkeeperWillMount")
    this.getAGoalKeeper()
  }

  componentDidMount() {
    console.log("goalkeeperDidMount")
  }

  getAGoalKeeper() {
    let team = this.props.team

    //get all the goalkeepers and randomize them
    let allGoalkeepers = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "GK"))

    let startingGoalkeeper = lineupSelector.selectStarters(allGoalkeepers, 1)
    
    this.setState({
      goalkeeper: startingGoalkeeper[0]
    })
  }

 
  render() {
    //get the rank name from the match object, which was passed as an argument by the route
    // let rankName = this.props.match.params.rank
    // let rank = this.props.ranks[rankName]
    console.log("Goalkeeper Rendering")
    
    console.log("Startin goalie: ", this.state.goalkeeper["surname"])

    return (
        <div className="pitch-area" id="goalkeepers">
        {/* {#each Goalkeeper} */}
        <div className="player">
            <a className = "player-link"><img className="img-circle" src={this.state.goalkeeper["picture"]} alt=""/></a>
            <p className="img-text">{this.state.goalkeeper["surname"]}</p>
        </div>
        {/* {/each} */}
        </div>
    )
  }
}

export default Goalkeeper