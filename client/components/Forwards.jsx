import React from 'react'

import Player from './Player'

class Forwards extends React.Component { 

    constructor(props) {
        super(props)
    }

    render() {

        if(this.props.forwards){
            return (
                <div className="pitch-area" id="Forwards">
                    {this.props.forwards.map((forward, i) => {
                        return <Player player={forward}  key={i}/>
                        })}
                </div>
        )} else {
            return <div></div>
        }
    }
}

export default Forwards