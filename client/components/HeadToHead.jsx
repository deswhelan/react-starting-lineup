import React from 'react'

class HeadToHead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Results: ''
        }
    }

    componentWillMount() {
        this.setState({
            // Results: this.props.HeadToHead.firstTeam_VS_secondTeam
        })
    }

    render () {
        return (
            <div className="HeadToHead">
                <p>Head to head results!</p>
                <div className="corners">
                    <div className="bottom-left-corner"></div>
                    <div className="bottom-right-corner"></div>
                </div>
            </div>
        )
    }
}   

export default HeadToHead