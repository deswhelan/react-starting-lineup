import React from 'react'

// import lineupSelector from '../lineupSelector'
import Player from './Player'

class Forwards extends React.Component { 

    constructor(props) {
        super(props)
    }

//   componentWillMount() {
//     this.getStartingForwards()
//   }

//   getStartingForwards() {
//     let team = this.props.team
//     let numOfStarters = this.props.numOfStarters

//     //get all the Forwardss and randomize them
//     let allForwards = lineupSelector.randomizePlayers(lineupSelector.getPlayersByPosition(team, "FW"))
//     let startingForwards = lineupSelector.selectStarters(allForwards, numOfStarters)

//     this.setState({
//       forwards: startingForwards
//     })
//   }

    render() {

        if(this.props.forwards){
            return (
                <div className="pitch-area" id="Forwards">
                    {this.props.forwards.map((forward, i) => {
                        console.log(forward)
                        return <Player player={forward}  key={i}/>
                        })}
                </div>
        )} else {
            return <div></div>
        }
    }
}

export default Forwards