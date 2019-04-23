import React from 'react'

class HeadToHeadButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        if(this.props.display){
            return (
                <div className="head-to-head-buttons">
                    <form>
                        <label>Choose opponent </label>
                        <select id = "myList" onChange={(e) => this.props.handleHeadToHeadClick(e)}>
                            <option value = "">none</option>
                            <option value = "Arsenal">Arsenal</option>
                            <option value = "AFC Bournemouth">AFC Bournemouth</option>
                            <option value = "Brighton &amp; Hove Albion">Brighton &amp; Hove Albion</option>
                            <option value = "Burnley">Burnley</option>
                            <option value = "Cardiff City">Cardiff City</option>
                            <option value = "Chelsea">Chelsea</option>
                            <option value = "Crystal Palace">Crystal Palace</option>
                            <option value = "Everton">Everton</option>
                            <option value = "Fulham">Fulham</option>
                            <option value = "Huddersfield Town">Huddersfield Town</option>
                            <option value = "Leicester City">Leicester City</option>
                            <option value = "Liverpool">Liverpool</option>
                            <option value = "Manchester City">Manchester City</option>
                            <option value = "Newcastle United">Newcastle United</option>
                            <option value = "Southampton">Southampton</option>
                            <option value = "Tottenham Hotspur">Tottenham Hotspur</option>
                            <option value = "Watford">Watford</option>
                            <option value = "West Ham United">West Ham United</option>
                            <option value = "Wolverhampton Wanderers">Wolverhampton Wanderers</option>
                        </select>
                    </form>
                </div>
        )} else return <div></div>
    }
}   

export default HeadToHeadButtons