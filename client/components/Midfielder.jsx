import React from 'react'

class Midfielder extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            midfielder: '',
        })
    }

    componentWillMount() {
        console.log("MidfielderWillMount")
        this.setState({
            midfielder: this.props.midfielder
        })
    }

    render () {
        console.log(this.state.midfielder["surname"])
        return (
            <div className="player">
                <a className = "player-link"><img className="img-circle" src={this.state.midfielder["picture"]} alt=""/></a>
                <p className="img-text">{this.state.midfielder["surname"]}</p>
            </div>
        )
    }
}

export default Midfielder