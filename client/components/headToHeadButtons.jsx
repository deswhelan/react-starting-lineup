import React from 'react'

class HeadToHeadButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        if(this.props.display){
            return (
                <div className="HeadToHeadButtons">
                <button onClick={this.handleHeadToHeadClick} id="Arsenal">Arsenal</button>
                <button onClick={this.handleHeadToHeadClick} id="AFC Bournemouth">AFC Bournemouth</button>
                <button onClick={this.handleHeadToHeadClick} id="Brighton &amp; Hove Albion">Brighton and Hove Albion</button>
                <button onClick={this.handleHeadToHeadClick} id="Burnley">Burnley</button>
                <button onClick={this.handleHeadToHeadClick} id="Cardiff City">Cardiff City</button>
                <button onClick={this.handleHeadToHeadClick} id="Chelsea">Chelsea</button>
                <button onClick={this.handleHeadToHeadClick} id="Crystal Palace">Crystal Palace</button>
                <button onClick={this.handleHeadToHeadClick} id="Everton">Everton</button>
                <button onClick={this.handleHeadToHeadClick} id="Fulham">Fulham</button>
                <button onClick={this.handleHeadToHeadClick} id="Huddersfield Town">Huddersfield Town</button>
                <button onClick={this.handleHeadToHeadClick} id="Leicester City">Leicester City</button>
                <button onClick={this.handleHeadToHeadClick} id="Liverpool">Liverpool</button>
                <button onClick={this.handleHeadToHeadClick} id="Manchester City">Manchester City</button>
                <button onClick={this.handleHeadToHeadClick} id="Newcastle United">Newcastle United</button>
                <button onClick={this.handleHeadToHeadClick} id="Southampton">Southampton</button>
                <button onClick={this.handleHeadToHeadClick} id="Tottenham Hotspur">Tottenham Hotspur</button>
                <button onClick={this.handleHeadToHeadClick} id="West Ham United">West Ham United</button>
                <button onClick={this.handleHeadToHeadClick} id="Wolverhampton Wanderers">Wolverhampton Wanderers</button>
                </div>
        )} else return <div></div>
    }
}   

export default HeadToHeadButtons