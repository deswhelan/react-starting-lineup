import React from 'react'

class Defender extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            defender: '',
        })
    }

    componentWillMount() {
        console.log("DefenderWillMount")
        this.setState({
            defender: this.props.defender
        })
    }

    render () {
        console.log(this.state.defender["surname"])
        return (
            <div className="player">
                <a className = "player-link"><img className="img-circle" src={this.state.defender["picture"]} alt=""/></a>
                <p className="img-text">{this.state.defender["surname"]}</p>
            </div>
        )
    }
}

export default Defender