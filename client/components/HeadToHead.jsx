import React from 'react'

class HeadToHead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: ''
        }
    }

    componentWillMount() {
        this.setState({
            results: this.props.results
        })
    }

    render () {
        return (
            <div className="HeadToHead">
                {/* <p>{this.state.results[0].match_hometeam_name}</p> */}
                <div className="corners">
                    <div className="bottom-left-corner"></div>
                    <div className="bottom-right-corner"></div>
                </div>
            </div>
        )
    }
}   

export default HeadToHead