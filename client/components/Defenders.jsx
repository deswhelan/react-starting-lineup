import React from 'react'
// import { Link } from 'react-router-dom'

class Defenders extends React.Component { 

  constructor(props) {
    super(props);
  }

  componentWillMount() {
      console.log("defendersWillMount")
  }

  componentDidMount() {
    console.log("defendersDidMount")
  }

 
  render() {
    //get the rank name from the match object, which was passed as an argument by the route
    // let rankName = this.props.match.params.rank
    // let rank = this.props.ranks[rankName]
    console.log("Defenders Rendering")

    return (
        <div className="pitch-area" id="defenders">
        {/* {#each Defenders} */}
        <div className="player">
            <a className = "player-link"><img className="img-circle" src="/images/lindelof.png" alt=""/></a>
            <p className="img-text">Lindelof</p>
        </div>
        {/* {/each} */}
        </div>
    )
  }
}

export default Defenders