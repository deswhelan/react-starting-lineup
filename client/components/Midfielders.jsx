import React from 'react'
// import { Link } from 'react-router-dom'

import lineupSelector from '../lineupSelector'
import Midfielder from './Midfielder'

class Midfielders extends React.Component { 

  constructor(props) {
    super(props);
    this.setState({
      midfielders: '',
    })
  }

  componentWillMount() {
    console.log("MidfieldersWillMount")
    this.getStartingMidfielders()
  }

  getStartingMidfielders() {
    let team = this.props.team
    let numOfStarters = this.props.numOfStarters

    //get all the Midfielderss and randomize them
    let allMidfielders = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "MF"))

    let startingMidfielders = lineupSelector.selectStarters(allMidfielders, numOfStarters)
    
    console.log(startingMidfielders)

    this.setState({
      midfielders: startingMidfielders
    })
  }

 
  render() {
    return (
        <div className="pitch-area" id="midfielders">
        {this.state.midfielders.map((midfielder, i) => <Midfielder midfielder={midfielder}  key={i}/>)}
        </div>
    )
  }
}

export default Midfielders