import React from 'react'
// import { HashRouter as Router, Route} from 'react-router-dom'

// GET DATA FORM LOCAL FILE
// import ranks from '../../data/ranks.js'

// GET REACT COMPONENTS
import Goalkeeper from './Goalkeeper'
import Defenders from './Defenders'
import Midfielders from './Midfielders'
import Forwards from './Forwards'

// GET INFO FROM API
// import { getHoroscopeInfo } from '../api'

// GET INFO FROM DATABASE USING DB FUNCTIONS FILE
// import { getHoroscopeDbInfo } from '../../server/db/db'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      team: [],
      defenders: 4,
      midfielders: 4,
      forwards: 2,
    }

    // this.renderHoroscopeInfo = this.renderHoroscopeInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  componentWillMount() {
    console.log("componentWillMount")
    // getHoroscopeInfo(this.renderHoroscopeInfo)
    // console.log("Info returned from getHoroscopeInfo: ", getHoroscopeInfo(this.renderHoroscopeInfo)
    // )
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  // renderHoroscopeInfo(err, horoscopes, horoscopeText, horoscopeName) {
  //   console.log("horoscope name: ", horoscopeName)
  //   this.setState({
  //     horoscopes: horoscopes.dailyhoroscope,
  //     horoscopeText: horoscopeText.split('<')[0],
  //     horoscopeName: horoscopeName,
  //     // celebName: getHoroscopeDbInfo(horoscopeName)
  //   })
  // }

  handleClick(e) {
    console.log("executing handleClick")
    this.setState({
      defenders: 4,
      midfielders: 3,
      forwards: 3,
    })
    // let horoscopeName = e.target.id
    // getHoroscopeInfo(this.renderHoroscopeInfo, horoscopeName)
  }

  render() {
    console.log('rendering')
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
          <Goalkeeper />
          <Defenders />
          <Midfielders />
          <Forwards />
        </div>
      </div>
    )
  }
}



// EXAMPLE REACT ROUTER BEHAVIOUR
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

export default App

