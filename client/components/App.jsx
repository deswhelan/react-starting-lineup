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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      team: team["manchesterunited"],
      defendersNeeded: 4,
      midfieldersNeeded: 3,
      forwardsNeeded: 3
    }

    console.log("Initial state: ", this.state)

    this.handleClick = this.handleClick.bind(this)  
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateState = this.updateState.bind(this)
    // this.renderNewFormation = this.renderNewFormation.bind(this)
  }

  // shouldComponentUpdate(){
  //   return true
  // }

  handleClick(e) {
    console.log("executing handleClick")

    getHeadToHeadResults()

    let formation = e.target.id.split('')

    this.setState({
      defendersNeeded: parseInt(formation[0]),
      midfieldersNeeded: parseInt(formation[1]),
      forwardsNeeded: parseInt(formation[2])
    })
    console.log(this.state)
    this.render()
    // this.shouldComponentUpdate()
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
        <button onClick={this.handleClick} id="541">5-4-1</button>
        <button onClick={this.handleClick} id="532">5-3-2</button>
        <button onClick={this.handleClick} id="442">4-4-2</button>
        <button onClick={this.handleClick} id="433">4-3-3</button>
        <button onClick={this.handleClick} id="424">4-2-4</button>
        <button onClick={this.handleClick} id="352">3-5-2</button>
        <button onClick={this.handleClick} id="343">3-4-3</button>
        {/* <form className="form" onSubmit={this.handleSubmit}>
            <label for="def" className="form-item">
                Defenders:
                <input type="number" name="defenders"/>
            </label>
            
            <label for="mid" className="form-item">
                Midfielders:
                <input type="number" name="midfielders"/>
            </label>
            
            <label for="fwd" className="form-item">
                Forwards:
                <input type="number" name="forwards"/>
            </label>
            
            <input type="submit" name="" value="Submit"/>
        </form> */}
        <div className="container">
          <Goalkeeper team={this.state.team}/>
          <Defenders team={this.state.team} numOfStarters={this.state.defendersNeeded}/>
          <Midfielders team={this.state.team} numOfStarters={this.state.midfieldersNeeded}/>
          <Forwards team={this.state.team} numOfStarters={this.state.forwardsNeeded}/>
        </div>
      </div>
    )
  }
}

export default App

// EXAMPLE REACT ROUTER BEHAVIOUR

// import { HashRouter as Router, Route} from 'react-router-dom'

// const App = () => {
//   return (
//     <div>
//       <h1>Attenborough in da house!</h1>
//       <div className="container">
//         <Router>
//           <div className="content">
//             <Route path='/' component={() => <Nav ranks={ranks} />} />
//             <Route exact path='/' component={Home} />
//             {/* pass through match as an argument to our compenent in our route*/}
//             <Route path='/list/:rank' component={({match}) => <Classifications ranks={ranks} match={match} />} />
//             <Route path='/rank/:rank/:name' component={({match}) => <Classification ranks={ranks} match={match} />} />
//           </div>
//         </Router>
//       </div>
//     </div>

//   )
// }


