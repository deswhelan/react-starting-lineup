import React from 'react'
// import { Link } from 'react-router-dom'

import lineupSelector from '../lineupSelector'
import Defender from './Defender'

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

  componentDidMount() {
    console.log("DefendersDidMount")
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
    //get the rank name from the match object, which was passed as an argument by the route
    // let rankName = this.props.match.params.rank
    // let rank = this.props.ranks[rankName]
    console.log("Defenders Rendering")
    
    console.log("Starting defenders: ", this.state.defenders)

    return (
        <div className="pitch-area" id="defenders">
        {this.state.defenders.map((defender, i) => <Defender defender={defender}  key={i}/>)}
        </div>
    )
  }
}

export default Defenders