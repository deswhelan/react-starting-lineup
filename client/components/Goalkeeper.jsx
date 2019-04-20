import React from 'react'
// import { Link } from 'react-router-dom'

class Goalkeeper extends React.Component { 

  constructor(props) {
    super(props);
  }

 
  render() {
    //get the rank name from the match object, which was passed as an argument by the route
    // let rankName = this.props.match.params.rank
    // let rank = this.props.ranks[rankName]

    return (
        <div className="pitch-area" id="goalkeepers">
        {/* {#each Goalkeeper} */}
        <div className="player">
            <a className = "player-link"><img className="img-circle" src="/images/degea.png" alt=""/></a>
            <p className="img-text">Surname</p>
        </div>
        {/* {/each} */}
        </div>
    )
  }
}

export default Goalkeeper