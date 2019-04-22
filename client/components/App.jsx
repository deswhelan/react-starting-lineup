import React from 'react'

// GET DATA FROM LOCAL FILE
import team from '../../server/public/teamData.json'

// GET INFO FROM API
import { getHeadToHeadResults } from '../api'

// Get functions
import {getStartingEleven} from '../lineupSelector'

// Get components
import Goalkeeper from './Goalkeeper'
import Defenders from './Defenders'
import Midfielders from './Midfielders'
import Forwards from './Forwards'
import HeadToHead from './HeadToHead.jsx';

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      team: team["manchesterunited"],
      results: null,
      defenders: null,
      midfielders: null,
      forwards: null
    }

    this.handleFormationClick = this.handleFormationClick.bind(this)  
    this.handleResultsClick = this.handleResultsClick.bind(this)  
    this.renderResults = this.renderResults.bind(this)
    this.renderFormation = this.renderFormation.bind(this)
  }

  handleFormationClick(e) {
    let formation = e.target.id.split('')
    getStartingEleven(this.state.team, formation, this.renderFormation)
  }

  renderFormation(df, mf, fw) {
    this.setState({
      defenders: df,
      midfielders: mf,
      forwards: fw
    })
  }

  handleResultsClick(e) {
    let opponent = e.target.id
    getHeadToHeadResults(opponent, this.renderResults)
  }


  renderResults(results) {
    this.setState({
      results: results
    })
  }

  render() {
    return (
      <div>
        <a href="/">
          <div className ="corners">
            <div className="top-left-corner"></div>
            <h1 className="title">Starting Lineup</h1>
            <div className="top-right-corner"></div>
          </div>
        </a>
        <div className="container">
          <Goalkeeper team={this.state.team}/>
          <Defenders defenders={this.state.defenders} team={this.state.team}/>
          <Midfielders  midfielders={this.state.midfielders} team={this.state.team}/>
          <Forwards forwards={this.state.forwards} team={this.state.team}/>

          <button onClick={this.handleFormationClick} id="541">5-4-1</button>
          <button onClick={this.handleFormationClick} id="532">5-3-2</button>
          <button onClick={this.handleFormationClick} id="442">4-4-2</button>
          <button onClick={this.handleFormationClick} id="433">4-3-3</button>
          <button onClick={this.handleFormationClick} id="424">4-2-4</button>
          <button onClick={this.handleFormationClick} id="352">3-5-2</button>
          <button onClick={this.handleFormationClick} id="343">3-4-3</button>
          <br></br>

          <button onClick={this.handleResultsClick} id="Arsenal">Arsenal</button>
          <button onClick={this.handleResultsClick} id="AFC Bournemouth">AFC Bournemouth</button>
          <button onClick={this.handleResultsClick} id="Brighton &amp; Hove Albion">Brighton and Hove Albion</button>
          <button onClick={this.handleResultsClick} id="Burnley">Burnley</button>
          <button onClick={this.handleResultsClick} id="Cardiff City">Cardiff City</button>
          <button onClick={this.handleResultsClick} id="Chelsea">Chelsea</button>
          <button onClick={this.handleResultsClick} id="Crystal Palace">Crystal Palace</button>
          <button onClick={this.handleResultsClick} id="Everton">Everton</button>
          <button onClick={this.handleResultsClick} id="Fulham">Fulham</button>
          <button onClick={this.handleResultsClick} id="Huddersfield Town">Huddersfield Town</button>
          <button onClick={this.handleResultsClick} id="Leicester City">Leicester City</button>
          <button onClick={this.handleResultsClick} id="Liverpool">Liverpool</button>
          <button onClick={this.handleResultsClick} id="Manchester City">Manchester City</button>
          <button onClick={this.handleResultsClick} id="Newcastle United">Newcastle United</button>
          <button onClick={this.handleResultsClick} id="Southampton">Southampton</button>
          <button onClick={this.handleResultsClick} id="Tottenham Hotspur">Tottenham Hotspur</button>
          <button onClick={this.handleResultsClick} id="West Ham United">West Ham United</button>
          <button onClick={this.handleResultsClick} id="Wolverhampton Wanderers">Wolverhampton Wanderers</button>

          <HeadToHead results={this.state.results}/>
        </div>
      </div>
    )
  }
}

export default App


