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
        console.log("H2H componenent results: ", this.state.results)
    }

    render () {
        console.log("Rendering these results: ", this.state.results)
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