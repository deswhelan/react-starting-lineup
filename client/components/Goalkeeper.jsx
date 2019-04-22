import React from 'react'

import Player from './Player'

class Goalkeeper extends React.Component { 

  constructor(props) {
    super(props)
  }

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