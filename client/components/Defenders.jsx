import React from 'react'

import Player from './Player'

class Defenders extends React.Component { 

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.defenders) {
            return (
                <div className="pitch-area" id="defenders">
                {this.props.defenders.map((defender, i) => <Player player={defender}  key={i}/>)}
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Defenders