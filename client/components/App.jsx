import React from 'react'

// GET DATA FROM LOCAL FILE
import team from '../../server/public/teamData.json'

// GET INFO FROM API
import { getHeadToHeadResults } from '../api'
import { getRecentResults} from '../api'

// Get functions
import {getStartingEleven} from '../lineupSelector'

// Get components
import Goalkeeper from './Goalkeeper'
import Defenders from './Defenders'
import Midfielders from './Midfielders'
import Forwards from './Forwards'
import RecentResults from './RecentResults'
import HeadToHead from './HeadToHead.jsx';

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      team: team["manchesterunited"],
      goalkeeper: null,
      defenders: null,
      midfielders: null,
      forwards: null,
      recentResults: null,
      headToHead: null
    }

    this.handleFormationClick = this.handleFormationClick.bind(this) 
    this.renderFormation = this.renderFormation.bind(this)

    this.handleRecentResultsClick = this.handleRecentResultsClick.bind(this)
    this.renderRecentResults = this.renderRecentResults.bind(this)
    
    this.handleHeadToHeadClick = this.handleHeadToHeadClick.bind(this)  
    this.renderHeadToHead = this.renderHeadToHead.bind(this)
  }

  handleFormationClick (e) {
    let formation = e.target.id.split('')
    getStartingEleven(this.state.team, formation, this.renderFormation)
  }

  renderFormation (gk, df, mf, fw) {
    this.setState({
      goalkeeper: gk,
      defenders: df,
      midfielders: mf,
      forwards: fw
    })
  }

  handleRecentResultsClick () {
    getRecentResults(this.renderRecentResults)
  }

  renderRecentResults (recentResults) {
    this.setState({
      recentResults: recentResults
    })
  }

  handleHeadToHeadClick (e) {
    let opponent = e.target.id
    getHeadToHeadResults(opponent, this.renderHeadToHead)
  }

  renderHeadToHead (h2hResults) {
    this.setState({
      headToHead: h2hResults
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

          <div className="formation-select">
          <p>Select formation</p>
            <button onClick={this.handleFormationClick} id="541">5-4-1</button>
            <button onClick={this.handleFormationClick} id="532">5-3-2</button>
            <button onClick={this.handleFormationClick} id="442">4-4-2</button>
            <button onClick={this.handleFormationClick} id="433">4-3-3</button>
            <button onClick={this.handleFormationClick} id="424">4-2-4</button>
            <button onClick={this.handleFormationClick} id="352">3-5-2</button>
            <button onClick={this.handleFormationClick} id="343">3-4-3</button>
          </div>

          <Goalkeeper goalkeeper={this.state.goalkeeper} team={this.state.team}/>
          <Defenders defenders={this.state.defenders} team={this.state.team}/>
          <Midfielders  midfielders={this.state.midfielders} team={this.state.team}/>
          <Forwards forwards={this.state.forwards} team={this.state.team}/>

          <button onClick={this.handleRecentResultsClick}>Recent Results</button>
          <RecentResults recentResults={this.state.recentResults}/>

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

          <HeadToHead h2hResults={this.state.headToHead}/>
        </div>
      </div>
    )
  }
}

export default App


