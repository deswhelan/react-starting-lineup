import React from 'react'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: '',
        }
    }

    componentWillMount() {
        this.setState({
            player: this.props.player
        })
    }

    render () {
        return (
            <div className="player">
                <a className = "player-link"><img className="img-circle" src={this.state.player["picture"]} alt=""/></a>
                <p className="img-text">{this.state.player["surname"]}</p>
            </div>
        )
    }
}   

export default Player