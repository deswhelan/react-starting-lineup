import React from 'react'

// GET DATA FROM LOCAL FILE
import team from '../../server/public/teamData.json'

// GET INFO FROM API
// import { getHoroscopeInfo } from '../api'

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
      forwardsNeeded: 3,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log("executing handleClick")
    this.setState({
      defendersNeeded: 4,
      midfieldersNeeded: 4,
      forwardsNeeded: 2,
    })
  }

  render() {
    return (
      <div>
        <a href="/">
          <div class ="corners">
            <div class="top-left-corner"></div>
            <h1 class="title">Starting Lineup</h1>
            <div class="top-right-corner"></div>
          </div>
        </a>
        <div onClick={this.handleClick} id="click-tester">Click Tester</div>
        <ul>
          <li>{this.state.defenders}</li>
          <li>{this.state.midfielders}</li>
          <li>{this.state.forwards}</li>
        </ul>
        <div class="container">
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


