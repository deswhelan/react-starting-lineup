import React from 'react'

class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="player">
                <a className = "player-link"><img className="img-circle" src={this.props.player["picture"]} alt=""/></a>
                <p className="img-text">{this.props.player["surname"]}</p>
            </div>
        )
    }
}   

export default Player