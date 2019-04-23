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
import HeadToHeadButtons from './headToHeadButtons'
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
      headToHead: null,
      displayHeadToHeadButtons: false
    }

    this.handleFormationClick = this.handleFormationClick.bind(this) 
    this.renderFormation = this.renderFormation.bind(this)

    this.handleRecentResultsClick = this.handleRecentResultsClick.bind(this)
    this.renderRecentResults = this.renderRecentResults.bind(this)
    
    this.handleHeadToHeadClick = this.handleHeadToHeadClick.bind(this)  
    this.renderHeadToHead = this.renderHeadToHead.bind(this)

    this.renderHeadToHeadButtons = this.renderHeadToHeadButtons.bind(this)
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
    let opponent = e.target.value
    getHeadToHeadResults(opponent, this.renderHeadToHead)
  }

  renderHeadToHeadButtons () {
    this.setState({
      displayHeadToHeadButtons: !this.state.displayHeadToHeadButtons
    })
    console.log(this.state.displayHeadToHeadButtons)
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
          <h4>Select formation:</h4>
            <button onClick={this.handleFormationClick} id="541">5-4-1</button>
            <button onClick={this.handleFormationClick} id="532">5-3-2</button>
            <button onClick={this.handleFormationClick} id="451">4-5-1</button>
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

          <div className="results">
            <div className="recent-results">
              <button onClick={this.handleRecentResultsClick}>Recent Results</button>
              <RecentResults recentResults={this.state.recentResults}/>
            </div>

            <div className="head-to-head">
              <button onClick={this.renderHeadToHeadButtons}>Head-to-Head Results</button>
              <HeadToHeadButtons display={this.state.displayHeadToHeadButtons} handleHeadToHeadClick={this.handleHeadToHeadClick}/>
              <HeadToHead h2hResults={this.state.headToHead}/>
            </div>
          </div>

          <div className="corners">
            <div className="bottom-left-corner"></div>
            <div className="bottom-right-corner"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


