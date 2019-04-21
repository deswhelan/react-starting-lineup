import React from 'react'

// GET DATA FROM LOCAL FILE
import team from '../../server/public/teamData.json'

// GET INFO FROM API
import { getHeadToHeadResults } from '../api'

// GET INFO FROM DATABASE USING DB FUNCTIONS FILE
// import { getHoroscopeDbInfo } from '../../server/db/db'

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
      defendersNeeded: 4,
      midfieldersNeeded: 3,
      forwardsNeeded: 3,
      results: ''
    }

    console.log("Initial state: ", this.state)

    this.handleFormationClick = this.handleFormationClick.bind(this)  
    this.handleResultsClick = this.handleResultsClick.bind(this)  
    this.renderResults = this.renderResults.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateState = this.updateState.bind(this)
    // this.renderNewFormation = this.renderNewFormation.bind(this)
  }

  handleFormationClick(e) {
    console.log("executing handleFormationClick")

    let formation = e.target.id.split('')

    this.setState({
      defendersNeeded: parseInt(formation[0]),
      midfieldersNeeded: parseInt(formation[1]),
      forwardsNeeded: parseInt(formation[2])
    })
    console.log(this.state)
    this.render()
  }

  handleResultsClick(e) {
    let opponent = e.target.id
    getHeadToHeadResults(opponent, this.renderResults)
  }

  renderResults(results) {
    this.setState({
      results: results
    })

    //export this functionality to H2H component once rendering is occuring correctly
    let fixtures = this.state.results
    console.log("fixtures: ", fixtures)

    fixtures.map(fixture => {
      console.log(fixture.league_name + ":", fixture.match_hometeam_name, fixture.match_hometeam_score, " - ", fixture.match_awayteam_score, fixture.match_awayteam_name)
    })

  }

  // renderNewFormation(formation) {
  //   console.log("Rendering new formation: ", formation)
  //   this.setState({
  //     defendersNeeded: parseInt(formation[0]),
  //     midfieldersNeeded: parseInt(formation[1]),
  //     forwardsNeeded: parseInt(formation[2])
  //   })
  //   console.log(this.state)
  // }

  // updateState() {
  //   console.log("changing state!")

  //   this.setState({
  //     defendersNeeded: 6,
  //     midfieldersNeeded: 6,
  //     forwardsNeeded: 6,
  //   })  
  // }

  // handleSubmit() {
  //   console.log("handling submit")
  //   this.updateState()
  // }

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
        <button onClick={this.handleFormationClick} id="541">5-4-1</button>
        <button onClick={this.handleFormationClick} id="532">5-3-2</button>
        <button onClick={this.handleFormationClick} id="442">4-4-2</button>
        <button onClick={this.handleFormationClick} id="433">4-3-3</button>
        <button onClick={this.handleFormationClick} id="424">4-2-4</button>
        <button onClick={this.handleFormationClick} id="352">3-5-2</button>
        <button onClick={this.handleFormationClick} id="343">3-4-3</button>
        <br></br>
        <button onClick={this.handleResultsClick} id="Arsenal">Arsenal</button>
        <button onClick={this.handleResultsClick} id="Manchester City">Manchester City</button>
        <div className="container">
          <Goalkeeper team={this.state.team}/>
          <Defenders team={this.state.team} numOfStarters={this.state.defendersNeeded}/>
          <Midfielders team={this.state.team} numOfStarters={this.state.midfieldersNeeded}/>
          <Forwards team={this.state.team} numOfStarters={this.state.forwardsNeeded}/>
          <HeadToHead results={this.state.results}/>
        </div>
      </div>
    )
  }
}

export default App


