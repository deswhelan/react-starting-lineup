import React from 'react'

class HeadToHeadButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        if(this.props.display){
            return (
                <div className="head-to-head-buttons">
                <h4>Choose opponent:</h4>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Arsenal">Arsenal</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="AFC Bournemouth">AFC Bournemouth</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Brighton &amp; Hove Albion">Brighton and Hove Albion</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Burnley">Burnley</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Cardiff City">Cardiff City</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Chelsea">Chelsea</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Crystal Palace">Crystal Palace</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Everton">Everton</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Fulham">Fulham</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Huddersfield Town">Huddersfield Town</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Leicester City">Leicester City</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Liverpool">Liverpool</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Manchester City">Manchester City</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Newcastle United">Newcastle United</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Southampton">Southampton</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Tottenham Hotspur">Tottenham Hotspur</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="West Ham United">West Ham United</button>
                <button onClick={this.handleHeadToHeadClick} className="head-to-head-button" id="Wolverhampton Wanderers">Wolverhampton Wanderers</button>
                </div>
        )} else return <div></div>
    }
}   

export default HeadToHeadButtons